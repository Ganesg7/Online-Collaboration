import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Blog} from '../blog';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { User } from '../user';

@Component({
  selector: 'app-active-blog',
  templateUrl: './active-blog.component.html',
  styleUrls: ['./active-blog.component.scss']
})
export class ActiveBlogComponent implements OnInit {

  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any>= new Subject();

  constructor(private blogservice: BlogService) { }

  blogs!: Observable <Blog[]>;
  blog: Blog =new Blog();
  deactiveBlogList:any;
  isPosted= false;

  ngOnInit(): void {
    this.isPosted=false;
    this.dtOptions={
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.blogservice.deactiveBlogList().subscribe(data =>{
      this.blogs =data;
      this.dtTrigger.next();

    })
  }

  postBlog(id: number){
    this.blogservice.activeBlog(id).subscribe(
      (data) =>{
        this.deactiveBlogList =data;
        console.log(this.deactiveBlogList);
         this.postingBlog(id);
      },
      (error) => console.log(error)
    );
  }

  postBlogForm =new FormGroup({
    blogId: new FormControl()
  });
   
  postingBlog(id){
    this.blog = new Blog();
    this.blog.blogId=id;
    this.blogservice.activeBlog(this.blog.blogId).subscribe(
      data => {
        this.blogservice.deactiveBlogList().subscribe(
          data =>{
            this.blogs =data
            console.log(this.blogs)
          }
        )
      },
      error =>console.log(error)
    );
  }

  get BlogId(){
    return this.postBlogForm.get('blogId');
  }

}
