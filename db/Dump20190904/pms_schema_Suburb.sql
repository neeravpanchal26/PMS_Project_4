CREATE DATABASE  IF NOT EXISTS `pms_schema` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `pms_schema`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: pms_schema
-- ------------------------------------------------------
-- Server version	5.7.18

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
-- Table structure for table `Suburb`
--

DROP TABLE IF EXISTS `Suburb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Suburb` (
  `SuburbID` int(11) NOT NULL,
  `SuburbName` varchar(45) DEFAULT NULL,
  `CityID` int(11) DEFAULT NULL,
  PRIMARY KEY (`SuburbID`),
  KEY `CityID_idx` (`CityID`),
  CONSTRAINT `CityID` FOREIGN KEY (`CityID`) REFERENCES `City` (`CityID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Suburb`
--

LOCK TABLES `Suburb` WRITE;
/*!40000 ALTER TABLE `Suburb` DISABLE KEYS */;
INSERT INTO `Suburb` VALUES (1,'Alexander Park Industrial',1),(2,'Allanridge',1),(3,'Cannon Hill',1),(4,'Cape Road Industrial',1),(5,'College Hill',1),(6,'De Mist',1),(7,'Dr Brawn',1),(8,'Elandsrivier',1),(9,'Eric Dodd',1),(10,'Fairbridge Heights',1),(11,'Gerald Smith',1),(12,'Greensfields',1),(13,'Janssendal',1),(14,'Jubilee Park',1),(15,'Kwanobuhle',1),(16,'Levyvale',1),(17,'Mandelaville',1),(18,'Mcnaughton',1),(19,'Mimosa Dale A H',1),(20,'Mosel',1),(21,'Mountain View',1),(22,'Penford',1),(23,'Riverside Industrial',1),(24,'Rosedale',1),(25,'Scheepershoogte',1),(26,'Strelitzia Park',1),(27,'Thomas Gamble',1),(28,'Tiryville',1),(29,'Uitenhage Central',1),(30,'Uitenhage Rural',1),(31,'Uitenhage Upper Central',1),(32,'Valleisig',1),(33,'Van Riebeeck Hoogte',1),(34,'Vanes Estate',1),(35,'Winterhoek Park',1),(36,'Adcockvale',2),(37,'Algoa Park',2),(38,'Amsterdamhoek',2),(39,'Arcadia',2),(40,'Aspen Heights',2),(41,'Beachview',2),(42,'Ben Kamma',2),(43,'Bethelsdorp',2),(44,'Beverley Grove',2),(45,'Blue Horizon Bay',2),(46,'Bluewater Bay',2),(47,'Booysen Park',2),(48,'Brentwood Park',2),(49,'Bridgemeade',2),(50,'Broadwood',2),(51,'Brookes Hill',2),(52,'Brymore',2),(53,'Charlo\n',2),(54,'Chelsea\n',2),(55,'Clarendon Marine\n',2),(56,'Cleary Park\n',2),(57,'Coega ',2),(58,'Colleen Glen\n',2),(59,'Cotswold\n',2),(60,'Cradock Place\n',2),(61,'De Stades A H\n',2),(62,'Draaifontein\n',2),(63,'Essexvale\n',2),(64,'Fairview\n',2),(65,'Fairview Industrial\n',2),(66,'Ferguson\n',2),(67,'Fernglen\n',2),(68,'Forest Hill\n',2),(69,'Framesby\n',2),(70,'Francis Evatt Park\n',2);
/*!40000 ALTER TABLE `Suburb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-04 13:50:10
