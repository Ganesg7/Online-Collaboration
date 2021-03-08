import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { param } from 'jquery';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent  implements OnInit {

  Id:number;
  user:any;
  constructor( private route: ActivatedRoute, private userservice: UserService){ }

 
  ngOnInit(){
    this.route.params.subscribe (
     (params:Params)=> {
       this.Id=+params["Id"];
       console.log(this.Id);
 
       this.userservice.getUser(this.Id).subscribe (
         data=>{
           this.user=data;
           console.log(this.user);
         }
    )
     }
     
 
    )
 }
 }
 