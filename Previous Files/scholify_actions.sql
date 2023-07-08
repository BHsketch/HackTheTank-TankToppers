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
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actions` (
  `ActionName` varchar(50) NOT NULL,
  `UserID` varchar(10) NOT NULL,
  `CardID` varchar(10) NOT NULL,
  `StepNo` int DEFAULT NULL,
  PRIMARY KEY (`ActionName`,`UserID`,`CardID`),
  KEY `UserID` (`UserID`),
  KEY `CardID` (`CardID`),
  CONSTRAINT `actions_ibfk_1` FOREIGN KEY (`ActionName`) REFERENCES `actiontype` (`ActionName`),
  CONSTRAINT `actions_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  CONSTRAINT `actions_ibfk_3` FOREIGN KEY (`CardID`) REFERENCES `cards` (`CardID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actions`
--

LOCK TABLES `actions` WRITE;
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
INSERT INTO `actions` VALUES ('applied','U25','C1',6),('applied','U25','C5',6),('applied','U26','C1',6),('applied','U3','C4',6),('applied','U4','C4',6),('applied','U45','C13',6),('applied','U46','C14',6),('bookmarked','U24','C12',3),('bookmarked','U25','C1',3),('bookmarked','U25','C5',3),('bookmarked','U26','C1',3),('bookmarked','U3','C4',3),('bookmarked','U4','C4',3),('bookmarked','U44','C12',3),('bookmarked','U45','C13',3),('bookmarked','U46','C14',3),('bookmarked','U47','C15',3),('bookmarked','U48','C16',3),('documents uploaded','U25','C5',7),('documents uploaded','U26','C1',7),('documents uploaded','U3','C4',7),('documents uploaded','U4','C4',7),('documents uploaded','U45','C13',7),('documents uploaded','U46','C14',7),('downloaded rulebook','U25','C1',5),('downloaded rulebook','U25','C5',5),('downloaded rulebook','U26','C1',5),('downloaded rulebook','U3','C4',5),('downloaded rulebook','U4','C4',5),('downloaded rulebook','U45','C13',5),('downloaded rulebook','U46','C14',5),('follow up email','U26','C1',10),('follow up email','U45','C13',10),('follow up enquiry','U26','C1',9),('follow up enquiry','U45','C13',9),('follow up enquiry','U46','C14',9),('Login','U24','C12',1),('Login','U25','C1',1),('Login','U25','C5',1),('Login','U26','C1',1),('Login','U26','C3',1),('Login','U3','C4',1),('Login','U36','C16',1),('Login','U4','C4',1),('Login','U44','C12',1),('Login','U45','C13',1),('Login','U46','C14',1),('Login','U47','C15',1),('Login','U48','C16',1),('peer review','U25','C1',4),('peer review','U25','C5',4),('peer review','U26','C1',4),('peer review','U3','C4',4),('peer review','U4','C4',4),('peer review','U44','C12',4),('peer review','U45','C13',4),('peer review','U46','C14',4),('peer review','U47','C15',4),('re upload docs','U26','C1',11),('Terms and conditions enquiry','U24','C12',2),('Terms and conditions enquiry','U25','C1',2),('Terms and conditions enquiry','U25','C5',2),('Terms and conditions enquiry','U26','C1',2),('Terms and conditions enquiry','U3','C4',2),('Terms and conditions enquiry','U4','C4',2),('Terms and conditions enquiry','U44','C12',2),('Terms and conditions enquiry','U45','C13',2),('Terms and conditions enquiry','U46','C14',2),('Terms and conditions enquiry','U47','C15',2),('Terms and conditions enquiry','U48','C16',2),('visited sponsors website','U26','C1',8),('visited sponsors website','U4','C4',8),('visited sponsors website','U45','C13',8),('visited sponsors website','U46','C14',8);
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;
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
