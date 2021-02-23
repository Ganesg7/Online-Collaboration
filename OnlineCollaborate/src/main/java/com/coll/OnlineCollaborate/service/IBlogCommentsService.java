package com.coll.OnlineCollaborate.service;

import java.util.List;

import com.coll.OnlineCollaborate.model.BlogComments;

public interface IBlogCommentsService {
	
	List<BlogComments> getAllBlogComments();
	List<BlogComments> getCommentsbyBlogId(int blogId);
	BlogComments getBlogCommentsById(int blogCommentsId);
	boolean addBlogComments(BlogComments blogComments);
	boolean updateBlogComments(BlogComments blogComments);
	boolean deleteBlogComments(int blogCommentsId);

}
