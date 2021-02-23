package com.coll.OnlineCollaborate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coll.OnlineCollaborate.model.Blog;
import com.coll.OnlineCollaborate.model.User;
import com.coll.OnlineCollaborate.service.IBlogService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
public class BlogController {

	@Autowired
	IBlogService blogService;
	
	@PostMapping("save-blog")
	public boolean saveBlog(@RequestBody Blog blog)
	{
		return blogService.addBlog(blog);
	}
	
	@GetMapping("blog-list")
	public List<Blog> allBlog()
	{
		return blogService.getAllBlogs();
	}
	
	@DeleteMapping("delete-blog/{blog_id}")
	public boolean deleteBlog(@PathVariable("blog_id") int blog_id) {
		return blogService.deleteBlog(blog_id);
	}
	
	@GetMapping("blog/{blog_id}")
	public Blog blogById(@PathVariable("blog_id") int blog_id)
	{
		return blogService.getBlogById(blog_id);
	}
	
	@PostMapping("update-blog/{blog}")
	public boolean updateBlog(@PathVariable("blog") Blog blog)
	{
		return blogService.updateBlog(blog);
	}
}
