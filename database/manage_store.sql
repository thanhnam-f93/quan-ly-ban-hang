-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
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
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'321456256','N@gmail.com','Hà Nội','Nam','2000-02-02','adsa','2021-02-02','Nguyễn Văn a','2000-02-02','Nguyễn Văn a','trần hà','on'),(14,'215245698','N@gmail.com','Hà Nội','Nam','2000-02-02','dsds','2021-02-02','Nguyễn Văn a','2000-02-02','Nguyễn Văn a','quang phuc','on'),(15,'123','ffffffffffffff','Hà Nội','Nam','2000-02-02','dsds','2021-02-02',NULL,NULL,NULL,NULL,NULL),(17,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(18,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(19,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(20,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(21,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(22,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(23,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(24,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(25,'0912121212','haytintoi9x@gmail.com','hello anh','Nam','2021-07-06','hello','2021-07-15','','2021-07-15','Ngyễn quang phúc','aaaaaaaa','on'),(26,'0905050505',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'phuc',NULL),(27,'0325272555',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'phuc',NULL),(28,'0987655211',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'hoa',NULL),(29,'0984553718',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'nguyen quang phuc',NULL),(30,'0984256321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'nguyen thi hoa',NULL),(31,'0984256329',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'nguyen thi hoa',NULL),(32,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(33,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(34,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(35,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(36,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(37,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(38,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(39,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(40,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(41,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(42,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(43,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(44,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(45,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(46,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(47,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(48,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(49,'0945213225',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-16',NULL,'kk',NULL);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quanlity` int NOT NULL,
  `discount` bigint DEFAULT NULL,
  `code` varchar(200) DEFAULT NULL,
  `remain_quantity` bigint DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id_idx` (`order_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
INSERT INTO `order_detail` VALUES (161,92,2,20,NULL,NULL,20,NULL),(162,92,3,21,NULL,NULL,21,NULL),(163,93,3,30,NULL,NULL,30,NULL),(164,93,12,10,NULL,NULL,10,NULL),(165,94,5,20,NULL,NULL,20,NULL),(166,95,4,51,NULL,NULL,51,NULL),(167,96,1,14,NULL,NULL,14,NULL),(168,97,1,18,NULL,NULL,18,NULL),(169,98,12,15,NULL,NULL,12,NULL),(170,99,2,1,NULL,NULL,0,NULL),(171,99,12,1,NULL,NULL,0,NULL),(172,100,4,8,NULL,NULL,8,NULL),(173,101,2,1,NULL,NULL,1,NULL),(174,102,1,3,NULL,NULL,3,NULL),(175,103,4,10,NULL,NULL,10,NULL),(176,104,2,1,NULL,NULL,1,NULL),(177,105,12,5,NULL,NULL,5,NULL),(178,106,1,7,NULL,NULL,7,NULL),(179,107,4,5,NULL,NULL,5,NULL),(180,108,12,10,NULL,NULL,10,5000);
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
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
  `discount` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id_idx` (`customer_id`),
  KEY `staff_id_idx` (`staff_id`),
  FULLTEXT KEY `full_text_search_index` (`code`) /*!80000 INVISIBLE */,
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (92,'SAPO-000-92',32,3,'Ngyễn quang phúc',NULL,'2021-07-15 10:31:11',NULL,NULL,18300,0),(93,'SAPO-000-93',33,3,'Ngyễn quang phúc',NULL,'2021-07-15 10:31:29',NULL,NULL,14000,0),(94,'SAPO-000-94',34,3,'Ngyễn quang phúc',NULL,'2021-07-15 10:31:44',NULL,NULL,5000,0),(95,'SAPO-000-95',35,3,'Ngyễn quang phúc',NULL,'2021-07-15 10:31:56',NULL,NULL,12750,0),(96,'SAPO-000-96',36,3,'Ngyễn quang phúc',NULL,'2021-07-15 10:32:13',NULL,NULL,7000,0),(97,'SAPO-000-97',37,3,'Ngyễn quang phúc',NULL,'2021-07-15 10:32:20',NULL,NULL,9000,0),(98,'SAPO-000-98',38,3,'Ngyễn quang phúc',NULL,'2021-07-15 10:32:27',NULL,NULL,7500,0),(99,'SAPO-000-99',39,3,'Ngyễn quang phúc',NULL,'2021-07-15 10:34:03',NULL,NULL,1100,0),(100,'SAPO-000-100',40,3,'Ngyễn quang phúc',NULL,'2021-07-15 17:01:47',NULL,NULL,2000,400),(101,'SAPO-000-101',41,3,'Ngyễn quang phúc',NULL,'2021-07-15 17:15:37',NULL,NULL,600,0),(102,'SAPO-000-102',42,3,'Ngyễn quang phúc',NULL,'2021-07-15 18:09:21',NULL,NULL,1500,0),(103,'SAPO-000-103',43,3,'Ngyễn quang phúc',NULL,'2021-07-16 03:13:40',NULL,NULL,2500,250),(104,'SAPO-000-104',44,3,'Ngyễn quang phúc',NULL,'2021-07-16 03:16:29',NULL,NULL,600,0),(105,'SAPO-000-105',45,3,'Ngyễn quang phúc',NULL,'2021-07-16 03:19:01',NULL,NULL,2500,0),(106,'SAPO-000-106',46,3,'Ngyễn quang phúc',NULL,'2021-07-16 03:20:11',NULL,NULL,3500,350),(107,'SAPO-000-107',47,3,'Ngyễn quang phúc',NULL,'2021-07-16 03:24:29',NULL,NULL,1250,125),(108,'SAPO-000-108',48,3,'Ngyễn quang phúc',NULL,'2021-07-16 03:26:44',NULL,NULL,5000,1000);
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
  `sell_product` int NOT NULL DEFAULT '0',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` decimal(8,3) DEFAULT NULL,
  `supplier_id` int NOT NULL,
  `decription` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `color` varchar(40) NOT NULL,
  `created_date` date DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `size` varchar(40) NOT NULL,
  `category_id` int NOT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `supplier_id_idx` (`supplier_id`),
  KEY `brand_id_idx` (`brand_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `cate` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'#A','Áo khoác Chino thời thượng SID56708',1,26,199,'https://lh3.googleusercontent.com/NevAMsFwOcu9jE1olaVuBh7mOFjiwvX125G0gyU_yeOzFvT4mNodgJxBew33Wc0xJ7wAap9uhayfIcODs5dziCV0bdvAzEGMvHvEAF4f4-L6HDHRxPd4bwXYvztRu5McDOi9V-9xOw=s60-p-k',500.000,1,'chất vải mát','1','2021-02-02','2021-07-16','1',1,NULL,NULL,NULL),(2,'#A1','Áo khoác đầm dáng xòe nút bọc 2in1',1,23,304,'https://tmluxury.vn/wp-content/uploads/Anh-quan-jean-nam-ong-dung-lacoste-tmj17-hinh-lon.jpg',600.000,1,'chất vải mát','2','2021-02-02','2021-07-16','2',1,NULL,NULL,NULL),(3,'#V','Váy phối sọc cá tính SID62366',2,0,142,'https://tmluxury.vn/wp-content/uploads/Anh-quan-jean-nam-ong-dung-lacoste-tmj17-hinh-lon.jpg',300.000,2,'váy ngắn mát','5','2021-02-02','2021-07-15','2',2,NULL,NULL,NULL),(4,'#V2','Váy phối sọc cá tính SID62366',2,16,86,'https://tmluxury.vn/wp-content/uploads/Anh-quan-jean-nam-ong-dung-lacoste-tmj17-hinh-lon.jpg',250.000,2,'váy đầm','4','2021-02-02','2021-07-16','1',2,NULL,NULL,NULL),(5,'#AT','Áo thun phối sọc cá tính SID62366',3,20,80,'https://buway.vn/wp-content/uploads/2018/12/41.jpg',250.000,3,'áo thun coton','5','2021-02-02','2021-07-15','3',3,NULL,NULL,NULL),(6,'#AT1','Áo thun phối sọc cá tính SID62366',4,99,1,'https://buway.vn/wp-content/uploads/2018/12/41.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-07-13','3',4,NULL,NULL,NULL),(7,'#AT1','Áo thun phối sọc cá tính SID62366',4,99,1,'chan_393c7cbec47e411ba225cd0665c5fb3b_grande.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-07-13','3',4,NULL,NULL,NULL),(8,'#AT1','Áo sơ mi',4,100,0,'https://file.hstatic.net/1000177103/file/tao-dang-vat-cheo-chan_393c7cbec47e411ba225cd0665c5fb3b_grande.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-02-02','3',4,NULL,NULL,NULL),(9,'#AT1','Quần short',4,100,0,'http://file.hstatic.net/1000177103/article/tao-dang-vest-khoac-ao-qua-vai_a99203d3a86f421e82fc7d8221573b67_1138eccce7c04378b459eb4af815347c_1024x1024.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-02-02','3',4,NULL,NULL,NULL),(10,'#AT1','quần kaki',4,100,0,'https://nhiet.vn/wp-content/uploads/2018/10/shop-%C3%A1o-vest-nam-h%C3%A0-n%E1%BB%99i-4.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-02-02','3',4,NULL,NULL,NULL),(11,'#AT1','Áo sơ mi',4,100,0,'chan_393c7cbec47e411ba225cd0665c5fb3b_grande.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-02-02','3',4,NULL,NULL,NULL),(12,'a','Ao thun',2,60,45,'https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d1-ngoc.jpg',500.000,2,'','XANH','2021-07-13','2021-07-16','l',5,NULL,NULL,NULL),(13,'gfdgfd','Ao thun',2,100,0,'https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d1-ngoc.jpg',500.000,3,'','Xanh','2021-07-13','2021-07-13','L',1,NULL,NULL,'Deleted');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `return_order_details`
--

DROP TABLE IF EXISTS `return_order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `return_order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `return_order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quanlity` int DEFAULT NULL,
  `discount` bigint DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bill_id_idx` (`return_order_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `bill_id` FOREIGN KEY (`return_order_id`) REFERENCES `return_orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `return_order_details`
--

LOCK TABLES `return_order_details` WRITE;
/*!40000 ALTER TABLE `return_order_details` DISABLE KEYS */;
INSERT INTO `return_order_details` VALUES (87,53,2,1,NULL,NULL,NULL),(88,53,12,1,NULL,NULL,NULL),(89,54,12,2,NULL,NULL,NULL),(90,55,12,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `return_order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `return_orders`
--

DROP TABLE IF EXISTS `return_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `return_orders` (
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
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `return_orders`
--

LOCK TABLES `return_orders` WRITE;
/*!40000 ALTER TABLE `return_orders` DISABLE KEYS */;
INSERT INTO `return_orders` VALUES (53,'RSAPO-000-53',39,3,NULL,NULL,'2021-07-15 17:43:48','Ngyễn quang phúc',99,1100),(54,'RSAPO-000-54',38,3,NULL,NULL,'2021-07-15 17:46:14','Ngyễn quang phúc',98,1000),(55,'RSAPO-000-55',38,3,NULL,NULL,'2021-07-15 19:33:20','Ngyễn quang phúc',98,500);
/*!40000 ALTER TABLE `return_orders` ENABLE KEYS */;
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

-- Dump completed on 2021-07-16 10:47:37
