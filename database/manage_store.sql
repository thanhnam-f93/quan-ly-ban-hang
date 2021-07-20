-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: manage_store
-- ------------------------------------------------------
-- Server version	8.0.23

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
  `status` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (25,'0399439339','Nxx@gmail.com','Hà Nội','Nam','2001-02-02','adsa','2021-12-02','Nguyễn Văn a','2000-02-02','Nguyễn Văn v','trần hà phong','on'),(26,'0392439378','N1@gmail.com','Hà Nội','Nu','2002-02-02','adsa','2020-12-02','Nguyễn Văn a','2001-02-02','Nguyễn Văn b','IRON MEN','on'),(27,'0392439369','N2@gmail.com','Hà Nội','Nam','2003-02-02','adsa','2021-02-02','Nguyễn Văn a','2002-02-02','Nguyễn Văn c','HULK','on'),(28,'0392439359','N3@gmail.com','Hà Nội','Nam','2010-02-02','adsa','2020-03-02','Nguyễn Văn a','1977-02-02','Nguyễn Văn d','BAT MAN','on'),(29,'0392439349','N4@gmail.com','Hà Nội','Nam','2004-02-02','adsa','2021-02-02','Nguyễn Văn a','1975-02-02','Nguyễn Văn e','JOCKER','on'),(31,'0332439349','N5@gmail.com','Hà Nội','Nam','2005-02-02','adsa','2020-02-02','Nguyễn Văn a','1988-02-02','Nguyễn Văn f','WONDER WOMEN','on'),(32,'0392439338','N6@gmail.com','Hà Nội','Nam','2006-02-02','adsa','2007-02-02','Nguyễn Văn a','1967-02-02','Nguyễn Văn g','SUPERMAN','on'),(33,'0392439337','N7@gmail.com','Hà Nội','Nam','2007-02-02','adsa','2008-03-02','Nguyễn Văn a','1966-02-02','Nguyễn Văn h','FLASH','on'),(34,'0392439336','N8@gmail.com','Hà Nội','Nu','2008-02-02','adsa','2008-03-02','Nguyễn Văn a','1994-02-02','Nguyễn Văn j','GREEN LATE','on'),(35,'0392439335','N9@gmail.com','Hà Nội','Nam','2013-02-02','adsa','2008-02-02','Nguyễn Văn a','1995-02-02','Nguyễn Văn k','DOCTOR STRANGER','on'),(36,'0392439334','N10@gmail.com','Hà Nội','Nam','2012-02-02','adsa','2014-07-02','Nguyễn Văn a','1995-02-02','Nguyễn Văn l','SPIDER MAN','on'),(37,'0392439333','N22@gmail.com','Hà Nội','Nu','2011-02-02','adsa','2014-08-02','Nguyễn Văn a','1999-02-02','Nguyễn Văn x','THOR','on'),(38,'0392439332','N11@gmail.com','Hà Nội','Nam','1983-02-02','adsa','2014-02-02','Nguyễn Văn a','2006-02-02','Nguyễn Văn z','LOKI','on'),(39,'0392439331','N12@gmail.com','Hà Nội','Nam','1988-02-02','adsa','2014-03-02','Nguyễn Văn a','2009-02-02','Nguyễn Văn b','CAPTAIN AMERICAN','on'),(40,'0392459331','N124@gmail.com','Hà Nội','Nam','1988-02-02','adsa','2014-05-02','Nguyễn Văn a','2009-02-02','Nguyễn Văn b','VU THANH NAM','on'),(41,'0916225588','thanhnam@gmail.com','Nam Dinh','Nam','1993-10-21','It is My Nam','2000-09-11','Nguyen Van an','2010-09-09','Vu VAn Nam','Vu Thanh Nan','on'),(42,'0392439339','thanhnam.humg93@gmail.com','Sai Gon','Nam','2017-06-14','hahahahha','2021-07-13','','2021-07-13','Ngyễn quang phúc','MacBook111','on'),(47,'0916113957','thanhnamw.humg93@gmail.com','266 Doi Can , Ba Dinh , Ha Noi','Nam','1987-05-12','ghi chu them item spring','2021-07-12','Ngyễn quang phúc','2021-07-13','Ngyễn quang phúc','spring 555','on'),(60,'03924393391','thanhnwam.humg93@gmail.com','266 Doi Can , Ba Dinh , Ha Noi','Nu','2021-07-01',NULL,'2021-07-11','Ngyễn quang phúc','2021-07-15','Ngyễn quang phúc','Le Anh Tung','on'),(65,'0392469584','Nwwsw4@gmail.com','Hà Nội','Nam','2004-02-01','adsa','2021-02-01','Nguyễn Văn a','1975-02-01','Nguyễn Văn e','JOCKER','on'),(67,'0392439330','thanham.humg93@gmail.com','Sai Gon','Nu','2021-07-01','44444444','2021-07-13','','2021-07-13','Ngyễn quang phúc','trần hà Binh Le','on'),(68,'0392439311','thanhnam.hdumg93@gmail.com','Sai Gon','Nu','2021-07-02','ddddddddd','2021-07-13','','2021-07-13','Ngyễn quang phúc','MacBook11ss','on'),(69,'0916113958','thanhndam.humg93@gmail.com','Hà Nội','Nu','2021-06-30','dddddddddd','2021-07-13','','2021-07-13','Ngyễn quang phúc','new Customer','on'),(70,'03924393395','thanhndam.humfg93@gmail.com','Hà Nội','Nu','2021-07-03',NULL,'2021-07-13','','2021-07-13','Ngyễn quang phúc','trần hà Binh Le','on'),(71,'0392439999','thanhnam11.humg93@gmail.com','Nghe An','Nu','2021-06-30','hihihi','2021-07-13','','2021-07-13','Ngyễn quang phúc','Super Cat','on'),(72,'09554477889','fdfdff@gmail.com','Hà Nội','Nu','2021-06-27','rêrêrêr','2021-07-13','Ngyễn quang phúc','2021-07-15','Ngyễn quang phúc','fdsfdsfsdfd','on'),(73,'0394555566','Nwwsw34@gmail.com','Hà Nội','Nam','2004-01-30','adsa','2021-01-30','Ngyễn quang phúc','2021-07-16','Nguyễn Văn e','ahihi','on'),(74,'03924393393','thanhn3am.humg93@gmail.com','Hà Nội','Nu','2021-06-30','33333333333333333','2021-07-14','Ngyễn quang phúc','2021-07-15','Ngyễn quang phúc','trần hà Binh Le22222','on'),(75,'03924393321','thanhnam.hum2g93@gmail.com','Sai Gon','Nu','2021-07-01','222222222222222','2021-07-15','','2021-07-15','Ngyễn quang phúc','trần hà Binh Le22222','on'),(76,'0392439344','thanhnam.humg97@gmail.com','266 Doi Can , Ba Dinh , Ha Noi','Nu','2021-06-29','444','2021-07-15','','2021-07-15','Ngyễn quang phúc','MacBook11','on'),(77,'0394555500','Nwwsw734@gmail.com',NULL,NULL,'2004-02-01',NULL,NULL,NULL,'2021-07-15',NULL,'Phuc Nguyen',NULL),(78,'0394551100','Nwwswxcc734@gmail.com',NULL,NULL,'2004-02-01',NULL,NULL,NULL,'2021-07-16',NULL,'Phuc Nguyendddd',NULL),(79,'0394581100','Nwwswxcc234@gmail.com',NULL,NULL,'2004-02-01',NULL,NULL,NULL,'2021-07-16',NULL,'Phuc Nguyendddd',NULL),(80,'0394581101','Nwwswxcc1234@gmail.com',NULL,NULL,'2004-02-01',NULL,NULL,NULL,'2021-07-16',NULL,'Phuc Nguyendddd',NULL),(81,'03924393392','thanhnasm.humg93@gmail.com','Hà Nội','Nam','2021-06-29',NULL,'2021-07-18','','2021-07-18','Ngyễn quang phúc','spring bôtz','on');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedbacks`
--

DROP TABLE IF EXISTS `feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedbacks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_by` varchar(45) NOT NULL,
  `customer_id` int NOT NULL,
  `created_date` date DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `slove` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_customers` (`customer_id`),
  CONSTRAINT `fk_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedbacks`
