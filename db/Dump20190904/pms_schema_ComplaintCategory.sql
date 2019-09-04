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
-- Table structure for table `ComplaintCategory`
--

DROP TABLE IF EXISTS `ComplaintCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ComplaintCategory` (
  `CategoryID` int(11) NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `Image` longblob,
  PRIMARY KEY (`CategoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ComplaintCategory`
--

LOCK TABLES `ComplaintCategory` WRITE;
/*!40000 ALTER TABLE `ComplaintCategory` DISABLE KEYS */;
INSERT INTO `ComplaintCategory` VALUES (1,'Plumbing','Select this category if your issue relates to toilet, sink, leaks, shower, tub, etc.','‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`¹U\0\0\0bKGD\0ÿ‡Ì¿\0\0IDATh\Ş\í\ØK¨Ue\ÆñŸ©…]\Ël\àH!\ĞE\ÒÒ A¤F#‹.80rˆ\è A\ä!\Ê(:\â <Jv-¤‹lQ\Ç.¦¤¢\Ôñ‚Çƒ¦\â~šlNm\ÏZû˜îµ\ì\ç­\ïY\ë{ÿ{\ío½\ßZ/\ëÔ¤I\Ôt«TÇš¦ø¥Z€\Ùö‰\Óv\Äyñ£ûU¬­¢¯\Ğ\é\ë\é\0t\0:\0€ªµE\ì)t‹\rM¯h\â•lJ\ï\ÍQw—^\ÙeĞ ®+x[ümt³°¾/‰S\"N•úø\Éf+\Ì.œ}HKEL+ô^a³¾\Ô8l¥›\Ë\0±¸Äe…õ\Æv\ÛK\Ü^½¾qd¢\ßK®-J1\ÖIñõeüyóD\Ì\á¬;-\ÕW‡\Øå¢S\Ş5÷U\0£=ã ˆƒf·g¸ ¾¬\0®·AÄ€{†›=\"¯€Q–«‰ın»Øš\ìŒ8Qò,´\n\0^ñ•QÏŠø\Õ\í\\\ãc†[\İ\"-’0\Şq±\Ïu\ÃW\êFƒS!\0\ËD<_´HV\Õ+\ßÏ¼ˆ\Ë§_\ì,6\çÕ®?½\ï9šfjI,±¨Ä\Ò\ä\'¬5“Š\Í,7Ğ’\à´OL.\Ìñ˜ˆ…\å7i‚%¾u¶G\ÜZ8Äª‘k\×L¼\à•’X+bm©\ß+bM\á\Ü\Ç[ñ¶5F·î¦‹u‡ø¡\Ğù]|ªr­ı…NŸ\Ø\Ú\è\0t\0:\0\Õ| ™R{Å¶ªÓ¿5\âVµ±Z€¾şª`†\Z\ZŸ\ßù¾\áøs³´UË«\î;7\×DÎ¹\ë\ê¼#b\Ó\ÕJ?\İùú\Â{\è\ê\0lœ»†–U¯9\"z¼!\â©ö\ìgt™\à„\ØÛ¼g\Ôz\Í±\Z¼ZöiZ¥¾\ç\ê\í¼ñ\Ä\îv¦Ÿ¡&z†W‹˜\Ó>€µ¢öŸ¶L—s\í¬c\Û\Æ6‹\ÓnjÀ½\"–4Œ=-bn{\0ñp\Ã\Øt/¶\àQó\Æig9º\ÅY±­¡üöŠZI\ç ­ñf½O<\ÆJŸµ\ï1œ\äP½I\Û\ã=ûE5µ¥hº\ß\Z\ŞüV`‹4\Î\Ëv8i\Ğn\Ë\Üø¯ñ\án\âHã»\0\0\0\0IEND®B`‚'),(2,'Appliances','Select this category if your issue relates to refrigerator, dishwasher, oven, etc.','‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`¹U\0\0\0bKGD\0ÿ‡Ì¿\0\0òIDATh\Ş\í\ÙKl\ÔU\Çñ•G\ÑZ¥b¤ğÑ ò\Ôp%\Z(>ºR‰+‚41\ÑB\áa‚DX\Ã\Â j…C\n;Œ1­¡TÀ–>¨\Ìq\á\ĞT:…™\ÎL\ÅÈ¹›srÿó¿\ßü\ïo\Î=÷^®Zg+´\Ü1‘\ÇVg™\Â\î–\çuğ­¼{€cÂ¤¼~\ã„º\î»C\ä}š/9Æ…\Î\'üªÖŒ.~O\íqµÿ˜„\ËüıxM¿§V{‘\nz\à€öuù\ìi\ÌP«\Æc]üLl¿ª{O\áı7\0t\Èe\ßEq¦m_\ÏD¸¿\ã\Ñ\ê‹\âL[uRG5™ü\ë‰\è\n(Uf£CN:\çœzmğšÁ½0\Í6¦œ\ív[=’_€‘v¡\ÍN¯›h>úlŠ…Ha»ù˜£I8e\â”ıC­rNh4;\0K„°J	¸\Çbj\Ö\ä°Jów©Â¢\\,Ú¼\nV•R»MÆµ>\Â{¹˜#´˜ŠVK§¬5\Ó0…®7\ÚS\Öi\Öè‡¹Bx6W\0#5	/¡\Ä^¡\Õ)Tpƒ%\Î\n{”`…p\Æm¹\Ø!,\Ã\0\Õ\Â÷vû\ëqj„*}õQ%|€i\Â	\Åø\\ø\Ù\ĞK*|ˆ\Za5\Æ:\ßM›!À6a.¦Ih6ö²ifœ³&aƒğU¶\0¥Ú\Ö?)\Ä\ãJ\Ó\ÈtK…]+4§PKF\0eÂ— À&ag\Z\0\Å\Z„\ÑøI˜•ÀFá¹ÿ&\Ò\Êö\ë…wP”o\0‡„aÑ»\Âgi\0\Ì*ğŒ°=;€“\Ú\\\Ó\İ\'ü˜À\è\äs\ã„²hS\ß)*š\Ò\0(\Zq‡ğK.Š…?Ò’a8ƒ!\Â\Ñì§  #º?\Ã)\è\ç¸=\Ù2úûiŠğ\é¤¹\Ùu\ÙlOú¦¤ù7œ—›å¸¬#\Ø,\ìHcø5£0\Ş\İ\Ù\Ö\îL†©øC¡Ã´¦\ÜSg¸m\Ş\ÂT	Í—XŠ/\Øx\Í&$ó\à\æ\ì¦\nõŠ±N8’\Ör¼lqŞ£¹(H¶+Ph\ïe\n’ñj„]ú&\Ó\Ñğ\ÜTD#4\n/c \ï„‹¥H>iv+A¿\ÜV\Å/\n­¦£\ĞJ	¡Á\ZO\Zn€\"cÌ²\Ş\ïB\ÂJ}ñ¦ós[–/Ú”‡T¦,\Ë+M@¥Bx#\×“\ÅBXkc‘j5ktX…yF%§\ë[!\á\í|l\ÍfkN[è¦”ı·[¡E8ef¾6§w\Ú&„s¾1\×d·\è«P©\é¨r^H\ØdH~·\çSlÑR­6™\Ø;·z\Å¾W¯M›ö[\ç…\ä¶õÿqD\Ó+\0’\'|¹÷\Ò\è\r\ï\ÊØŸ<\ãÌ½we‹°N˜œ\×\á¼ô¥Uy¯\\\Û}\Ò=@¡ruy¾¸üTW\íªu²¿\0·Yµszø&2\0\0\0\0IEND®B`‚'),(3,'Interior','Select this category if your issue relates to doors, windows, flooring, cabinet, etc.','‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`¹U\0\0\0bKGD\0ÿ‡Ì¿\0\0IDATh\Ş\í™[hU\Ç›¦\ÖÄ¦[µxIjªb\Ó\"\ÑF\ĞQ«¶éƒ´\ÕÖ€ BJú,Ÿ\"Akèƒ¦	ôÁ¤¢T‹I^¼Ğ´M·Q4i”*\Z&\ê\âKc\Í\îß‡=.»\Í\Îd\Î\ì\ì!\ç{:3\ç\Ì÷;;\ßuş×£‚vÚ©¸V\ê\×2†c¬½\ê·q¹È¶\â*/¥$B\à\0B$i£´X\êW2€ñ\0;¹„_²ª\ê7ğ+Bœ\ã¾ôµ{9‹<\\hõüŸ²<\ëúz\âš§üzº\Ìûn¥d\Ö\İ\Í\Ì \Äa\Ê¡¾’!„øƒ§]\×<\Æy„ø–5a«\ßD!¾¡\Ús\İœBˆ?y6<\åšI Ä‡>~\ÜEtz¼¨\0c	½1\Í.\ß{^d\n!qc¾\êkù!²\Ú÷\0¿ \Ä8æ£¾\Ëñ·X\ï]AŸ	W/\r·­\æ]¶²\Øgl§ƒ\ël7\ß\Æ`(if\"J•Í¶G™Dˆ¨\ÉÛˆ\ï\æ{„ˆñ„_§\Û\Å„ø˜¥¡¸ñb>Bˆö™{ñ‘tL„\È\ZÍ¡>ñ>\Ô=Œ \Ä\ï<z(„\ß\âGÖ»-\Ùk2\İi*’\Ìn\å8B\\\á­\\.\ÓjÊ«\0.c\íÚ¢ƒ…¹jq\Æcûz\Ş&\Ê$q™$J+\ë<2d4e\ÔOµ8\ÆğDË¶\è2AÅ\Ìp\Ğ5mõMÂ¡6u)e÷Gq\\–3lı‡\éğn\ãõ\â\ÌU5S&€\ÃQ„8ò_´\Za\Æ]\0J\èGˆ\Ü\ï³j<‰}9¹1N„=Œ°%û–Àñ9‹,Š·òW€œ\Ã\r`·\Ì\ì+¸\àb\Ò\Ö\0•\Ñf\ír\ï ’Ü?ÀV„\Øj\r°¡•¡@\ç›\æM‹ª ”½L#D‚÷Y œ\Ñ,\ïş\ÌgzŠp,k\ßhVL°\0h7«‰İ¦oôğ*Bœ¥‰&¾BˆıA\0Ê™Bœ`\0Ë˜@ŒúCL°\Ìä˜“ˆË”\Ù¬CˆW\Òó÷3>\ì`!‰¬3§~\Z{€5ñFzş:BsôE\0\ÕñZzŞ‚w\ÚD˜@\Ä\Ò]\ŞSùhNv#Ä“fv1„“a¾F¸!.\Ñ\ËAª(\ã<\"Á\×rME‡8N1IUt\Ñk>]\ì\Zö›1¢x\Æ4\\s\É:3Kòn>‘p£) \ê\0¨¡“\Ó\Ä\\Ë‘Q:\Í7³ÀĞ¬b\Ü:7d\0ØŒ@Cş¹`3Bl\Ğ	±)€U$}–½~	ˆ7‡Q¤úš~\ê\Ù\àS\êM‘\ÛNAr?ù.G3\å+\ÃH!$­”\']\Ô€¨y¬C\Û=¤Ç F=\Êò\0\0ƒ\é³\Õ{\Z_}z\İ`¸\0\Ï\ã\'NÿUõ\Í\ì\îz€8q ¼1000À0–ao€\âˆ@w\Ñ\0ºİŠˆ\ÕTAV‡óG\Æüiü\àKa˜@ló™\0\0\0\0IEND®B`‚'),(4,'Outdoors','Select this category if your issue relates to landscaping, fencing, pool, garage, etc.','‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`¹U\0\0\0bKGD\0ÿ‡Ì¿\0\0ûIDATh\Ş\í—=KAEZ[\ØZDH¡`\á?ÿ…\n‚`³V*V)R+6jMl´K[-\Ä2M`–˜ˆK…\Ï\Ìƒ\ìf&\Å\Ü[½\Ì\ær`g\Şìƒ     !\ÓeÊ”Y\È=yA“g~~l	Aör\Ø\Óä¥¡(ò@LLL¢µ´\Î\Ï-MN´~ h\0¶tÑ­·À.‚pÉ¹#_\"»½\0sL8ò\\\0×¶\0Ö¼\0¬€16(Q¢DM¯µ\Î\Ï×š\\\Ózƒ±ĞˆŒ¦©;oDu¦\rÀ¶—M¸\İ{Ï¨:òYÿ>0OÑ‘ç‡®­xX1\0£¬:oD«Œ†Fd4Ë“óğÄ¬\Øñ²	wza…G®„F\Ô°\ì`\Ù\0Œ°HDDÄ‰.^iŸ¯4ùD\ëEF†¦Œ[\Ì\ëú\Øa\îŸâ‡š¼nı6p\á\åıú:^: ·\ÎZ\í[ù\08Æ‡€¨;\Ìm\×?\0R¯§ …#\Z¼ Ï´:Ä¼!¤\Ät^3\ÍC¯š˜\"¼ib›g\á…Göm8E¡	\Ü \Ü\r„Z¦÷\\Ch\0w7@¡\ÊTÿ\ë8\0€\0ğ\à‘ˆ$€„ˆ\ÇÿHw˜\Ì\nğ\é\0\ì[\Û\Ì°i%\íÿ\0\n:BLf¾ó&5©\0¿T¸\ïJM„ûï£™=œ&Hú§f<O9(Ài÷ú\×ñü\æ€@{2\"Q\0\0\0\0IEND®B`‚'),(5,'Electrical','Select this category if your issue relates to lights, power outlets, switches, etc.','‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`¹U\0\0\0bKGD\0ÿ‡Ì¿\0\0mIDATh\Ş\í\Ùyˆ”u\Çñ×®º«­Xt\Ò!\Ùai$f&]PdtÙ­õOP]yBVtjXB†A\Ò%”\Ñ!FôOt@©e«[Qv³\îñ\í}|vfvfgv\Æõü\Ì;\Ï\ïù=ó~ÿ\Î\ç™Yv§\Ñ9\Òj¶x\ÙÑ»?Õ¯\"ym3iøñ¿	k\ì o¯\î\nüj#ÁBg£c\ìŸ¿S.°MX¥%~„W„W\Z‰?]—ğ¯°f\Â`ü*\áwG5\ß\äk\á	“ı2H¡ş”F¶ÿX\á{­R<,ªB…a\Âs†ğiz´Ca\Úp\á­S¸´D¡o¸ğ4{Wø\ÇY%\n[\í1<ø\ç„Ş²\n¯kÉ?\Å\"+\İn\ßZñ+„¿Ì°´‚Â˜\\øv}\Ém\êg\'Ô?M:r\à\çİ–¸Ú»\Â\×FÔWE¡ÏŒLüv—€V›„“jÃ·Y\ëc\Íh²¬¬Âš²÷ˆÁxxG8¿ü\ë„\rÉ‚«U¡?\É?úZK\çŸ\'|\ïğô\\-\n¥ø‰6+kÁ3\Ê\\‡€WÙ§…Áø„´U\Ç÷ü\ßf–”·zCx(©ód‰\Âñ~\ÖjMKz\ÌN°YXo\ì\Ğğ<+üä˜´^u…†\ãy\ÜF\ÇÕ­¬PŠŸ˜\Ïò¢u_>#,õ¾Vs\á\Ìô\\ÿ\\øfhc\Ïm9ğ\ÍV	\Û\ìU\Ğcƒ¢¨õ9ñ‡\é\Ò\ëÂŒZ\'—l¼•^OVDn<K…™µFº\Å\ä}®ñ\n5\à›m\é\Èh\ë´\Õ£‹Ê›<%,¯\Úkó\ã9\\\ØT¦ü\áô\ÛŞ’¢òv\á_gdDn<Ó„õeÊ·\'š*l)*ÄŸ\Î)\ê‘\ês!3S…OÊ”o\Îr¶°¹\äÌ¨\ä\ï]\Ş4V\å}\áÍ‚İ±J~-ó 0/‚ye¯›\'lO\îuöÂ—¢À~ \Ø\à;\íi‹s„\Ğ]ğ¼\\—\Â\İÂ‡šó¸¦iv¯s“÷S\ìUŸ\ÂX[…ù5	\äVá¥ª½ğZv\ãf\Ú.\Ü1ü¡×•\ÉQ%…Ë³?\èZ½CRX \Çõ\Ç;\ÎN÷õ¹pc¾¶ôe*´Xh£¤\ã\Úd|òn¶—’¹ğ™\Ğ\ã9sµûIøÊy\îL]5…\Å\é\Ò\\\\rf®^a\n¶\ëMk~h¿<ø\ÉzôX1\Â4§	E\å\ãu·\'ø.³m=ã¢¼«\ë6\á)Ì©ª\Ğ!L7]ø±¨¼\ÉBs\nğC\È5Â§\Ú2¥»¨\Ì\Ù:ğ\ì\áa6\\WQ¡\Åb~´¨\Ì\æR¦\è\Ö[U¡R\êÆóq:k÷\Ä\åz„»s^½P\è\Ê|¨«’6\ë„Mf\Ú0…ºñ\ã|$lp¨’µD:\0u¦\n7dnM\r\Çs¥!¬wªW3vÇ†\Ä	ú7ô\n÷º¶Ù£;ö³\Ì\'7Á}~uòøÕŸ£¼]/÷*\âK3\ËB—·´»\Ù<\ï\é:3¾\Ìe\æ\ß\æ\Â\Ã/$s£ÿ\Õ\å\é*ÿ\ÆÈ™‘\éÏ­Yøş\ì\í\nx\Ìı.1®^xq.\Ó-\Ü\×\ØİÏ—tgıN\Í(+Ü´\ëğÿ\ßüÍ® \Ç;€\0\0\0\0IEND®B`‚'),(6,'Exterior','Select this category if your issue relates to gutters, air conditioner, walls, etc.','‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`¹U\0\0\0bKGD\0ÿ‡Ì¿\0\0yIDATh\Ş\í™KlLQ\ÇC¥^\ÑF\Ä+mH¤l°@7\ì¼\âV+\ÓV\Ú%»\ÚIl\İ 6­T\"$\Ş´\"B$\"mD5Š™˜V«¿E\Ï\\ss\î\Õ\ŞiI\æ»Isz¾óø\Çÿ;9g b«\Ø\äl	K§³ûfD+,Ÿ.€~D‘¡…*¯|O\âb7\â%[\\¾®@€\Çñ\0l\ã-\"O;‹ı\Şt\ì\00‡V†\ßhff|\0\İ!k–Cluşk\àB<ec\\\0a•. D\'Ëœœô\"Fi£v*\0ª8AŞ£‚ùœf\ÑÇ¡ò\ÊñªH«y\à\ä— ÆŒr/\ïy.±\Èx¢!N3¿<\0«8\Å7g”|-RA-)FINÀ­†;¹\ÍB<,j¸ûÀF\"d<øSyGyƒƒ\\dodn\0\Ì\àf¦\æL`9­|AˆO´:«\í\Ù\\ZF|\á0	“·cˆ÷\ì8@šQ„\è\æ \ë\à	šÚµ<BˆG¬uò6ó!®³\â\ï\0ªi28L.ÿZƒ5*qT\0U´A\ä8\î;;-\0}\æ\ïÉ¢x7¾\åÎ’Eˆ3%j\×\Ò\Æ(¢—N\Ş2:\â|x\ç›\è0#AÕ®\Ñ\í\à–£‚ı\ÖV6Ü£Á\ÉÛŠøa«4ƒ}&’q“\í.\ßl’¼FˆŸ´³>\Â,&HÒ!Å¼ğøRC3\"CŠ•._°\n¢˜W%\0V“\"‡\ïhvh¥_ñœ$³\\¾z\Òd\Ér5\Ö%}†7Y\éH°\ÏÄ´1n±\Ã\Ñ/@5M¼0*¸\ìQÁx÷\ÎÁ3@¡Ê”\Ê!úİ®s‘\ål\ÑVß³\'\n>ûTP°4\â6u\Ôqq5TU\ä\ÇÜ!D\\yt0¨·e‘w=\"!°\Ü%\ÜkbSAÀ÷H‘\Õâ°© Ø®!\îPO=w\é\É\0\ØTP\ÚÖ¸6a\Ã\Ä\0“]>„[WÉ!Ò½ İ¨ ,—‡(\0\Õ4‘¤fú\0\"¨\0LÀz/×…¯—\İ%\Ë\Ù|‘\ì\İ\Ñc)\×cm#@XA[¹(¾\n@\à\ßˆ*\Ã\â7\è°6\"\ì¦\'¤û]>\0\ï\ÈKµk(¶L\ÉYP\\¾Ë¼‚\Æğ\çEÄ²o4	¨ j*ÀŸú\0ºœWm{\Ê\à¯Q\ÖM¥ ;4ò\Åıy^á»¦ \æ_N*ö?\Ûo’»¶‚H¸\0\0\0\0IEND®B`‚');
/*!40000 ALTER TABLE `ComplaintCategory` ENABLE KEYS */;
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
