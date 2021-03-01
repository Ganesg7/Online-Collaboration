import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  user : User=new User();
  currentUser : any;  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  loginform=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  validateUser() {
    this.user=new User();
    this.user.username=this.Username.value;
    this.user.password=this.Password.value;
    
    this.userService.checkUser(this.user).subscribe (
      data => {
        console.log(data);
        if(data!=null) {
          this.currentUser=data;
          console.log(this.currentUser.firstName);
        }
        else {
          console.log("Object Empty");
        }
      },
      error => console.log(error)
    )
  }

  get Username() {
    return this.loginform.get ('username');
  }

  get Password() {
    return this.loginform.get ('password');
  }

}
