-- database: craft

-- Table structure for table `users`

USE craft;

CREATE TABLE users 
(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
first VARCHAR(75), 
last VARCHAR(75), 
email VARCHAR(75), 
password VARCHAR(75)
);