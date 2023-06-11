-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: corgishop
-- ------------------------------------------------------
-- Server version	5.7.36

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
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,11,3,'Roupinha de terror Chucky','2023-06-11 21:05:46','2023-06-11 21:05:46'),(2,11,3,'Roupinha de terror Chucky','2023-06-11 21:16:41','2023-06-11 21:16:41'),(3,11,5,'Roupa Pós Castração','2023-06-11 21:16:43','2023-06-11 21:16:43'),(4,11,5,'Roupa Pós Castração','2023-06-11 21:20:08','2023-06-11 21:20:08'),(5,11,5,'Roupa Pós Castração','2023-06-11 21:20:13','2023-06-11 21:20:13'),(6,11,6,'Blusa My Dream Heart','2023-06-11 21:24:10','2023-06-11 21:24:10'),(7,11,7,'Roupa Pós Castração Gato','2023-06-11 21:24:22','2023-06-11 21:24:22'),(8,11,3,'Roupinha de terror Chucky','2023-06-11 21:27:21','2023-06-11 21:27:21');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-11 19:22:15
