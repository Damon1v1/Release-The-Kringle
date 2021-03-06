DROP DATABASE IF EXISTS kringle_db;

CREATE DATABASE kringle_db;

USE kringle_db;

CREATE TABLE product(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    description VARCHAR(150),
    price DECIMAL(10,2),
    image VARCHAR(150),
    has_nuts BOOLEAN, -- this becomes tinyint
    has_wheat BOOLEAN, -- this becomes tinyint
    PRIMARY KEY (id)
);

CREATE TABLE loyalty(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
    balance DECIMAL(10,2),
    PRIMARY KEY (id)
);