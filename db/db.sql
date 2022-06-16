create database drinks_api;

use drinks_api;

create table users (
    id int not null auto_increment,
    _id varchar(100) default uuid(),
    name varchar(100),
    surname varchar(100),
    username varchar(100),
    pass longtext,
    token longtext,
);

create table done_drinks (
    id int not null auto_increment,
    _id varchar(100) default uuid(),
    idDrink varchar(20),
    users__id varchar(100)
);

create table favourite_drinks (
    id int not null auto_increment,
    _id varchar(100) default uuid(),
    idDrink varchar(20),
    users__id varchar(100)
);