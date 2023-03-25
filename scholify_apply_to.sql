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
-- Table structure for table `apply_to`
--

DROP TABLE IF EXISTS `apply_to`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apply_to` (
  `UserID` varchar(10) NOT NULL,
  `CardID` varchar(10) NOT NULL,
  PRIMARY KEY (`UserID`,`CardID`),
  KEY `CardID` (`CardID`),
  CONSTRAINT `apply_to_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  CONSTRAINT `apply_to_ibfk_2` FOREIGN KEY (`CardID`) REFERENCES `cards` (`CardID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apply_to`
--

LOCK TABLES `apply_to` WRITE;
/*!40000 ALTER TABLE `apply_to` DISABLE KEYS */;
INSERT INTO `apply_to` VALUES ('U1','C1'),('U36','C1'),('U46','C1'),('U10','C10'),('U45','C10'),('U47','C10'),('U11','C11'),('U45','C11'),('U47','C11'),('U48','C11'),('U12','C12'),('U45','C12'),('U47','C12'),('U13','C13'),('U14','C14'),('U15','C15'),('U16','C16'),('U17','C17'),('U18','C18'),('U19','C19'),('U2','C2'),('U37','C2'),('U40','C2'),('U46','C2'),('U49','C2'),('U20','C20'),('U21','C21'),('U22','C22'),('U23','C23'),('U24','C24'),('U25','C25'),('U26','C26'),('U27','C27'),('U28','C28'),('U29','C29'),('U3','C3'),('U38','C3'),('U40','C3'),('U49','C3'),('U30','C30'),('U31','C31'),('U32','C32'),('U33','C33'),('U34','C34'),('U35','C35'),('U39','C4'),('U4','C4'),('U40','C4'),('U48','C4'),('U40','C5'),('U46','C5'),('U48','C5'),('U49','C5'),('U5','C5'),('U47','C6'),('U48','C6'),('U49','C6'),('U6','C6'),('U45','C7'),('U47','C7'),('U48','C7'),('U7','C7'),('U47','C8'),('U8','C8'),('U48','C9'),('U9','C9');
/*!40000 ALTER TABLE `apply_to` ENABLE KEYS */;
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
