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
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `UserID` int(11) NOT NULL,
  `FirstName` varchar(45) NOT NULL,
  `Surname` varchar(45) NOT NULL,
  `Dob` date NOT NULL,
  `ContactNumber` varchar(45) DEFAULT NULL,
  `Email` varchar(200) NOT NULL,
  `Salt` binary(20) NOT NULL,
  `Hash` binary(20) NOT NULL,
  `Active` bit(1) NOT NULL,
  `Address1` varchar(45) DEFAULT NULL,
  `Address2` varchar(45) DEFAULT NULL,
  `Type` int(11) NOT NULL,
  `Suburb` int(11) NOT NULL,
  PRIMARY KEY (`UserID`),
  KEY `Type_idx` (`Type`),
  KEY `Suburb_idx` (`Suburb`),
  CONSTRAINT `Suburb` FOREIGN KEY (`Suburb`) REFERENCES `Suburb` (`SuburbID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Type` FOREIGN KEY (`Type`) REFERENCES `UserType` (`UserTypeID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'Neerav','Panchal','1996-07-26','0718989341','neerav@pms.com',']p\“Yœ≤Ö\È\€\·≠GC£N\‚','9∏\‹\Ôê∂\0â6\Á23	\¬w7\’7','','Blah','Blah',1,2),(2,'Joe','Soap','2001-07-01','9812341298','joe@pms.com','¯g\”]\Êª\ﬁÙ+/\‡\⁄?e≤∂\·\€D','w[ŸÜ©g}{\ƒ\ÿ.tIÀÑ	\≈P:','','1234 Main Street','Apartment 206',3,45),(3,'Dexter','Johnson','1975-07-27','0716547899','dexter@pms.com','\œJK\ﬁ¯\Ã}üJ%aòÚ“™≤\√\ƒ.a','ÒÇh˜\“73\‘\»óu ¢:\Ó≥nP','','1234 main Street','Apartment 207',1,1);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-08 17:24:58
