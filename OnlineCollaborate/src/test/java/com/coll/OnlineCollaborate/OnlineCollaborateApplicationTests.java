package com.coll.OnlineCollaborate;

import static org.junit.Assert.assertEquals;

import java.sql.SQLException;

import org.junit.*;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.coll.OnlineCollaborate.dao.IBlogDao;
import com.coll.OnlineCollaborate.dao.IUserDao;
import com.coll.OnlineCollaborate.daoImpl.BlogDaoImpl;
import com.coll.OnlineCollaborate.daoImpl.UserDaoImpl;
import com.coll.OnlineCollaborate.model.User;

@SpringBootTest
class OnlineCollaborateApplicationTests {

	IUserDao userDao=null;
	IBlogDao blogDao=null;

	@Before
	public void setup() throws ClassNotFoundException, SQLException {
	
			userDao=new UserDaoImpl();
			blogDao=new BlogDaoImpl();
	}

	@Test
	public void addUser() {
		User actualUser=new User();
		actualUser.setFirstName("Clark");
		actualUser.setLastName("Kent");
		actualUser.setUsername("Superman");
		actualUser.setPassword("kal-el");
		actualUser.setEmail("clark-el@gmail.com");
		actualUser.setRole("Admin");
		actualUser.setStatus("Active");
		actualUser.setIsOnline("false");
		actualUser.setEnabled("true");
		userDao.addUser(actualUser);
		
		User Expected=new User(8, "Kara", "Zoral", "supergirl", "kara", "karazoral@gmail.com", "User", "Active", "false", "true");
		assertEquals(Expected.getUsername(), actualUser.getUsername());
	}
}
