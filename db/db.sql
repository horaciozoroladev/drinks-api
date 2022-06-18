create database drinks_api;

use drinks_api;

create table users (
    id int not null auto_increment,
    _id varchar(100) not null,
    givenname varchar(100),
    surname varchar(100),
    username varchar(100),
    pass longtext,
    token longtext,
    
    primary key(id)
);

insert into users set 
	_id = uuid(),
    givenname = 'john',
    surname = 'doe',
    username = 'johndoe',
    pass = to_base64('12345');

create table done_drinks (
    id int not null auto_increment,
    _id varchar(100) not null,
    idDrink varchar(20),
    users__id varchar(100),
    
    primary key(id)
);

create table favorite_drinks (
    id int not null auto_increment,
    _id varchar(100) not null,
    idDrink varchar(20),
    users__id varchar(100),
    
    primary key(id)
);
