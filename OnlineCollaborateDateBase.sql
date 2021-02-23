create database collaboration;
use collaboration;

create table User(
userId int not null auto_increment,
firstName varchar(30),
lastName varchar(30),
username varchar(20),
password varchar(30),
email varchar(30),
role varchar(30),
status  varchar(10),
isOnline boolean,
enabled boolean,
primary key(userId)
);

create table Blog (
 blogId integer not null auto_increment,
 blogContent varchar(255),
 blogPosted date,
 blogTitel varchar(255),
 noFoComments integer not null,
 noOfLikes integer not null, 
 noOfViews integer not null,
 status varchar(255),
 userId integer not null, 
 username varchar(255),
  foreign key (userId) references User (userId),
 primary key (blogId));
 
 create table BlogComments (
 blogCommentId integer not null auto_increment,
 blogComment varchar(255), 
 currentDate date, 
 onOfLikes integer not null, 
 titel varchar(255), 
 userId integer not null, 
 userProfileId varchar(255),
 username varchar(255), 
 blogId integer ,
 foreign key (blogId) references Blog (blogId),
 primary key (blogCommentId));
 
