package com.coll.OnlineCollaborate.service;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.coll.OnlineCollaborate.model.Blog;

public interface IBlogService {
	
	List<Blog> getAllBlogs();
	List<Blog> getBlogsByStatus(String status);
	List<Blog> getUsersBlogs(int id);
	Blog getBlogById(int blogId);
	boolean addBlog(Blog blog);
	boolean updateBlog(Blog blog);
	boolean activeBlog(int blogId);
	List<Blog> getAllDeactiveBlog();
	boolean deleteBlog(int blogId);
	List<Blog> getBlogbyUserId(int userId);
}

