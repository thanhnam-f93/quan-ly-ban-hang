-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: manage_store
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `bill_details`
--

DROP TABLE IF EXISTS `bill_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bill_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quanlity` int DEFAULT NULL,
  `discount` bigint DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bill_id_idx` (`bill_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `bill_id` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill_details`
--

LOCK TABLES `bill_details` WRITE;
/*!40000 ALTER TABLE `bill_details` DISABLE KEYS */;
INSERT INTO `bill_details` VALUES (1,2,1,2,5,NULL,NULL),(2,2,1,10,5,NULL,NULL),(3,2,2,10,5,NULL,NULL),(4,3,1,2,5,NULL,NULL),(5,3,1,10,5,NULL,NULL),(6,3,2,10,5,NULL,NULL),(7,4,1,10,5,NULL,NULL),(8,4,2,10,5,NULL,NULL),(9,4,3,10,5,NULL,NULL),(10,5,1,10,5,NULL,NULL),(11,5,2,10,5,NULL,NULL),(12,5,3,10,5,NULL,NULL),(13,6,1,10,5,NULL,NULL),(14,6,2,10,5,NULL,NULL),(15,6,3,10,5,NULL,NULL),(16,7,1,10,5,NULL,NULL),(17,7,2,10,5,NULL,NULL),(18,7,3,10,5,NULL,NULL),(19,8,2,5,5,NULL,NULL),(20,9,1,5,5,NULL,NULL),(21,9,2,5,5,NULL,NULL),(22,10,1,5,5,NULL,NULL),(23,10,2,5,5,NULL,NULL),(24,11,1,5,5,NULL,NULL),(25,11,2,5,5,NULL,NULL),(26,12,1,5,5,NULL,NULL),(27,12,2,5,5,NULL,NULL),(28,13,1,5,5,NULL,NULL),(29,13,2,5,5,NULL,NULL),(30,14,1,5,5,NULL,NULL),(31,14,2,5,5,NULL,NULL),(32,15,1,5,30,NULL,NULL),(33,15,2,5,30,NULL,NULL),(34,16,1,5,30,NULL,NULL),(35,16,2,5,30,NULL,NULL),(36,17,1,5,30,NULL,NULL),(37,17,2,5,30,NULL,NULL),(38,18,1,5,30,NULL,NULL),(39,18,2,5,30,NULL,NULL),(40,19,1,5,30,NULL,NULL),(41,19,2,5,30,NULL,NULL),(42,20,1,5,30,NULL,NULL),(43,20,2,5,30,NULL,NULL),(44,21,1,5,30,NULL,NULL),(45,21,2,5,30,NULL,NULL),(46,22,1,5,30,NULL,NULL),(47,22,2,5,30,NULL,NULL),(48,23,1,5,30,NULL,NULL),(49,23,2,5,30,NULL,NULL),(50,24,1,5,30,NULL,NULL),(51,24,2,5,30,NULL,NULL),(52,25,1,5,30,NULL,NULL),(53,25,2,5,30,NULL,NULL),(54,26,1,5,30,NULL,NULL),(55,26,2,5,30,NULL,NULL),(56,27,1,5,30,NULL,NULL),(57,27,2,5,30,NULL,NULL),(58,28,1,5,30,NULL,NULL),(59,28,2,6,30,NULL,NULL),(60,29,1,5,30,NULL,105),(61,29,2,5,30,NULL,105),(62,30,1,5,30,NULL,105),(63,30,2,5,30,NULL,105),(64,31,1,5,30,NULL,105),(65,31,2,5,30,NULL,105),(66,32,1,5,30,NULL,150),(67,32,2,5,30,NULL,150),(68,33,1,5,30,NULL,150),(69,33,2,5,30,NULL,150),(70,34,1,5,30,NULL,150),(71,34,2,5,30,NULL,150),(72,35,1,5,30,NULL,150),(73,35,2,5,30,NULL,150),(74,37,1,5,30,NULL,150),(75,37,2,5,30,NULL,150),(76,38,1,5,30,NULL,150),(77,38,2,5,30,NULL,150),(78,47,1,5,30,NULL,21),(79,48,1,5,30,NULL,21),(80,49,1,5,30,NULL,105),(81,50,1,5,21,NULL,105);
/*!40000 ALTER TABLE `bill_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `staff_id` int NOT NULL,
  `modified_date` datetime DEFAULT NULL,
  `modified_by` varchar(200) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(200) DEFAULT NULL,
  `order_id` int NOT NULL,
  `price` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_bill_order` (`order_id`),
  KEY `fk_bill_staff` (`staff_id`),
  KEY `fk_bill_customer` (`customer_id`),
  CONSTRAINT `fk_bill_customer` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `fk_bill_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `fk_bill_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (1,'a',1,1,NULL,NULL,NULL,NULL,1,NULL),(2,NULL,1,1,NULL,NULL,'2021-06-29 13:22:33',NULL,1,100),(3,NULL,1,1,NULL,NULL,'2021-06-29 13:26:24',NULL,1,120),(4,NULL,1,1,NULL,NULL,'2021-06-29 13:31:49',NULL,1,150),(5,NULL,1,1,NULL,NULL,'2021-06-29 13:32:31',NULL,1,150),(6,NULL,1,1,NULL,NULL,'2021-06-29 13:33:30',NULL,1,150),(7,NULL,1,1,NULL,NULL,'2021-06-29 13:51:07',NULL,1,150),(8,NULL,1,1,NULL,NULL,'2021-06-29 14:28:02',NULL,1,25),(9,NULL,1,1,NULL,NULL,'2021-06-29 14:47:08',NULL,1,0),(10,NULL,1,1,NULL,NULL,'2021-06-29 14:48:29',NULL,1,0),(11,NULL,1,1,NULL,NULL,'2021-06-29 14:50:33',NULL,1,0),(12,NULL,1,1,NULL,NULL,'2021-06-29 15:01:50',NULL,1,50),(13,NULL,1,1,NULL,NULL,'2021-06-29 15:57:23',NULL,1,0),(14,NULL,1,1,NULL,NULL,'2021-06-29 16:01:04',NULL,1,0),(15,NULL,1,1,NULL,NULL,'2021-06-29 16:01:37',NULL,1,0),(16,NULL,1,1,NULL,NULL,'2021-06-29 16:04:51',NULL,1,0),(17,NULL,1,1,NULL,NULL,'2021-06-29 16:12:24',NULL,1,0),(18,NULL,1,1,NULL,NULL,'2021-06-29 16:13:08',NULL,1,50),(19,NULL,1,1,NULL,NULL,'2021-06-29 16:19:18',NULL,1,300),(20,NULL,1,1,NULL,NULL,'2021-06-29 16:20:33',NULL,1,140),(21,NULL,1,1,NULL,NULL,'2021-06-29 16:22:26',NULL,1,210),(22,NULL,1,1,NULL,NULL,'2021-06-29 16:23:51',NULL,1,210),(23,NULL,1,1,NULL,NULL,'2021-06-29 16:26:53',NULL,1,210),(24,NULL,1,1,NULL,NULL,'2021-06-29 16:28:51',NULL,1,210),(25,NULL,1,1,NULL,NULL,'2021-06-29 16:47:13',NULL,1,210),(26,NULL,1,1,NULL,NULL,'2021-06-29 16:47:50',NULL,1,210),(27,NULL,1,1,NULL,NULL,'2021-06-29 16:48:11',NULL,1,210),(28,NULL,1,1,NULL,NULL,'2021-06-29 16:49:48',NULL,1,231),(29,NULL,1,1,NULL,NULL,'2021-06-29 22:25:06',NULL,1,210),(30,NULL,1,1,NULL,NULL,'2021-06-29 23:04:12',NULL,1,210),(31,NULL,1,1,NULL,NULL,'2021-06-30 11:36:06',NULL,1,210),(32,NULL,1,1,NULL,NULL,'2021-07-02 11:14:30',NULL,15,300),(33,NULL,1,1,NULL,NULL,'2021-07-02 11:18:36',NULL,15,300),(34,NULL,1,1,NULL,NULL,'2021-07-02 11:37:43',NULL,15,300),(35,NULL,1,1,NULL,NULL,'2021-07-02 11:45:03',NULL,15,300),(36,'HOA210703213245',1,1,NULL,NULL,'2021-07-03 21:32:45',NULL,56,0),(37,'HOA210703231841',1,1,NULL,NULL,'2021-07-03 23:18:42',NULL,15,300),(38,'HOA210704085240',1,1,NULL,NULL,'2021-07-04 08:52:41',NULL,15,300),(39,'HOA210704102728',1,1,NULL,NULL,'2021-07-04 10:27:29',NULL,1,0),(40,'HOA210704103158',1,1,NULL,NULL,'2021-07-04 10:31:58',NULL,1,0),(41,'HOA210704103517',1,1,NULL,NULL,'2021-07-04 10:35:17',NULL,1,0),(42,'HOA210704103618',1,1,NULL,NULL,'2021-07-04 10:36:19',NULL,1,0),(43,'HOA210704103707',1,1,NULL,NULL,'2021-07-04 10:37:07',NULL,1,0),(44,'HOA210704103805',1,1,NULL,NULL,'2021-07-04 10:38:05',NULL,1,0),(45,'HOA210704104443',1,1,NULL,NULL,'2021-07-04 10:44:43',NULL,1,0),(46,'HOA210704105000',1,1,NULL,NULL,'2021-07-04 10:50:01',NULL,1,0),(47,'HOA210704105014',1,1,NULL,NULL,'2021-07-04 10:50:14',NULL,1,105),(48,'HOA210704105457',1,1,NULL,NULL,'2021-07-04 10:54:58',NULL,1,105),(49,'HOA210704105837',1,1,NULL,NULL,'2021-07-06 10:58:38',NULL,1,105),(50,'HOA210704110003',1,1,NULL,NULL,'2021-07-06 11:00:04',NULL,1,105);
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'nguyễn'),(2,'GOCHI'),(3,'CHANEL'),(4,'SUPPERME'),(5,'VICTORIA'),(6,'ADIDAS');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'QA','Quần','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10'),(2,'VA','Váy','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10'),(3,'AA','Áo','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10'),(4,'VE','Vét','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10'),(5,'AT','Áo Thun','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'#43242','đỏ'),(2,'#543','xanh'),(3,'#5435','vàng'),(4,'#5345','nâu'),(5,'#342','trắng');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `modified_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `created_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'321456256','N@gmail.com','Hà Nội','Nam','2000-02-02','adsa','2021-02-02','Nguyễn Văn a','2000-02-02','Nguyễn Văn a','trần hà'),(14,'215245698','N@gmail.com','Hà Nội','Nam','2000-02-02','dsds','2021-02-02','Nguyễn Văn a','2000-02-02','Nguyễn Văn a','quang phuc'),(15,'123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oder_detail`
--

