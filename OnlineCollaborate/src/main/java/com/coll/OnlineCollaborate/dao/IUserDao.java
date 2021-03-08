package com.coll.OnlineCollaborate.dao;

import java.util.List;

import com.coll.OnlineCollaborate.model.User;

public interface IUserDao {
	
	List<User> userListbyStatus(String status);
	List<User> getAllusers();
	User getUserById(int userId);
	User getUserByName(String username);
	User validateUser(User user);
	boolean addUser(User user);
	boolean updateUser(User user);
	boolean deleteUser(int userId);
	boolean deactiveUser(int userId);
	boolean activeUser(int userId);
	boolean logoutUser(int userId);
	List<User> getAllDeactiveUser();
	boolean updateUserProfile(String file, Integer userId);

}
