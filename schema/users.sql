-- database: craft

-- Table structure for table `users`

USE craft;

CREATE TABLE users 
(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
email VARCHAR(75), 
password VARCHAR(75), 
first_name VARCHAR(50), 
last_name VARCHAR(50)
);