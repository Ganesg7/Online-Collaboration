package com.coll.OnlineCollaborate.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

@Component
@Entity
public class Blog extends DomainResponse implements Serializable{
	
	private static final long serialVersionUID=1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int blogId;
	String blogTitel, blogContent;
	@JsonDeserialize(using = LocalDateTimeDeserializer.class)
	LocalDateTime blogPosted;
	String status;
	int noOfLikes,noFoComments, noOfViews;
	int userId;
	String username;
	@OneToMany(mappedBy="blog", fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	@JsonManagedReference
	List<BlogComments> blogComments;
	public int getBlogId() {
		return blogId;
	}
	public void setBlogId(int blogId) {
		this.blogId = blogId;
	}
	public String getBlogTitel() {
		return blogTitel;
	}
	public void setBlogTitel(String blogTitel) {
		this.blogTitel = blogTitel;
	}
	public String getBlogContent() {
		return blogContent;
	}
	public void setBlogContent(String blogContent) {
		this.blogContent = blogContent;
	}
	public LocalDateTime getBlogPosted() {
		return blogPosted;
	}
	public void setBlogPosted(LocalDateTime blogPosted) {
		this.blogPosted = blogPosted;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getNoOfLikes() {
		return noOfLikes;
	}
	public void setNoOfLikes(int noOfLikes) {
		this.noOfLikes = noOfLikes;
	}
	public int getNoFoComments() {
		return noFoComments;
	}
	public void setNoFoComments(int noFoComments) {
		this.noFoComments = noFoComments;
	}
	public int getNoOfViews() {
		return noOfViews;
	}
	public void setNoOfViews(int noOfViews) {
		this.noOfViews = noOfViews;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public List<BlogComments> getBlogComments() {
		return blogComments;
	}
	public void setBlogComments(List<BlogComments> blogComments) {
		this.blogComments = blogComments;
	}
	
	
}