DROP TABLE IF EXISTS `oder_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oder_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quanlity` int NOT NULL,
  `discount` bigint DEFAULT NULL,
  `code` varchar(200) DEFAULT NULL,
  `remain_amount` bigint DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id_idx` (`order_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oder_detail`
--

LOCK TABLES `oder_detail` WRITE;
/*!40000 ALTER TABLE `oder_detail` DISABLE KEYS */;
INSERT INTO `oder_detail` VALUES (48,1,1,50,500000,NULL,30,NULL),(49,35,1,50,5,NULL,5,NULL),(50,35,2,100,5,NULL,19,NULL),(51,35,3,20,500000,NULL,20,NULL),(57,37,1,5,30,NULL,5,150),(58,37,2,5,30,NULL,5,150),(59,38,1,5,30,NULL,5,150),(60,38,2,5,30,NULL,5,150),(61,38,1,5,30,NULL,5,150),(62,38,2,5,30,NULL,5,150),(63,38,1,5,30,NULL,5,150),(64,38,2,5,30,NULL,5,150),(65,38,1,5,30,NULL,5,150),(66,38,2,5,30,NULL,5,150),(67,42,1,5,30,NULL,5,150),(68,42,2,5,30,NULL,5,150),(69,43,1,5,30,NULL,5,150),(70,43,2,5,30,NULL,5,150),(71,44,1,5,30,NULL,5,150),(72,44,2,5,30,NULL,5,150),(73,45,1,5,30,NULL,5,150),(74,45,2,5,30,NULL,5,150),(75,46,1,5,30,NULL,5,150),(76,46,2,5,30,NULL,5,150),(77,47,1,5,30,NULL,5,150),(78,47,2,5,30,NULL,5,150),(79,48,1,5,30,NULL,5,150),(80,48,2,5,30,NULL,5,150),(81,49,1,5,30,NULL,5,150),(82,49,2,5,30,NULL,5,150),(83,50,1,5,30,NULL,5,150),(84,50,2,5,30,NULL,5,150),(85,51,1,5,30,NULL,5,150),(86,51,2,5,30,NULL,5,150),(87,52,1,5,30,NULL,5,150),(88,52,2,5,30,NULL,5,150),(89,53,1,5,30,NULL,5,150),(90,53,2,5,30,NULL,5,150),(91,54,1,5,30,NULL,5,150),(92,54,2,5,30,NULL,5,150),(93,57,1,5,30,NULL,5,150),(94,57,2,5,30,NULL,5,150),(95,57,1,5,30,NULL,5,150),(96,57,2,5,30,NULL,5,150),(97,57,1,5,30,NULL,5,150),(98,57,2,5,30,NULL,5,150),(119,68,1,4,500,NULL,4,2000),(120,68,2,1,600,NULL,1,600),(121,69,1,4,500,NULL,4,2000),(122,69,2,1,600,NULL,1,600),(123,70,1,4,500,NULL,4,2000),(124,70,2,1,600,NULL,1,600),(125,71,2,1,600,NULL,1,600),(126,71,3,1,300,NULL,1,300),(127,71,5,1,250,NULL,1,250);
/*!40000 ALTER TABLE `oder_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `staff_id` int NOT NULL,
  `created_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `modified_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `modified_date` timestamp NULL DEFAULT NULL,
  `state` varchar(200) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id_idx` (`customer_id`),
  KEY `staff_id_idx` (`staff_id`),
  FULLTEXT KEY `full_text_search_index` (`code`) /*!80000 INVISIBLE */,
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'phuc12',1,1,'Nguyễn Văn a','2021-02-02','2021-06-24 17:00:00',NULL,'resend',1000),(2,'phuc1',15,1,'Nguyễn Văn b','2021-02-02',NULL,NULL,'resend',NULL),(3,'phuc',15,2,'Nguyễn Văn c','2021-02-03',NULL,NULL,'resend',NULL),(4,'phu',14,2,'Nguyễn Văn e','2021-02-03',NULL,NULL,'complete',NULL),(5,'phuc',1,1,'Nguyễn Văn f','2021-11-11 ',NULL,NULL,'complete',NULL),(6,'@ql3',1,1,'Nguyễn Văn g','2021-05-05',NULL,NULL,'resend',NULL),(7,'@ql3',1,1,'Nguyễn Văn d','2021-05-05','2021-05-04 17:00:00',NULL,'complete',NULL),(8,NULL,1,1,NULL,'2021 - 06 -28',NULL,NULL,NULL,NULL),(9,NULL,1,1,NULL,NULL,NULL,NULL,NULL,1000000),(10,NULL,1,1,NULL,NULL,NULL,NULL,NULL,1000000),(11,NULL,1,1,NULL,NULL,NULL,NULL,NULL,1000000),(12,NULL,1,1,NULL,NULL,NULL,NULL,NULL,1000000),(13,NULL,1,1,NULL,NULL,NULL,NULL,NULL,1000000),(14,NULL,1,1,NULL,NULL,NULL,NULL,NULL,1000000),(15,NULL,1,1,NULL,NULL,'2021-06-27 05:12:16',NULL,NULL,1000000),(16,NULL,1,1,NULL,NULL,NULL,NULL,NULL,1000000),(17,NULL,1,1,NULL,NULL,NULL,NULL,NULL,110),(18,NULL,1,1,NULL,NULL,NULL,NULL,NULL,110),(19,NULL,1,1,NULL,NULL,NULL,NULL,NULL,210),(20,NULL,1,1,NULL,NULL,NULL,NULL,NULL,210),(21,'phuc',1,1,NULL,NULL,'2021-06-27 05:12:16',NULL,NULL,210),(22,'phuc123',1,1,NULL,NULL,'2021-06-27 14:46:12',NULL,NULL,210),(23,'phuc1',1,1,NULL,NULL,'2021-06-27 14:48:39',NULL,NULL,210),(24,'phuc12',1,1,NULL,NULL,'2021-06-28 03:16:06',NULL,NULL,220),(25,NULL,1,1,NULL,NULL,'2021-06-28 03:16:06',NULL,NULL,NULL),(26,NULL,1,1,NULL,NULL,'2021-06-28 09:49:32',NULL,NULL,220),(27,NULL,1,1,NULL,NULL,'2021-06-28 10:01:13',NULL,NULL,470),(28,NULL,1,1,NULL,NULL,'2021-06-28 10:01:43',NULL,NULL,400),(29,NULL,1,1,NULL,NULL,'2021-06-28 10:08:02',NULL,NULL,300),(30,'SON0002',1,1,NULL,NULL,'2021-06-28 10:10:12',NULL,NULL,200),(35,'SON0001',1,1,NULL,NULL,'2021-06-29 03:12:13',NULL,NULL,250),(37,NULL,1,1,NULL,NULL,'2021-07-02 04:52:21',NULL,NULL,300),(38,NULL,1,1,NULL,NULL,'2021-07-02 04:53:04',NULL,NULL,300),(39,NULL,1,1,NULL,NULL,'2021-07-02 04:54:58',NULL,NULL,300),(40,'phuc0001',1,1,NULL,NULL,'2021-07-02 04:58:29',NULL,NULL,300),(41,'phuc0002',1,1,NULL,NULL,'2021-07-02 05:00:03',NULL,NULL,300),(42,NULL,1,1,NULL,NULL,'2021-07-02 05:03:07',NULL,NULL,300),(43,NULL,1,1,NULL,NULL,'2021-07-02 05:05:09',NULL,NULL,300),(44,NULL,1,1,NULL,NULL,'2021-07-03 10:22:17',NULL,NULL,300),(45,NULL,1,1,NULL,NULL,'2021-07-03 12:44:43',NULL,NULL,300),(46,NULL,1,1,NULL,NULL,'2021-07-03 12:53:05',NULL,NULL,300),(47,NULL,1,1,NULL,NULL,'2021-07-03 12:57:32',NULL,NULL,300),(48,NULL,1,1,NULL,NULL,'2021-07-03 12:58:36',NULL,NULL,300),(49,NULL,1,1,NULL,NULL,'2021-07-03 13:01:50',NULL,NULL,300),(50,NULL,1,1,NULL,NULL,'2021-07-03 13:04:19',NULL,NULL,300),(51,NULL,1,1,NULL,NULL,'2021-07-03 13:04:54',NULL,NULL,300),(52,NULL,1,1,NULL,NULL,'2021-07-03 13:05:47',NULL,NULL,300),(53,'210703200713',1,1,NULL,NULL,'2021-07-03 13:07:14',NULL,NULL,300),(54,'210703200718',1,1,NULL,NULL,'2021-07-03 13:07:18',NULL,NULL,300),(55,'210703200720',1,1,NULL,NULL,'2021-07-03 13:07:20',NULL,NULL,300),(56,'210703200721',1,1,NULL,NULL,'2021-07-06 13:07:22',NULL,NULL,300),(57,'210703200722',14,1,NULL,NULL,'2021-07-06 13:07:22',NULL,NULL,300),(68,'210707115557',NULL,3,'Ngyễn quang phúc',NULL,'2021-07-07 04:55:58',NULL,NULL,2600),(69,'210707115717',NULL,3,'Ngyễn quang phúc',NULL,'2021-07-07 04:57:17',NULL,NULL,2600),(70,'210707120136',NULL,3,'Ngyễn quang phúc',NULL,'2021-07-07 05:01:37',NULL,NULL,2600),(71,'210707163340',NULL,3,'Ngyễn quang phúc',NULL,'2021-07-07 09:33:39',NULL,NULL,1150);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'VIEW_STAFF','Xem nhân viên'),(2,'CREATE_STAFF','Tạo nhân viên'),(3,'UPDATE_STAFF','Cập nhật nhân viên'),(4,'SEARCH_STAFF','Tìm kiếm nhân viên'),(5,'VIEW_PRODUCT','Xem sản phẩm'),(6,'CREATE_PRODUCT','Tạo sản phẩm'),(7,'UPDATE_PRODUCT','Cập nhật sản phẩm'),(8,'DELETE_PRODUCT','Xóa sản phẩm'),(9,'SEARCH_PRODUCT','Tìm kiếm sản phẩm'),(10,'FILTER_PRODUCT','Lọc sản phẩm'),(11,'VIEW_CUSTOMER','Xem khách hàng'),(12,'CREATE_CUSTOMER','Tạo khách hàng'),(13,'UPDATE_CUSTOMER','Cập nhật khách hàng'),(14,'DELETE_CUSTOMER','Xóa khách hàng'),(15,'SEARCH_CUSTOMER','Tìm kiếm khách hàng'),(16,'FILTER_CUSTOMER','Lọc khách hàng'),(17,'VIEW_ORDER','Xem hóa đơn'),(18,'CREATE_ORDER','Tạo hóa đơn'),(19,'SEARCH_ORDER','Tìm kiếm hóa đơn'),(20,'FILTER_ORDER','Lọc hóa đơn'),(21,'VIEW_STATISTICAL','Xem báo cáo'),(22,'VIEW_ROLE','Xem vai trò'),(23,'CREATE_ROLE','Tạo vai trò'),(24,'UPDATE_ROLE','Cập nhật vai trò');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `brand_id` int NOT NULL,
  `number_product` int NOT NULL,
  `sell_product` int NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` decimal(8,3) DEFAULT NULL,
  `supplier_id` int NOT NULL,
  `decription` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `color_id` int NOT NULL,
  `created_date` date DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `size_id` int NOT NULL,
  `category_id` int NOT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `supplier_id_idx` (`supplier_id`),
  KEY `color_id_idx` (`color_id`),
  KEY `brand_id_idx` (`brand_id`),
  KEY `size_id_idx` (`size_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `cate` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `color_id` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`),
  CONSTRAINT `size_id` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`),
  CONSTRAINT `supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'#A','Áo khoác Chino thời thượng SID56708',1,88,137,'aa',500.000,1,'chất vải mát',1,'2021-02-02','2021-02-02',1,1,NULL,NULL,NULL),(2,'#A1','Áo khoác đầm dáng xòe nút bọc 2in1',1,67,259,'aaa',600.000,1,'chất vải mát',2,'2021-02-02','2021-02-02',2,1,NULL,NULL,NULL),(3,'#V','Váy phối sọc cá tính SID62366',2,59,81,'bbbb',300.000,2,'váy ngắn mát',5,'2021-02-02','2021-02-02',2,2,NULL,NULL,NULL),(4,'#V2','Váy phối sọc cá tính SID62366',2,100,0,'vvvv',250.000,2,'váy đầm',4,'2021-02-02','2021-02-02',1,2,NULL,NULL,NULL),(5,'#AT','Áo thun phối sọc cá tính SID62366',3,99,1,'ttt',250.000,3,'áo thun coton',5,'2021-02-02','2021-02-02',3,3,NULL,NULL,NULL),(6,'#AT1','Áo thun phối sọc cá tính SID62366',4,100,0,'tttt',300.000,3,'áo thun dáng xuông',4,'2021-02-02','2021-02-02',3,4,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permission`
--

DROP TABLE IF EXISTS `role_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_permission` (
  `role_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`role_id`,`permission_id`),
  KEY `fk_permission_idx` (`permission_id`),
  CONSTRAINT `fk_permission` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permission`
--

LOCK TABLES `role_permission` WRITE;
/*!40000 ALTER TABLE `role_permission` DISABLE KEYS */;
INSERT INTO `role_permission` VALUES (1,1),(3,1),(4,1),(17,1),(18,1),(19,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(2,2),(3,2),(4,2),(18,2),(19,2),(24,2),(25,2),(26,2),(27,2),(28,2),(3,3),(19,3),(24,3),(28,3),(28,5),(28,6),(28,7),(28,12),(28,13),(28,14),(28,15),(28,18),(28,19),(28,21);
/*!40000 ALTER TABLE `role_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'nhân viên bán hàng','STAFF_SALE',NULL,NULL,NULL,NULL,NULL),(2,'nhân viên chăm sóc khách hàng','STAFF_CARE',NULL,NULL,NULL,NULL,NULL),(3,'chủ cửa hàng','ADMIN',NULL,NULL,NULL,NULL,NULL),(4,'Nhân viên test',NULL,NULL,'chủ cửa hàng','2021-07-10','chủ cửa hàng','Có nhiệm vụ đi '),(5,'Nhan vien test 6',NULL,NULL,'chủ cửa hàng','2021-07-10','chủ cửa hàng','co nhiem vu test 3 nha ban hien'),(6,'Nhan vien test 5',NULL,NULL,'chủ cửa hàng','2021-07-10','chủ cửa hàng','test 5df'),(7,NULL,NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,NULL),(8,NULL,NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,NULL),(9,'Nhan Vien A1',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'Quyen view, creat product'),(10,'Nhan vien A2',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co quyen xem staff, tao staff'),(11,'Nhan Vien A3',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co quyen tao va xem staff'),(12,'Nhan Vien A5',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co quyen xem va tao staff'),(13,'Nhan Vien A6',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co quyen tao va xem staff'),(14,'Nhan vien A7',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co quyen tao va xem staff'),(15,'Nhan Vien A8',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co quyen'),(16,'Nhan vien A9',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'c'),(17,'Nhan Vien B',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(18,'Nhan vien B2',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(19,'Nhan vien B2',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(20,'Nhan vien B3',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(21,'Nhan vien B3',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(22,'Nhan vien B4',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(23,'nhan vien B5',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(24,'nhan vien B5',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(25,'Nhan vien B7',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(26,'Nhan vien B8',NULL,'2021-07-19','Ngyễn quang phúc',NULL,NULL,'co'),(27,'Nhan vien C',NULL,'2021-07-19','Tran Dinh Cong',NULL,NULL,'co'),(28,'Nhan vien C2',NULL,'2021-07-19','Tran Dinh Cong',NULL,NULL,'co'),(29,'Nhan vien D1',NULL,'2021-07-20','Tran Dinh Cong',NULL,NULL,'co');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size` (
  `id` int NOT NULL AUTO_INCREMENT,
  `size` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,'S'),(2,'M'),(3,'L'),(4,'XL'),(5,'XXL'),(6,'40'),(7,'41'),(8,'42');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pass_word` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mail` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `status` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_by` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'Nguyễn Văn a',NULL,'Hà Nội','A@gmail.com','0376655733','2000-01-31','làm việc',NULL,'Admin','2021-07-08',NULL),(2,'Nguyễn Văn Binh3',NULL,'Hà Nội','B@gmail.com','0376655733','2000-01-28','làm việc',NULL,'Admin','2021-07-14','Nguyen Van Binh 4'),(3,'Ngyễn quang phúc','$2a$10$d0rNNxckKUpNDc7O06gIKOP2n0mp9o4IeVrgbB854iK9ld2DrDjGa','Hà Nội','admin@gmail.com','123','2000-02-02','chủ','2020-02-02','Admin',NULL,NULL),(4,'Tran Van Dong',NULL,'Ho Chi Minh','B@gmail.com','0376655733','1998-09-06','Đang làm việc',NULL,'chủ cửa hàng','2021-07-08',NULL),(5,'Tran Van AiV',NULL,'Hà Nội','A@gmail.com','0376655733','1999-04-02','Đang làm việc',NULL,'chủ cửa hàng','2021-07-08',NULL),(6,'Tran Van BC',NULL,'Hà Nội ve','AB@gmail.com','0376655735','1996-04-23','Đang làm việc nen',NULL,'chủ cửa hàng','2021-07-08',NULL),(7,'Tran Van C','12345678','Ho Chi Minh','B@gmail.com','0376655733','1997-05-03','Đang làm việc','2021-07-08','chủ cửa hàng',NULL,NULL),(8,'Tran Van DCV',NULL,'Hà Nội V','A@gmail.com','0376655734','1998-10-03','Đang làm việc',NULL,'chủ cửa hàng','2021-07-08','chủ cửa hàng'),(9,'Tran Van E','12345678','Hà Nội ','A@gmail.com','0376655734','1998-07-02','Đang làm việc','2021-07-08','chủ cửa hàng',NULL,NULL),(10,'Tran Van F','12345678','Hà Nội','A@gmail.com','0376655735','1998-05-03','Đang làm việc','2021-07-08','chủ cửa hàng',NULL,NULL),(11,'Tran Van G','12345678','Hà Nội vy','ABV@gmail.com','0376655734','1992-04-01','Đang làm việc',NULL,'chủ cửa hàng','2021-07-08','chủ cửa hàng'),(12,'Tran Van G1','12345678','Hà Nội','A@gmail.com','0376655735','2002-07-02','Đang làm việc',NULL,'chủ cửa hàng','2021-07-08','chủ cửa hàng'),(13,'Tran Van G5','12345678','Hà Nội','A@gmail.com','0376655734','2001-07-21','Đang làm việc','2021-07-08','chủ cửa hàng',NULL,NULL),(14,'Tran Van G6','12345678','Hà Nội ve roi troi nha','AB@gmail.com','0376655735','2002-09-25','Đa nghi viec',NULL,'chủ cửa hàng','2021-07-08','chủ cửa hàng'),(15,'Tran Van G7','12345678','Hà Nội','AB@gmail.com','0376655734','2001-10-03','Đang làm việc','2021-07-08','chủ cửa hàng',NULL,NULL),(16,'Ho Van Ban','12345678','Can Tho','chieunayvangbongem@gmail.com','0376655735','2001-05-24','Đang làm việc','2021-07-09','chủ cửa hàng',NULL,NULL),(17,'Hồ anh 11','1234567890','Hà Nội','hoanh@gmail.com','0376655733','2003-02-21','Đang làm việc','2021-07-10','chủ cửa hàng',NULL,NULL),(18,'Ho Anh Binh','12345678','Hà Nộisdfsd','AB@gmail.comdsfdsf','0376655734','1999-03-20','Đang làm việc','2021-07-10','chủ cửa hàng',NULL,NULL),(19,'Ho Anh Binh 2','12345678','Hà Nội','AB@gmail.com','0376655735','1999-04-23','Đang làm việc','2021-07-10','chủ cửa hàng',NULL,NULL),(20,'Nguyen Thanh Tam','12345678','Hà Nội','A@gmail.com','0376655734','1998-07-20','Đang làm việc','2021-07-10','chủ cửa hàng',NULL,NULL),(21,'Ho Anh Binh 3','12345678','Hà Nội','AB@gmail.com','0376655734','2007-02-21','Đang làm việc','2021-07-10','chủ cửa hàng',NULL,NULL),(22,'Tran Van Khoi Hai','12345678','Hà Nội ve','abcd@gmail.com','0376655735','2009-06-22','Da nghi viec',NULL,'chủ cửa hàng','2021-07-10','chủ cửa hàng'),(23,'Tran Van Thao','12345678','Hà Nội','AB@gmail.com','0376655734','2004-09-23','Đang làm việc','2021-07-10','chủ cửa hàng',NULL,NULL),(24,'Tran Van G9','12345678','Hà Nội','AB@gmail.com','0376655735','2002-10-18','Đang làm việc','2021-07-10','chủ cửa hàng','2021-07-12','chủ cửa hàng'),(25,'Nguyễn Văn Binh 2','12345678','Hà Nội','AB@gmail.com','0376655736','2000-01-10','Đang làm việc','2021-07-13','Ngyễn quang phúc',NULL,NULL),(26,'Nguyen Van Binh 4','$2a$10$bv/H0rrKvl1chTJySyf4l.ojSCbDopWzfrRHGD1gEPTyvAAoZ91Pu','Hà Nội','A@gmail.com','0376655737','2002-03-21','Đang làm việc','2021-07-13','Ngyễn quang phúc',NULL,NULL),(27,'Nguyen Van Binh 5','$2a$10$JFZhERTTr0hQ0cJcAVchLuZZX/rAHaQBOsC2MFL0A4DJoDRDrcNu6','Hà Nội','ABC@gmail.com','0376655739','1998-04-17','Đang làm việc','2021-07-13','Nguyen Van Binh 4',NULL,NULL),(28,'Ho Anh Binh Năm','$2a$10$CKKIKA0XOIbPWjaFMg0DRuEWforX77IHDtkNdrcwH9Jc4RtF4azzq','Hà Nội','AB@gmail.com','0376655741','2007-02-19','Đang làm việc',NULL,NULL,NULL,NULL),(29,'Nguyen Van Tran','$2a$10$.CCQVNhQjBuWY2FfVtFpGe4aZJF2.prPq0MLRJzPzH2Mr/jAMGkC6','Hà Nội','ABC@gmail.com','0376655742','1998-04-16',NULL,NULL,NULL,NULL,NULL),(30,'Nguyen Van Tran 2','$2a$10$zPEq3WvvYhnlgeaUUWkX9uvTKUjHpU3kDVoP9henj1M5kpzW1dWOy','Hà Nội','ABC@gmail.com','0376655743','1998-04-16',NULL,NULL,NULL,NULL,NULL),(31,'Ho Dinh Cong ','$2a$10$pAa1qEWNMkVOcN.aM8fv/e3X1cR77BD7tvktXUJn4DiwtfHjrWNb.','Hà Nội','AB@gmail.com','0376655744','2002-05-21','Đang làm việc','2021-07-19','Ngyễn quang phúc',NULL,NULL),(32,'Ho Dinh Trang','$2a$10$kzeCMThF6pkI3g7NC.0h0.rbbLrUKajHGd17rmVszq1pm2WyaeHI2','Hà Nội','AB@gmail.com','0376655745','2002-04-19','Đang làm việc','2021-07-19','Ngyễn quang phúc',NULL,NULL),(33,'Ho Dinh Nam','$2a$10$uwjPNrWC1F5kVEJArV8BaO/mZ3iyUBGBYjymYw.WeFT9cM/ddwIba','Hà Nội','AB@gmail.com','0376655746','2001-03-22','Đang làm việc','2021-07-19','Ngyễn quang phúc',NULL,NULL),(34,'Tran Dinh Cong','$2a$10$aH4mDbiM8a1P6Q8xHMlQQ.NPM5hs91rZTwBXIargRYKTwyNFaE7qm','Hà Nội','AB@gmail.com','0376655747','2001-02-19','Đang làm việc','2021-07-19','Ngyễn quang phúc',NULL,NULL),(35,'Tran Van Minh','$2a$10$cXuub1gBdY1f6oIx3rMxWueOE1Q/5UgCz7QmreUUak1JWjykcqVge','Hà Nội','AB@gmail.com','0376655748','2003-12-19','Đang làm việc','2021-07-19','Tran Dinh Cong',NULL,NULL),(36,'Tran Van BC','$2a$10$uIcqVxRR6ndcRDkU9Xhk7OmZ.5WsB5f.CnnAEqMQcz6rBbRVHfRVe','Hà Nội','AB@gmail.com','0376655750','2021-07-02','Đang làm việc','2021-07-20','Tran Dinh Cong',NULL,NULL),(37,'Tran Van B','$2a$10$CpY0gsA6nb5Hk9Ukg2V26eu9./3hveeUfM18Cd26JgcK8Roso6GJK','Hà Nội','AB@gmail.com','0376655751','2002-07-14','Đang làm việc','2021-07-20','Tran Dinh Cong',NULL,NULL),(38,'Tran Van H1','$2a$10$op6bn31H08mLFOXm0ElaPuqn.mim0pgw8WeIeFlHcIoJ5d1MdGfSu','Hà Nội','AB@gmail.com','0376655752','2005-01-17','Đang làm việc','2021-07-20','Tran Dinh Cong',NULL,NULL),(39,'Tran Van K1','$2a$10$/QqZhtSf90wRM3XtW5duQeLe0nbnNZ4iF1SiJNKTtzvBOvtiswyMa','Hà Nội','AB@gmail.com','0376655753','1999-11-20','Đang làm việc','2021-07-20','Tran Dinh Cong',NULL,NULL);
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_role`
--

DROP TABLE IF EXISTS `staff_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff_role` (
  `staff_id` int NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`staff_id`,`role_id`),
  KEY `staff_idx` (`staff_id`),
  KEY `roles_idx` (`role_id`),
  CONSTRAINT `roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_role`
--

LOCK TABLES `staff_role` WRITE;
/*!40000 ALTER TABLE `staff_role` DISABLE KEYS */;
INSERT INTO `staff_role` VALUES (1,1),(2,2),(3,3),(4,1),(5,1),(6,1),(7,1),(8,2),(10,1),(11,2),(12,1),(13,1),(14,2),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,2),(24,1),(25,2),(26,2),(27,1),(28,1),(29,2),(30,2),(31,9),(32,10),(33,11),(34,26),(35,2),(36,1),(37,1),(38,1),(39,1);
/*!40000 ALTER TABLE `staff_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `modified_by` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,'QT','Quảng Châu','quangchau@gmail.com','Trung Quốc','0123654789',NULL,NULL,NULL,NULL,NULL),(2,'NH','Ninh Hiệp','nh@gmail.com','Hà Nội-Việt Nam','06325489586',NULL,NULL,NULL,NULL,NULL),(3,'DX','Đồng Xuân','dx@gmail.com','Hà Nội -Việt Nam','0569654852',NULL,NULL,NULL,NULL,NULL),(4,'DN','Đà Nẵng','dn@gmail.com','Tp HCM','0123659854',NULL,NULL,NULL,NULL,NULL),(5,'HCM','Hồ Chí Minh','hcm@gmail.com','Tp HCM','0986532145',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-20 17:03:23
