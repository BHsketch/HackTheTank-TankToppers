CREATE SCHEMA scholify;

use scholify;

CREATE TABLE users (
  user_id VARCHAR(5) PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert query 1
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S1', 'Rahul Sharma', 'rahul@example.com', 'pass123', '1995-07-15', 'Delhi', '1234567890');

-- Insert query 2
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S2', 'Neha Patel', 'neha@example.com', 'password1', '1990-02-28', 'Gujarat', '9876543210');

-- Insert query 3
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S3', 'Sandeep Verma', 'sandeep@example.com', 'pass456', '1988-12-10', 'Uttar Pradesh', '8765432109');

-- Insert query 4
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S4', 'Pooja Singh', 'pooja@example.com', '123pass', '1992-06-22', 'Bihar', '7654321098');

-- Insert query 5
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S5', 'Amit Gupta', 'amit@example.com', 'pass789', '1997-09-05', 'Rajasthan', '6543210987');

-- Insert query 6
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S6', 'Priya Patel', 'priya@example.com', 'pwd123', '1994-04-18', 'Gujarat', '5432109876');

-- Insert query 7
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S7', 'Sachin Sharma', 'sachin@example.com', 'pass789', '1991-11-08', 'Haryana', '4321098765');

-- Insert query 8
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S8', 'Anjali Verma', 'anjali@example.com', 'abc123', '1989-03-12', 'Uttar Pradesh', '3210987654');

-- Insert query 9
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S9', 'Rajesh Kumar', 'rajesh@example.com', 'pass123', '1993-08-30', 'Maharashtra', '2109876543');

-- Insert query 10
INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('S10', 'Riya Singh', 'riya@example.com', 'pwd456', '1996-01-25', 'Delhi', '1098765432');

INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('U11', 'Virat Sharma', 'virat@example.com', 'pwd456', '1996-01-29', 'Bihar', '1098799432');

INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('U12', 'Anushka Shah', 'anushka@example.com', 'pwd46', '1996-03-19', 'Gujarat', '1090799432');

INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('U13', 'Alia Shah', 'alia@example.com', 'pwd46', '1996-03-19', 'Delhi', '1090799432');

INSERT INTO users (user_id, user_name, email, password, date_of_birth, address, phone_number)
VALUES ('U14', 'Ananya Sharma', 'anan@example.com', 'pwd46', '1996-03-19', 'UP', '1090799432');


UPDATE users
SET user_id = 'U10'
WHERE user_id = 'S10';

CREATE TABLE scholarships (
  scholarship_id VARCHAR(5) PRIMARY KEY,
  organization VARCHAR(255) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  scholarship_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

INSERT INTO scholarships (scholarship_id, organization, amount, scholarship_name, description)
VALUES ('s1', 'Indian Scholarship Foundation', 5000.00, 'Merit Scholarship', 'This scholarship is awarded to outstanding students based on their academic achievements.');

INSERT INTO scholarships (scholarship_id, organization, amount, scholarship_name, description)
VALUES ('s2', 'National Education Trust', 10000.00, 'Financial Need Scholarship', 'This scholarship is designed to support students with financial difficulties who demonstrate a strong commitment to education.');

INSERT INTO scholarships (scholarship_id, organization, amount, scholarship_name, description)
VALUES ('s3', 'Women in Science Association', 7500.00, 'STEM Scholarship', 'This scholarship aims to empower and encourage women pursuing studies in Science, Technology, Engineering, and Mathematics (STEM) fields.');

CREATE TABLE user_scholarship (
  user_id VARCHAR(5),
  scholarship_id VARCHAR(5),
  PRIMARY KEY (user_id, scholarship_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id)
);

-- Insert query 1
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U1', 's1');

-- Insert query 2
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U2', 's2');

-- Insert query 3
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U3', 's3');

-- Insert query 4
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U4', 's1');

-- Insert query 5
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U5', 's2');

-- Insert query 6
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U6', 's3');

-- Insert query 7
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U7', 's1');

-- Insert query 8
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U8', 's2');

-- Insert query 9
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U9', 's3');

-- Insert query 10
INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U10', 's1');

INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U11', 's1');

INSERT INTO user_scholarship (user_id, scholarship_id)
VALUES ('U12', 's1');


CREATE TABLE pages (
  page_id VARCHAR(5) PRIMARY KEY,
  page_name VARCHAR(255) ,
  step_number INT
);

-- Insert query for page p1 (Login page, step 0)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p1', 'Login page', 0);

-- Insert query for page p2 (Home page, step 1)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p2', 'Home page', 1);

-- Insert query for page p3 (Contact us page, step 2)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p3', 'Contact us page', 2);

-- Insert query for page p4 (Scholarships listing page, step 2)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p4', 'Scholarships listing page', 2);

-- Insert query for page p5 (About us page, step 2)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p5', 'About us page', 2);

-- Insert query for page p6 (Scholarship main page, step 3)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p6', 'Scholarship main page', 3);

-- Insert query for page p7 (Bookmarked scholarship, step 4)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p7', 'Bookmarked scholarship', 4);

-- Insert query for page p8 (Terms and conditions, step 4)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p8', 'Terms and conditions', 4);

-- Insert query for page p9 (Not eligible, step 4)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p9', 'Not eligible', 4);

-- Insert query for page p10 (Applied, step 4)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p10', 'Applied', 4);

-- Insert query for page p11 (Saved incomplete application, step 5)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p11', 'Saved incomplete application', 5);

-- Insert query for page p12 (Submitted application, step 5)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p12', 'Submitted application', 5);

-- Insert query for page p13 (Failed doc verification, step 6)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p13', 'Failed doc verification', 6);

-- Insert query for page p14 (Successfully applied, step 6)
INSERT INTO pages (page_id, page_name, step_number)
VALUES ('p14', 'Successfully applied', 6);

CREATE TABLE user_scholarship_page (
  user_id VARCHAR(5),
  scholarship_id VARCHAR(5),
  page_id VARCHAR(5),
  step_number INT,
  PRIMARY KEY (user_id, page_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (page_id) REFERENCES pages(page_id),
  CONSTRAINT fk_scholarship FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);


-- Insert queries for user_scholarship_page table

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U1', NULL, 'p1', 0);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U1', NULL, 'p2', 1);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U1', NULL, 'p4', 2);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U1', 's1', 'p6', 3);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U1', 's1', 'p8', 4);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U4', NULL, 'p1', 0);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U4', NULL, 'p2', 1);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U4', NULL, 'p3', 2);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U7', NULL, 'p1', 0);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U10', NULL, 'p1', 0);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U10', NULL, 'p2', 1);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U10', NULL, 'p4', 2);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U10', 's1', 'p6', 3);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U10', 's1', 'p7', 4);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U11', NULL, 'p1', 0);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U11', NULL, 'p2', 1);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U11', NULL, 'p4', 2);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U11', 's1', 'p6', 3);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U11', 's1', 'p7', 4);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U12', NULL, 'p1', 0);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U12', NULL, 'p2', 1);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U12', NULL, 'p4', 2);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U12', 's1', 'p6', 3);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U12', 's1', 'p10', 4);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U12', 's1', 'p12', 5);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U12', 's1', 'p13', 6);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U13', NULL, 'p1', 0);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U13', NULL, 'p2', 1);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U13', NULL, 'p5', 2);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U2', NULL, 'p1', 0);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U2', NULL, 'p2', 1);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U2', NULL, 'p4', 2);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U2', 's2', 'p6', 3);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U14', NULL, 'p1', 0);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U14', NULL, 'p2', 1);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U14', NULL, 'p4', 2);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U14', 's1', 'p6', 3);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U14', 's1', 'p10', 4);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U14', 's1', 'p12', 5);

INSERT INTO user_scholarship_page (user_id, scholarship_id, page_id, step_number)
VALUES ('U14', 's1', 'p14', 6);


