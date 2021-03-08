import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';
import { param } from 'jquery';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.scss']
})
export class NavUserComponent implements OnInit {

  Id:number;
  user:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private userservice: UserService, private router:Router) {}
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
      logout(){
        this.router.navigateByUrl("/home");
        this.userservice.logoutUser(this.Id).subscribe(
          data=>console.log(data)
        );
     }
    }
