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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `valorProduto` decimal(10,2) DEFAULT NULL,
  `valorOff` decimal(10,2) DEFAULT NULL,
  `categoriaId` int(11) DEFAULT NULL,
  `imagem1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagem2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagem3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagem4` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoriaId` (`categoriaId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoriaId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Roupinha de terror Chucky',159.99,199.99,1,'./src/assets/img/Products/Roupinhas/Roupinha-chucky/Roupinha-chucky1.jpg','./src/assets/img/Products/Roupinhas/Roupinha-chucky/Roupinha-chucky2.jpg','./src/assets/img/Products/Roupinhas/Roupinha-chucky/Roupinha-chucky3.jpg','./src/assets/img/Products/Roupinhas/Roupinha-chucky/Roupinha-chucky4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(4,'Capa de Chuva La Casa',129.99,169.99,1,'./src/assets/img/Products/Roupinhas/Roupinha-lacasa/Roupinha-lacasa1.jpg','./src/assets/img/Products/Roupinhas/Roupinha-lacasa/Roupinha-lacasa2.jpg','./src/assets/img/Products/Roupinhas/Roupinha-lacasa/Roupinha-lacasa3.jpg','./src/assets/img/Products/Roupinhas/Roupinha-lacasa/Roupinha-lacasa4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(5,'Roupa Pós Castração',109.99,139.99,1,'./src/assets/img/Products/Roupinhas/Roupinha-castracao/Roupinha-castracao1.jpg','./src/assets/img/Products/Roupinhas/Roupinha-castracao/Roupinha-castracao2.jpg','./src/assets/img/Products/Roupinhas/Roupinha-castracao/Roupinha-castracao3.jpg','./src/assets/img/Products/Roupinhas/Roupinha-castracao/Roupinha-castracao4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(6,'Blusa My Dream Heart',79.99,99.99,1,'./src/assets/img/Products/Roupinhas/Roupinha-blusa-dream/Roupinha-blusa-dream1.jpg','./src/assets/img/Products/Roupinhas/Roupinha-blusa-dream/Roupinha-blusa-dream2.jpg','./src/assets/img/Products/Roupinhas/Roupinha-blusa-dream/Roupinha-blusa-dream3.jpg','./src/assets/img/Products/Roupinhas/Roupinha-blusa-dream/Roupinha-blusa-dream4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(7,'Roupa Pós Castração Gato',89.99,109.99,1,'./src/assets/img/Products/Roupinhas/Roupinha-castragato/Roupinha-castragato1.jpg','./src/assets/img/Products/Roupinhas/Roupinha-castragato/Roupinha-castragato2.jpg','./src/assets/img/Products/Roupinhas/Roupinha-castragato/Roupinha-castragato3.jpg','./src/assets/img/Products/Roupinhas/Roupinha-castragato/Roupinha-castragato4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(8,'Brinquedo Arranhador Furacão',29.99,49.99,2,'./src/assets/img/Products/Acessorios/Acessorio-arranhador/Acessorio-arranhador1.jpg','./src/assets/img/Products/Acessorios/Acessorio-arranhador/Acessorio-arranhador2.jpg','./src/assets/img/Products/Acessorios/Acessorio-arranhador/Acessorio-arranhador3.jpg','./src/assets/img/Products/Acessorios/Acessorio-arranhador/Acessorio-arranhador4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(9,'Cama Future Pet Cinza',169.99,199.99,2,'./src/assets/img/Products/Acessorios/Acessorio-caminha-cinza/Acessorio-caminha-cinza1.jpg','./src/assets/img/Products/Acessorios/Acessorio-caminha-cinza/Acessorio-caminha-cinza2.jpg','./src/assets/img/Products/Acessorios/Acessorio-caminha-cinza/Acessorio-caminha-cinza3.jpg','./src/assets/img/Products/Acessorios/Acessorio-caminha-cinza/Acessorio-caminha-cinza4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(10,'Capa de Chuva Aventureiro',49.99,69.99,2,'./src/assets/img/Products/Acessorios/Acessorio-capa-chuva/Acessorio-capa-chuva1.jpg','./src/assets/img/Products/Acessorios/Acessorio-capa-chuva/Acessorio-capa-chuva2.jpg','./src/assets/img/Products/Acessorios/Acessorio-capa-chuva/Acessorio-capa-chuva3.jpg','./src/assets/img/Products/Acessorios/Acessorio-capa-chuva/Acessorio-capa-chuva4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(11,'Peitoral e Guia Toh',49.99,69.99,2,'./src/assets/img/Products/Acessorios/Acessorio-peitoral-guia/Acessorio-peitoral-guia1.jpg','./src/assets/img/Products/Acessorios/Acessorio-peitoral-guia/Acessorio-peitoral-guia2.jpg','./src/assets/img/Products/Acessorios/Acessorio-peitoral-guia/Acessorio-peitoral-guia3.jpg','./src/assets/img/Products/Acessorios/Acessorio-peitoral-guia/Acessorio-peitoral-guia4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(12,'Brinquedo Bola de Corda',19.99,29.99,3,'./src/assets/img/Products/Brinquedo/Brinquedo-bola/Brinquedo-bola1.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-bola/Brinquedo-bola2.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-bola/Brinquedo-bola3.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-bola/Brinquedo-bola4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(13,'Brinquedo Chalesco Pelúcia',19.99,29.99,3,'./src/assets/img/Products/Brinquedo/Brinquedo-chalesco/Brinquedo-chalesco1.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-chalesco/Brinquedo-chalesco2.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-chalesco/Brinquedo-chalesco3.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-chalesco/Brinquedo-chalesco4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(14,'Brinquedo Buddy Parafusos',49.99,69.99,3,'./src/assets/img/Products/Brinquedo/Brinquedo-parafuso/Brinquedo-parafuso1.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-parafuso/Brinquedo-parafuso2.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-parafuso/Brinquedo-parafuso3.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-parafuso/Brinquedo-parafuso4.jpg','2023-06-10 21:06:26','2023-06-10 18:06:26'),(15,'Brinquedo Chalesco Porquinho',39.99,49.99,3,'./src/assets/img/Products/Brinquedo/Brinquedo-porquinho/Brinquedo-porquinho1.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-porquinho/Brinquedo-porquinho2.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-porquinho/Brinquedo-porquinho3.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-porquinho/Brinquedo-porquinho4.jpg','2023-06-10 21:06:27','2023-06-10 18:06:27'),(16,'Brinquedo Jambo Ratinho',29.99,39.99,3,'./src/assets/img/Products/Brinquedo/Brinquedo-ratinho/Brinquedo-ratinho1.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-ratinho/Brinquedo-ratinho2.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-ratinho/Brinquedo-ratinho3.jpg','./src/assets/img/Products/Brinquedo/Brinquedo-ratinho/Brinquedo-ratinho4.jpg','2023-06-10 21:06:27','2023-06-10 18:06:27');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