--

LOCK TABLES `feedbacks` WRITE;
/*!40000 ALTER TABLE `feedbacks` DISABLE KEYS */;
INSERT INTO `feedbacks` VALUES (1,'staff2',33,'2009-06-03','ok','ok','title1',NULL,NULL),(2,'staff22',35,'2020-09-09','bad','pendding','title1',NULL,NULL),(3,'staff23',32,'2020-09-09','bad','ok','title3',NULL,NULL),(4,'staff22',33,'2020-09-09','bad','ok','title4',NULL,NULL),(5,'staff21',33,'2020-09-09','bad','pendding','title5',NULL,NULL),(6,'staff21',37,'2020-09-09','bad','pendding','title6',NULL,NULL),(7,'staff22',36,'2009-06-03','bad','pendding','title7',NULL,NULL),(8,'staff23',38,'2009-06-03','ok','pendding','title8',NULL,NULL),(9,'staff23',39,'2009-06-03','ok','ok','title9',NULL,NULL),(10,'namvt',39,'2009-06-02','okvvvvvvvvvvvvzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz','ok','title9',NULL,NULL),(11,'namvt',39,'2009-06-02','okvvss11','ok','title9',NULL,NULL),(12,'Ngyễn quang phúc',68,'2021-07-19','zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz','pendding',NULL,'2021-07-19',''),(13,'Ngyễn quang phúc',47,'2021-07-19','xxxxx','pendding',NULL,'2021-07-19',''),(14,'Ngyễn quang phúc',71,'2021-07-19','cccccccccccccccc','pendding',NULL,'2021-07-19',''),(15,'Ngyễn quang phúc',75,'2021-07-19','hahhahahaha','pendding',NULL,'2021-07-19',''),(16,'Ngyễn quang phúc',71,'2021-07-19','ssssssssss','pendding',NULL,'2021-07-19','');
/*!40000 ALTER TABLE `feedbacks` ENABLE KEYS */;
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
INSERT INTO `orders` VALUES (1,'phuc12',1,1,'Nguyễn Văn a','2021-02-02','2021-06-24 17:00:00',NULL,'resend',1000),(2,'phuc1',15,1,'Nguyễn Văn b','2021-02-02',NULL,NULL,'resend',NULL),(3,'phuc',15,2,'Nguyễn Văn c','2021-02-03',NULL,NULL,'resend',NULL),(4,'phu',14,2,'Nguyễn Văn e','2021-02-03',NULL,NULL,'complete',NULL),(5,'phuc',25,1,'Nguyễn Văn f','2021-11-11 ',NULL,NULL,'complete',NULL),(6,'@ql3',25,1,'Nguyễn Văn g','2021-05-05',NULL,NULL,'resend',NULL),(7,'@ql3',25,1,'Nguyễn Văn d','2021-05-05','2021-05-04 17:00:00',NULL,'complete',NULL),(8,NULL,25,1,NULL,'2021 - 06 -28',NULL,NULL,NULL,NULL),(9,NULL,25,1,NULL,NULL,NULL,NULL,NULL,1000000),(10,NULL,25,1,NULL,NULL,NULL,NULL,NULL,1000000),(11,NULL,26,1,NULL,NULL,NULL,NULL,NULL,1000000),(12,NULL,26,1,NULL,NULL,NULL,NULL,NULL,1000000),(13,NULL,26,1,NULL,NULL,NULL,NULL,NULL,1000000),(14,NULL,27,1,NULL,NULL,NULL,NULL,NULL,1000000),(15,NULL,27,1,NULL,NULL,'2021-06-27 05:12:16',NULL,NULL,1000000),(16,NULL,28,1,NULL,NULL,NULL,NULL,NULL,1000000),(17,NULL,28,1,NULL,NULL,NULL,NULL,NULL,110),(18,NULL,29,1,NULL,NULL,NULL,NULL,NULL,110),(19,NULL,31,1,NULL,NULL,NULL,NULL,NULL,210),(20,NULL,31,1,NULL,NULL,NULL,NULL,NULL,210),(21,'phuc',31,1,NULL,NULL,'2021-06-27 05:12:16',NULL,NULL,210),(22,'phuc123',31,1,NULL,NULL,'2021-06-27 14:46:12',NULL,NULL,210),(23,'phuc1',32,1,NULL,NULL,'2021-06-27 14:48:39',NULL,NULL,210),(24,'phuc12',32,1,NULL,NULL,'2021-06-28 03:16:06',NULL,NULL,220),(25,NULL,32,1,NULL,NULL,'2021-06-28 03:16:06',NULL,NULL,NULL),(26,NULL,32,1,NULL,NULL,'2021-06-28 09:49:32',NULL,NULL,220),(27,NULL,32,1,NULL,NULL,'2021-06-28 10:01:13',NULL,NULL,470),(28,NULL,32,1,NULL,NULL,'2021-06-28 10:01:43',NULL,NULL,400),(29,NULL,32,1,NULL,NULL,'2021-06-28 10:08:02',NULL,NULL,300),(30,'SON0002',32,1,NULL,NULL,'2021-06-28 10:10:12',NULL,NULL,200),(35,'SON0001',33,1,NULL,NULL,'2021-06-29 03:12:13',NULL,NULL,250),(37,NULL,33,1,NULL,NULL,'2021-07-02 04:52:21',NULL,NULL,300),(38,NULL,33,1,NULL,NULL,'2021-07-02 04:53:04',NULL,NULL,300),(39,NULL,33,1,NULL,NULL,'2021-07-02 04:54:58',NULL,NULL,300),(40,'phuc0001',33,1,NULL,NULL,'2021-07-02 04:58:29',NULL,NULL,300),(41,'phuc0002',33,1,NULL,NULL,'2021-07-02 05:00:03',NULL,NULL,300),(42,NULL,1,1,NULL,NULL,'2021-07-02 05:03:07',NULL,NULL,300),(43,NULL,1,1,NULL,NULL,'2021-07-02 05:05:09',NULL,NULL,300),(44,NULL,1,1,NULL,NULL,'2021-07-03 10:22:17',NULL,NULL,300),(45,NULL,1,1,NULL,NULL,'2021-07-03 12:44:43',NULL,NULL,300),(46,NULL,1,1,NULL,NULL,'2021-07-03 12:53:05',NULL,NULL,300),(47,NULL,33,1,NULL,NULL,'2021-07-03 12:57:32',NULL,NULL,300),(48,NULL,33,1,NULL,NULL,'2021-07-03 12:58:36',NULL,NULL,300),(49,NULL,33,1,NULL,NULL,'2021-07-03 13:01:50',NULL,NULL,300),(50,NULL,26,1,NULL,NULL,'2021-07-03 13:04:19',NULL,NULL,300),(51,NULL,26,1,NULL,NULL,'2021-07-03 13:04:54',NULL,NULL,300),(52,NULL,39,1,NULL,NULL,'2021-07-03 13:05:47',NULL,NULL,300),(53,'210703200713',39,1,NULL,NULL,'2021-07-03 13:07:14',NULL,NULL,300),(54,'210703200718',39,1,NULL,NULL,'2021-07-03 13:07:18',NULL,NULL,300),(55,'210703200720',39,1,NULL,NULL,'2021-07-03 13:07:20',NULL,NULL,300),(56,'210703200721',39,1,NULL,NULL,'2021-07-06 13:07:22',NULL,NULL,300),(57,'210703200722',14,1,NULL,NULL,'2021-07-06 13:07:22',NULL,NULL,300),(68,'210707115557',38,3,'Ngyễn quang phúc',NULL,'2021-07-07 04:55:58',NULL,NULL,2600),(69,'210707115717',38,3,'Ngyễn quang phúc',NULL,'2021-07-07 04:57:17',NULL,NULL,2600),(70,'210707120136',37,3,'Ngyễn quang phúc',NULL,'2021-07-07 05:01:37',NULL,NULL,2600),(71,'210707163340',37,3,'Ngyễn quang phúc',NULL,'2021-07-07 09:33:39',NULL,NULL,1150);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
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
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `notes` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'nhân viên bán hàng','STAFF_SALE',NULL,NULL,NULL,NULL,NULL),(2,'nhân viên chăm sóc khách hàng','STAFF_CARE',NULL,NULL,NULL,NULL,NULL),(3,'chủ cửa hàng','ADMIN',NULL,NULL,NULL,NULL,NULL);
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
  `modifed_by` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'Nguyễn Văn a','12345678','Hà Nội','A@gmail.com','123652458','2000-02-02','làm việc','2121-02-02','Admin','Admin',NULL,NULL),(2,'Nguyễn Văn B','12345678','Hà Nội','B@gmail.com','87654321','2000-02-02','làm việc','2021-02-02','Admin','Admin',NULL,NULL),(3,'Ngyễn quang phúc','$2a$10$DYrVLl77vG3V9s3PqCYZUeEi9VBFsVzmCt.1MJTf3V3DpdlaayY3q','Hà Nội','admin@gmail.com','123','2000-02-02','chủ','2020-02-02','Admin','Admin',NULL,NULL);
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
INSERT INTO `staff_role` VALUES (1,1),(2,2),(3,3);
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

-- Dump completed on 2021-07-20  7:19:18
