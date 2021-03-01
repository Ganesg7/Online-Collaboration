import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss']
})
export class ActiveUserComponent implements OnInit {


  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any>= new Subject();

  constructor(private userservice: UserService) { }
  
  users!: Observable <User[]>;
  user: User =new User();
  deactiveList: any;
  isEnabled= false;


  ngOnInit(){
   this.isEnabled= false;
   this.dtOptions={
     pageLength: 6,
     stateSave: true,
     lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
     processing: true
   };
   this.userservice.deactiveList().subscribe(data =>{
     this.users =data;
     this.dtTrigger.next(); 
   }) 
  }

  enabledUser(id: number){
    
    this.userservice.activeUser(id).
    subscribe(
      (data) =>{
        this.deactiveList =data;
        console.log(this.deactiveList);
        this.activeUser(id);

      },
      (error) => console.log(error)
    );
  }

  activeUserForm = new FormGroup({
    userId: new FormControl()
  });

  activeUser(id){
    this.user =new User();
    this.user.userId=id;
    this.userservice.activeUser(this.user.userId).subscribe(
    data => {
      this.userservice.deactiveList().subscribe( data =>{
        this.users =data
        console.log(this.users)
      } )
    },
    error => console.log(error));
  }

  get UserId() {
    return this.activeUserForm.get('userId');
  }

}
