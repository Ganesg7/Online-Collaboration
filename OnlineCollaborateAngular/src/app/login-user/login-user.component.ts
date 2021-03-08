import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  user : User=new User();
  currentUser : any;  
  constructor(private userService: UserService, private router: Router) { }

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
         if(this.currentUser.role==="Admin"){
           this.router.navigateByUrl("/nav/" +`${this.currentUser.userId}`);
         }
         else{
          this.router.navigateByUrl("/nav-user/"+`${this.currentUser.userId}`);
         }
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
 
  RegUser(){
    $(".pagess").css("visibility","visible");
    $(".card").css("visibility","hidden");
  }

}
