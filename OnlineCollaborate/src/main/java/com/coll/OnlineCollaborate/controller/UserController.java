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

import com.coll.OnlineCollaborate.model.User;
import com.coll.OnlineCollaborate.service.IUserService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
public class UserController {
	
	@Autowired
	IUserService userService;
	
	@PostMapping("save-user")public boolean saveUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	
	@GetMapping("user-list")
	public List<User> allUsers(){
		return userService.getAllusers();
	}
	
	@DeleteMapping("delete-user/{userId}")
	public boolean deleteUser(@PathVariable("userId") int userId) {
		return userService.deleteUser(userId);
	}
	
	@GetMapping("user/{userId}")
	public User userById(@PathVariable("userId") int userId) {
		return userService.getUserById(userId);
	}
	
	@PostMapping("update-user/{userId}")
	public boolean updateUser(@RequestBody User user, @PathVariable("userId") int userId) {
        user.setUserId(userId);
		return userService.updateUser(user);
	}
	
	@GetMapping("deactive-list")
	public List<User> AllDeactiveUser(){
		return userService.getAllDeactiveUser();
	}

	@PostMapping("active-user/{userId}")
	public boolean activeUser(@RequestBody User user, @PathVariable("userId") int userId) {
		return userService.activeUser(userId);
	}
	
	@PostMapping("validate-user")
	public User validateUser(@RequestBody User user) {
		return userService.validateUser(user);
	}
	
	@PostMapping("logout-user/{userId}")
	public boolean logoutUser(@RequestBody User user, @PathVariable("userId") int userId) {
		return userService.logoutUser(userId);
	}
}
