package com.coll.OnlineCollaborate.daoImpl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.coll.OnlineCollaborate.dao.IBlogCommentsDao;
import com.coll.OnlineCollaborate.model.Blog;
import com.coll.OnlineCollaborate.model.BlogComments;

@Repository("blogCommentsDao")
@Transactional
public class BlogCommentsDaoImpl implements IBlogCommentsDao {

	@Autowired
	SessionFactory sessionFactory;
	@Override
	public List<BlogComments> getAllBlogComments() {
		return sessionFactory.getCurrentSession().createQuery("from BlogComments", BlogComments.class).getResultList();
	}

	@Override
	public BlogComments getBlogCommentsById(int blogId) {
		return sessionFactory.getCurrentSession().get(BlogComments.class, Integer.valueOf(blogId));
	}

	@Override
	public boolean addBlogComments(BlogComments blogComments) {
		try {
			sessionFactory.getCurrentSession().save(blogComments);
			return true;
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean updateBlogComments(BlogComments blogComments) {
		try {
			sessionFactory.getCurrentSession().update(blogComments);
			return true;
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteBlogComments(int blogCommentsId) {
		try {
			sessionFactory.getCurrentSession().delete(getBlogCommentsById(blogCommentsId));
			return true;
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return false;
		}
	}

	@Override
	public List<BlogComments> getCommentsbyBlogId(int blogId) {
     		return (List<BlogComments>) sessionFactory.getCurrentSession().get(BlogComments.class,Integer.valueOf(blogId));
	}

}
