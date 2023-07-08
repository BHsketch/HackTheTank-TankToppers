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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `UserID` varchar(10) NOT NULL,
  `Name` varchar(30) DEFAULT NULL,
  `Email` varchar(40) DEFAULT NULL,
  `MobileNo` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('U1','John Smith','john.smith@email.com','555-1234'),('U10','Daniel Anderson','daniel.anderson@email.com','555-8901'),('U11','Jennifer Davis','jennifer.davis@email.com','555-2345'),('U12','Matthew Brown','matthew.brown@email.com','555-6789'),('U13','Lauren Clark','lauren.clark@email.com','555-0123'),('U14','Christopher Rodriguez','christopher.rodriguez@email.com','555-4567'),('U15','Elizabeth Martinez','elizabeth.martinez@email.com','555-8901'),('U16','Michael Thomas','michael.thomas@email.com','555-2345'),('U17','Ashley Johnson','ashley.johnson@email.com','555-6789'),('U18','William Martin','william.martin@email.com','555-0123'),('U19','Melissa Jackson','melissa.jackson@email.com','555-4567'),('U2','Jane Doe','jane.doe@email.com','555-5678'),('U20','Joseph Harris','joseph.harris@email.com','555-8901'),('U21','Jessica Young','jessica.young@email.com','555-2345'),('U22','Christopher Allen','christopher.allen@email.com','555-6789'),('U23','Amanda King','amanda.king@email.com','555-0123'),('U24','Brandon Wright','brandon.wright@email.com','555-4567'),('U25','Stephanie Scott','stephanie.scott@email.com','555-8901'),('U26','Jonathan Green','jonathan.green@email.com','555-2345'),('U27','Megan Baker','megan.baker@email.com','555-6789'),('U28','Nicholas Nelson','nicholas.nelson@email.com','555-0123'),('U29','Hannah Carter','hannah.carter@email.com','555-4567'),('U3','Robert Johnson','robert.johnson@email.com','555-9012'),('U30','Kevin Mitchell','kevin.mitchell@email.com','555-8901'),('U31','Emily Perez','emily.perez@email.com','555-2345'),('U32','David Roberts','david.roberts@email.com','555-6789'),('U33','Ashley Hernandez','ashley.hernandez@email.com','555-2323'),('U34','Daniel Taylor','daniel.taylor@email.com','555-9898'),('U35','Samantha Martinez','samantha.martinez@email.com','555-6565'),('U36','Joshua Anderson','joshua.anderson@email.com','555-1212'),('U37','Christine Lee','christine.lee@email.com','555-9898'),('U38','Matthew Rodriguez','matthew.rodriguez@email.com','555-6565'),('U39','Emily Brown','emily.brown@email.com','555-1212'),('U4','Mary Williams','mary.williams@email.com','555-3456'),('U40','Michael Davis','michael.davis@email.com','555-9898'),('U41','Jessica Garcia','jessica.garcia@email.com','555-6565'),('U42','Christopher Rodriguez','christopher.rodriguez@email.com','555-1212'),('U43','Alyssa Scott','alyssa.scott@email.com','555-9898'),('U44','Ryan Mitchell','ryan.mitchell@email.com','555-6565'),('U45','Julia Perez','julia.perez@email.com','555-1212'),('U46','Brandon Carter','brandon.carter@email.com','555-9898'),('U47','Taylor Turner','taylor.turner@email.com','555-6565'),('U48','Samuel Parker','samuel.parker@email.com','555-1212'),('U49','Olivia Evans','olivia.evans@email.com','555-9898'),('U5','David Brown','david.brown@email.com','555-7890'),('U50','Joseph Edwards','joseph.edwards@email.com','555-6565'),('U6','Karen Wilson','karen.wilson@email.com','555-2345'),('U7','Paula Garcia','paula.garcia@email.com','555-6789'),('U8','Richard Lee','richard.lee@email.com','555-0123'),('U9','Sarah Taylor','sarah.taylor@email.com','555-4567');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
