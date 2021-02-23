package com.coll.OnlineCollaborate.dao;

import java.util.List;

import com.coll.OnlineCollaborate.model.Blog;
import com.coll.OnlineCollaborate.model.BlogComments;

public interface IBlogCommentsDao {
	
	List<BlogComments> getAllBlogComments();
	List<BlogComments> getCommentsbyBlogId(int blogId);
	BlogComments getBlogCommentsById(int blogCommentsId);
	boolean addBlogComments(BlogComments blogComments);
	boolean updateBlogComments(BlogComments blogComments);
	boolean deleteBlogComments(int blogCommentsId);
	

}
