import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Blog} from '../blog';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { param } from 'jquery';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.scss']
})
export class MyBlogComponent implements OnInit {

  Id:number;
  blog: any;
  constructor(private route: ActivatedRoute, private blogservice: BlogService) { }

  ngOnInit(): void {
     this.route.params.subscribe(
       (params: Params) =>{
         this.Id =+params["Id"];
         console.log(this.Id);

         this.blogservice.getUserBlog(this.Id).subscribe(
           data =>{
             this.blog = data;
             console.log(this.blog);
           }
         )
       }
       
     )
  }

}
