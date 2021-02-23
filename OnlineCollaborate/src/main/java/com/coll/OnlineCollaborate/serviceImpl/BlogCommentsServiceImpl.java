package com.coll.OnlineCollaborate.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.coll.OnlineCollaborate.dao.IBlogCommentsDao;
import com.coll.OnlineCollaborate.model.BlogComments;
import com.coll.OnlineCollaborate.service.IBlogCommentsService;

@Service
@Transactional
public class BlogCommentsServiceImpl implements IBlogCommentsService {
	
	@Autowired
	IBlogCommentsDao blogCommentsDao;

	@Override
	public List<BlogComments> getAllBlogComments() {
		return blogCommentsDao.getAllBlogComments();
	}

	@Override
	public BlogComments getBlogCommentsById(int blogCommentsId) {
		return blogCommentsDao.getBlogCommentsById(blogCommentsId);
	}

	@Override
	public boolean addBlogComments(BlogComments blogComments) {
		return blogCommentsDao.addBlogComments(blogComments);
	}

	@Override
	public boolean updateBlogComments(BlogComments blogComments) {
		return blogCommentsDao.updateBlogComments(blogComments);
	}

	@Override
	public boolean deleteBlogComments(int blogCommentsId) {
		return blogCommentsDao.deleteBlogComments(blogCommentsId);
	}

	@Override
	public List<BlogComments> getCommentsbyBlogId(int blogId) {
 		return blogCommentsDao.getCommentsbyBlogId(blogId);
 		
	}

}
