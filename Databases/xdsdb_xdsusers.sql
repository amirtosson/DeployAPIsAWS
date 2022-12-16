-- MySQL dump 10.13  Distrib 5.7.40, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: xdsdb
-- ------------------------------------------------------
-- Server version	5.7.40-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `xdsusers`
--

DROP TABLE IF EXISTS `xdsusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xdsusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `loginname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xdsusers`
--

LOCK TABLES `xdsusers` WRITE;
/*!40000 ALTER TABLE `xdsusers` DISABLE KEYS */;
INSERT INTO `xdsusers` VALUES (1,'admin','admin','Amir','Tosson'),(2,'admin2','admin','Firstname','Lastname'),(3,'admin3','admin','Firstname3','Lastname3');
/*!40000 ALTER TABLE `xdsusers` ENABLE KEYS */;
UNLOCK TABLES;



DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `title` varchar(1000) NOT NULL,
  `text` text NOT NULL,
  `imglink` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES ('We are extending','New members have joined our group.','../../../assets/Images/img1.JPG'),('We have added a new challenges','New projects were added to our ToDo list.','../../../assets/Images/img2.JPG');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

DROP TABLE IF EXISTS `datasets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datasets` (
  `owner_id` int(11) DEFAULT NULL,
  `method_name` varchar(50) DEFAULT NULL,
  `dataset_name` varchar(50) DEFAULT NULL,
  `rad_facility` varchar(50) DEFAULT NULL,
  `sample` varchar(50) DEFAULT NULL,
  `dimension` varchar(30) DEFAULT NULL,
  `structure` varchar(30) DEFAULT NULL,
  `summery` varchar(500) DEFAULT NULL,
  `added_date` date DEFAULT NULL,
  `hasreadme` int(11) DEFAULT NULL,
  `hasmetadata` int(11) DEFAULT NULL,
  `hasrawdata` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datasets`
--

LOCK TABLES `datasets` WRITE;
/*!40000 ALTER TABLE `datasets` DISABLE KEYS */;
INSERT INTO `datasets` VALUES (1,'GG','zut','zut','zut','zut','zut','zut',NULL,1,1,1);

/*!40000 ALTER TABLE `datasets` ENABLE KEYS */;
UNLOCK TABLES;
