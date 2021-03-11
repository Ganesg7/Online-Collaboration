import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Blog} from '../blog';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';



@Component({
  selector: 'app-bloglists',
  templateUrl: './bloglists.component.html',
  styleUrls: ['./bloglists.component.scss']
})
export class BloglistsComponent implements OnInit {

  constructor(private blogservice: BlogService) { }
   blogArray:any[]=[];
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();

   blogs!: Observable <Blog[]>;
   blog: Blog = new Blog();
   deleteBlogMessage = false;
   bloglist: any;
   isupdated = false;

  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.blogservice.getBlogList().subscribe((data)=>
    {
      this.blogs = data;
      this.dtTrigger.next();
    })
  }

  deleteBlog(blogId: number){
    this.blogservice.deleteBlog(blogId)
    .subscribe(
      (data) =>{
        console.log(data);
        this.deleteBlogMessage = true;
        this.blogservice.getBlogList()
        .subscribe((data) =>
        {
          this.blog= data
        })
      },
      (error) => console.log(error));
  }
      updatBlog(id: number){
        this.blogservice.getBlog(id)
        .subscribe(
          (data) => {
            this.bloglist =data;
            console.log(this.bloglist);
          }
        ),
        (error) => console.log(error);
  

      }

      blogUpdateform = new FormGroup({
        blogId : new FormControl(),
        blogTitel: new FormControl(),
        blogContent: new FormControl(),
        status: new FormControl()
      });

      updateBlog(){
        this.blog = new Blog();
        this.blog.blogId= this.BlogId.value;
        this.blog.blogTitel= this.BlogTitel.value;
        this.blog.blogContent=this.BlogContent.value;
        this.blog.status=this.Status.value;
        console.log(this.BlogTitel.value);

        this.blogservice.updateBlog(this.blog.blogId, this.blog).subscribe(
          data => {
            this.isupdated =true;
            this.blogservice.getBlogList().subscribe(data => {
              this.blogs = data
            })
          },
          error => {
            console.log(this.blogs);
            console.log(error)});
        
      }
   
      get BlogId(){
        return this.blogUpdateform.get('blogId');
      }
      get BlogTitel(){
        return this.blogUpdateform.get('blogTitel');
      }
      get BlogContent(){
        return this.blogUpdateform.get('blogContent');
      }

      get Status(){
        return this.blogUpdateform.get('status');
      }

      changeisUpdate(){
        this.isupdated = false;
      }

  }

