import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog: Blog=new Blog();
  private baseUrl='http://localhost:8080/api/';
  constructor(private http:HttpClient){ }

  getBlogList(): Observable<any>{
     return this.http.get(`${this.baseUrl}`+`blog-list`);
  }

  createBlog(blog: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+`save-blog`,blog);
  }

  deleteBlog(blogId:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete-blog/${blogId}`,{ responseType: 'text' });
  }

  getBlog(blogId:number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/blog/${blogId}`);
  }

  updateBlog(blogId:number, blog: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/update-blog/${blogId}`,blog);
  }

  deactiveBlogList():Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'deactiveBlog-list');
  }

  activeBlog(blogId: number): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/active-blog/${blogId}`, {responseType: 'text'});  
      } 
}
