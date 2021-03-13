package com.coll.OnlineCollaborate.dao;

import java.util.List;

import com.coll.OnlineCollaborate.model.Blog;
import com.coll.OnlineCollaborate.model.User;

public interface IBlogDao {

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
