-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: scholify
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `CardID` varchar(10) NOT NULL,
  `CompanyName` varchar(20) DEFAULT NULL,
  `OpportunityName` varchar(30) DEFAULT NULL,
  `Amount` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`CardID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES ('C1','ABC Corp','Undergraduate Scholarship','$5000'),('C10','123 Foundation','Travel Grant','$1000'),('C11','ABC Corp','Summer Camp Sponsorship','$500'),('C12','456 Fund','Volunteer Grant','$500'),('C13','XYZ Inc','STEM Scholarship','$10000'),('C14','123 Foundation','Sports Scholarship','$5000'),('C15','ABC Corp','Entrepreneurship Grant','$5000'),('C16','XYZ Inc','Art Scholarship','$5000'),('C17','456 Fund','Music Scholarship','$5000'),('C18','Company B','Arts Scholarship','8000'),('C19','Company C','Sports Scholarship','7000'),('C2','XYZ Inc','Graduate Scholarship','$10000'),('C20','Company D','STEM Scholarship','9000'),('C21','Company E','Arts Scholarship','7500'),('C22','Company F','Sports Scholarship','6500'),('C23','Company G','STEM Scholarship','11000'),('C24','Company H','Arts Scholarship','8500'),('C25','Company I','Sports Scholarship','7500'),('C26','Company J','STEM Scholarship','12000'),('C27','Company K','Arts Scholarship','9000'),('C28','Company L','Sports Scholarship','8000'),('C29','Company M','STEM Scholarship','15000'),('C3','123 Foundation','Merit Scholarship','$2000'),('C30','Company N','Arts Scholarship','10000'),('C31','Company O','Sports Scholarship','9000'),('C32','Company P','STEM Scholarship','18000'),('C33','Company Q','Arts Scholarship','11000'),('C34','Company R','Sports Scholarship','10000'),('C35','Company S','STEM Scholarship','20000'),('C4','ABC Corp','Research Grant','$10000'),('C5','XYZ Inc','Study Abroad Scholarship','$5000'),('C6','456 Fund','Community College Scholarship','$3000'),('C7','XYZ Inc','Doctoral Fellowship','$15000'),('C8','ABC Corp','Internship Program','Paid'),('C9','XYZ Inc','Leadership Development Program','Paid');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-25 10:58:04
