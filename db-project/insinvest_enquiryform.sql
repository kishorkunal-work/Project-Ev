CREATE DATABASE  IF NOT EXISTS `insinvest` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `insinvest`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: insinvest
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `enquiryform`
--

DROP TABLE IF EXISTS `enquiryform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enquiryform` (
  `Id` bigint NOT NULL AUTO_INCREMENT,
  `productname` varchar(100) NOT NULL,
  `rcd` double DEFAULT NULL,
  `premium` double DEFAULT NULL,
  `sa` double DEFAULT NULL,
  `ppt` int DEFAULT NULL,
  `pt` int DEFAULT NULL,
  `mode` int DEFAULT NULL,
  `surrendervalue` double DEFAULT NULL,
  `accruedrb` double DEFAULT NULL,
  `age` int DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `calculationdate` datetime DEFAULT NULL,
  `lastpremiumdate` datetime DEFAULT NULL,
  `lastpremiumduedate` datetime DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  `Userid` int DEFAULT NULL,
  `FileAttachmentId` int DEFAULT NULL,
  `Createdon` datetime NOT NULL,
  `Createdby` varchar(100) NOT NULL,
  `Active` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enquiryform`
--

LOCK TABLES `enquiryform` WRITE;
/*!40000 ALTER TABLE `enquiryform` DISABLE KEYS */;
INSERT INTO `enquiryform` VALUES (1,'p1',23,23,34,34,34,34,34,34,34,'2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02','PENDING',NULL,NULL,'2021-02-01 18:09:58','kishorkunal09@gmail.com',_binary ''),(2,'p1',23,23,34,34,34,34,34,34,34,'2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02','PENDING',NULL,NULL,'2021-02-01 18:11:48','kishorkunal09@gmail.com',_binary ''),(3,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-01 20:17:00','kishorkunal09@gmail.com',_binary ''),(4,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-01 20:18:09','kishorkunal09@gmail.com',_binary ''),(5,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-01 20:21:39','kishorkunal09@gmail.com',_binary ''),(6,'p1',23,23,34,34,34,34,34,34,34,'2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','example@123','PENDING',NULL,NULL,'2021-02-02 05:01:44','gauravpant@gmail.com',_binary ''),(7,'p1',23,23,34,34,34,34,34,34,34,'2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','example@123','PENDING',NULL,NULL,'2021-02-02 05:02:49','gauravpant@gmail.com',_binary ''),(8,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example1@ds.com','PENDING',NULL,NULL,'2021-02-02 05:06:11','gauravpant@gmail.com',_binary ''),(9,'p1',23,23,34,34,34,34,34,34,34,'2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','example@123','PENDING',NULL,NULL,'2021-02-02 05:38:54','mithilsejpal@gmail.com',_binary ''),(10,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-02 05:41:17','mithilsejpal@gmail.com',_binary ''),(11,'p1',23,23,34,34,34,34,34,34,34,'2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','example@123','PENDING',NULL,NULL,'2021-02-02 05:50:42','mithilsejpal@gmail.com',_binary ''),(12,'p1',23,23,34,34,34,34,34,34,34,'2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','2012-12-02 00:00:00','example@123','PENDING',NULL,NULL,'2021-02-02 05:54:17','mithilsejpal@gmail.com',_binary ''),(13,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-02 06:05:13','mithilsejpal@gmail.com',_binary ''),(14,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-02 16:47:23','kishorkunal09@gmail.com',_binary ''),(15,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 04:40:17','kishorkunal09@gmail.com',_binary ''),(16,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 04:49:35','kishorkunal09@gmail.com',_binary ''),(17,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 04:51:34','kishorkunal09@gmail.com',_binary ''),(18,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 04:52:23','kishorkunal09@gmail.com',_binary ''),(19,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 04:54:30','kishorkunal09@gmail.com',_binary ''),(20,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 07:03:10','kishorkunal09@gmail.com',_binary ''),(21,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 07:06:30','kishorkunal09@gmail.com',_binary ''),(22,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 07:11:06','kishorkunal09@gmail.com',_binary ''),(23,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 07:27:29','kishorkunal09@gmail.com',_binary ''),(24,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 07:34:52','kishorkunal09@gmail.com',_binary ''),(25,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 07:35:31','kishorkunal09@gmail.com',_binary ''),(26,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 12:36:27','kishorkunal09@gmail.com',_binary ''),(27,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 12:37:17','kishorkunal09@gmail.com',_binary ''),(28,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 13:31:28','kishorkunal09@gmail.com',_binary ''),(29,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 13:55:53','kishorkunal09@gmail.com',_binary ''),(30,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 13:56:48','kishorkunal09@gmail.com',_binary ''),(31,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 13:57:19','kishorkunal09@gmail.com',_binary ''),(32,'pname',23.32,23.32,23.32,23,23,NULL,23.32,23.32,23,'2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','2020-12-12 00:00:00','example@ds.com','PENDING',NULL,NULL,'2021-02-03 14:00:00','kishorkunal09@gmail.com',_binary '');
/*!40000 ALTER TABLE `enquiryform` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-06 10:50:10
