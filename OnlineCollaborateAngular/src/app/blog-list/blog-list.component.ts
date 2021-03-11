import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import { Blog } from '../blog';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  
  Id: number;
  user: any;

  constructor(private blogservice: BlogService,private route: ActivatedRoute, private userservice: UserService) { }
  blog: Blog =new Blog();
  submitted = false;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.Id = +params["Id"];
        console.log(this.Id);

        this.userservice.getUser(this.Id).subscribe(
          data => {
            this.user = data;
            console.log(this.user);
          }
        )
      }


    )
    this.submitted = false;
  }

  blogpostform= new FormGroup(
    {
      blogTitel: new FormControl(''),
      blogContent:new FormControl('')
     
    });
  
    blogpost(blogpost:any){
      this.blog =new Blog();
      this.blog.userId=this.user.userId;
      this.blog.username=this.user.username; 
      this.blog.blogContent=this.BlogContent.value;
      this.blog.blogTitel=this.BlogTitel.value;
    if(this.user.role=="Admin"){
      this.blog.status="Posted";
    }
    else{
      this.blog.status="Waiting For Apporved";
    }
    this.submitted=true;
      console.log(this.blog.blogContent);
      this.save();
    }
    save(){
      this.blogservice.createBlog(this.blog)
      .subscribe(data=>console.log(data), error=> console.log(error));
      this.blog =new Blog();
    }

    get BlogContent(){
      return this.blogpostform.get('blogContent');
    }
    get BlogTitel(){
      return this.blogpostform.get('blogTitel');
    }

    blogPostForm(){
      this.submitted=false;
      this.blogpostform.reset();
    }
}
