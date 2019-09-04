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
-- Table structure for table `ComplaintSubCategory`
--

DROP TABLE IF EXISTS `ComplaintSubCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ComplaintSubCategory` (
  `SubID` int(11) NOT NULL,
  `CategoryID` int(11) DEFAULT NULL,
  `Image` longblob,
  `Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`SubID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ComplaintSubCategory`
--

LOCK TABLES `ComplaintSubCategory` WRITE;
/*!40000 ALTER TABLE `ComplaintSubCategory` DISABLE KEYS */;
INSERT INTO `ComplaintSubCategory` VALUES (1,1,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0\�IDATh\�\�\�Ohe\��O\�Je]C\�4��\"�VDCz�`c��\'�\�%-�\nRL\�\�F�j�z�\�RH���`�-�XOR[/u�x*�S\�\�\�\�v�n7�ݙ݃�{`�y_���μ\��>3CO=�\�S3=\�c�B�]\�:\����\��\�>eee�\\6\�e��lK3�M�y\�꺶3~5X=\�:\�o���\��-���\�M�Mi�\�7\��Em%���=-x6-�g�4\0Xl�\��YԖ7z�ݝ@Y\�\��o��yy�\�\�)c�(��1��1�u\Z�\�S�޴�[L+\���v�\�<�����I�\\\�pXE^^�[˰\�S�5Fd�A�\�\0#\"\"Q�j秠Pw\�ˤ~�A���\'gk�~�\�\r\�~rvH�9���\��A�\�߾\��\�\�3�����^*�\�R�rr\�\�W�\�\�1�Hɐ\�\�{�9�Z?Wg\�qL�¸J�e���\�g�xM\�p��\"\�����adm�f#Z^��_DflY*�\�E!���\'[㹬\�N`��\�kY\n\�\�-n=�?}��G��\������c|���fE\"\�W�\��\�^<��C��\�\�%x\'���;[q<\�;\��9��\�z�\�[\�V�q\�=���\���<)x�����\�\�\�\�\�L���>|�\��~\��,�\0_O+�bV\�;O.����S\"ٞ\�Nb���6�\�\�\�ij?t\'�\�H��̸\�f{p�)�	\��~\�\�[�^댚�\�{�>3\"�F���CW^&w\nBK\��C����b\�\�\��*%%���cNIɪ\�x=�\�SO\r�/t�]�W7��\0\0\0\0IEND�B`�','Bath / Shower'),(2,1,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0hIDATh\�\�\�[��U�ߌ�&\�P1o�\�\�JLEÌ\�\�0\���)!=\�\�P$�f��BJ���)*�iP��H�\�\�\n\�h��IШ\�\�t�3�3\�x��0k�l�����\�>\�[\�Z�fi�fi��6\�+暫\�H\�^Y�\�ʝ��oo\�p%���\�@tuz���\n>ڷ\�\�6Z(5\��B�ԥP\�=������BXU�{��\0�>ç\��Z��\�?\��*}\��\�)�Y����\'��(\�\�/|G\�/8\�d==\'\�/�\���X>\�\�\�rԧYt�Q�$�9�~�H�\�\�r���+��_K�?��u\�S�V\�}�5��g�\��K\�D��$���G#P*���%p:~#:�0�X\�}����\�O�nW3�ණ~00!�Z�v��\�0\�5\�e�\�\'�AY?��\�Äp?z\n\�Bؘ�\\o����\r�\�-�ۦ�pθ�JW���^�\�\'�6�,-M5.�~\���xS�,�1����a�\�Ew\�\�S�!���\�V��V����I�آ\�-� p\�/�@��{X���`�Ŗ���02�2ï��J�\�pUB8k�\�.id�	����\�Z�\�\�\�Uy~	lLx>?\r�yzu�r�\�4�^v�\�\"/\Z�k�@r��R�z7:\�+�}:�B��ʉS������7v\������N\�\���24�\�\�`���G�v-�=h��	\�\�n�YV��N�3�v���\��\�\�\r�\�[b�\��\�q�\�ӎs\�b�<a�r���\�\\m��/�:�a\�\�Ceƺ\�\�l\�Te�p(�\�k���=c�\�\�h?\�F��OEI\�\�c��`p\���H��-sӫB�+ky�NG\ZQxwuT��f\��B(�\�:D�\�M�\�9Bؤ8\'|�MB��q��2S�\'�֕��.�\�Z!����;BX��\�Qa_}\�!<�\��N��W�s���e����?+����W	�s��;\�)�\�b���z\�~���P�Lq�h`B�5�b�\�\Zk\�N}�B\�\�@.|H���7:#\�i0\�&�.1�\��d���f\�^�\�\r\�\�\�3�x\�(�\�V�\�Re4bWMG�vv��N�\Z�ƦJ�\�\�\�-lM뽽\0\�\�\�v\n\�نWae��\�)��5\�\�\�!��W�5]\�\� �owfw����y�\�g!��[c�tN�_Tx�M�2RquI�f;���\�:̥+L�p\�L%Ma�6ˠ\�R�ښ˹\�~�\�\�@u�in\�,\����A#\��F(`\0\0\0\0IEND�B`�','Sink'),(3,1,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0TIDATh\�\�\�Kh�U�_cbl�\��Bb�耖�E�Յm@w1�&���-J�\�+Hq���YH���\r�$)h;\nAS5Ѝ	SlL�&m���1�G2�tf��Y\��ι�?߽���w)��J(!=*�\�~]\Z�/)�f\�\�1\�\'O-���\�	�I�:Ԃ\�4�\�1�\r:\�~�\�\�\�.�;i\�\�\�	��աפ sȠ`��]6�G���`\�AO[�-��\�	\�\�\��*נK�)�\�*\�E\�\����\�v\�D\�v���*��WoU�7\�ӫ*mt�X!\���ҰLFRֵFW�����\�v���\��\�����K����\���ظ3λ=w\�:\r$\r��\�U�\�lȅGl�\�\�\�Q!�]-L���K\�a�k���Q�6�Q�	\"�G(Ԥ�l�]�\�M\"\">f�Z��\�\�\�ϰ�smʞ\�L�G=\Z5\�a=�\��[�Z�\�]Kd��[�*gZ׎��K��*\�ʹo\�k\�Y\�.�t�ނ��\�M\�5;dB0&��X\�\�-~�\�}�t�>�{\��^4m4qxs@�cYDm5�:\�\�ǜq�#\�T\��:崻rI�\�\�\�c���Dlv\�\�\�.�@�\�,�v�Yt��^ɥ9Wg��Ƿι5_��Ap�xK\0_��f��pkV����Fk<Y\�\�x�鷺���J*�T_�\�:ƟMdlX0rD�sTz}��6N�\�Y씹�\�\���S�\�mjP��%����$��l1��Җ\�xސ�5����U+�E�Ќ�ϻ\�2�\�b�ђ/\�N��@b���2	�sDq�^u�i\�>���M\�3N��C`�ڋ��\�/��>^�2/؟_�\�� c\�\�[\�\�Avl�tƪ1a��\�Ŧ\�N_\���@�\�\�b��t\�\\P\\�q\�X<�\�:�A����/\"��jf�\0\0\0\0IEND�B`�','Leakage'),(4,1,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0 IDATh޽�[lTU�?\�B�#A.Dn�AQ�Q1\�#*�\nB\��5Q\�H���A$��	 h\riiDm� 4�UB!�\\Z\nD�-��>�x�\�tfzf���zZ\�=럳\�޳\�\Z�A&O��\�T!B�X\�\��\�r	ő�,���?\�\r\��X\�*6QNԱ^b\�ޕ-N��̥�\�Yo^\�/\�\�f�܊�9\�\��\��Hc��~Jc腀\�A���M\�׏\�Q\�ma�\�\�W�\�Jf��\��!~!#<\�;{\��3�����\�ږ\��^X\�$�8EW\�֑W8\��̣���F\�#|�#\Zy��\r��\�-p��\r�1D{cލ�F�\�\r\�(�\"\�Y1��x�sq�{�/bRp׹\�\��p!V�\�J�8C\�\����#h�\��a\�G�\�-<� \���%!\�F`��ᮞ��q��\r\�\�q\�2!r�8�\�g\�7\�w0D�a)E�$|�wx\�\��&\�ʄ��M\�\�\�b�=��/B�\�	��!��\�\�	\�\"n\�\�Ջ�IW�C�Zg\Z�\�؆8m�Y\rbS\�[\�F�V\"�\�	�$U��o#DOW߉�Ӟ�i\�\�������v?\"*\�	T!6�\����t\��\�\�U�\�y�|B\�$]1!\�u�\�g\�	�@�\�\0���tū\�\�\�\�\�	\��PG��O[=�Q�6(��SD�\�8T\�=IW\�C��\Zb�=�72�ֵ���2�u�5�>!^�\'�B�\�\�\�!Ĭ���♘�gO�ķ��I5\�@¾\�\�Q�lD\�0�r\"�\Z�BL�\�;!>46\�\�YaZ\�\�\�\�e\�e���F5\�ѐ,@�g�\�D-�\�8	/\"\�q{��8E�tcC*��ۓ\�yò!j�M{\0:0�+(掘�o�G\�SLs\0\�`�\�\\c?��\�h+I`ES���_p��\�\�\��\�{ڒ�Lu���ѰO�Yd9\��2�,G�Y\�^.p��\�\�\�\�{���E�\�-�\�Dj\�al�����\�\\(#�h2#�<�\�Ay���|ǒ\\�)a=y�ñw��q\�@�hH�2*G�\��4�)\��	\�=��[\�\'��~k�����P*l۳~A��#dse\�\�j	\�\��e�\�\��\��\"�\�-��\��Hb�\�\�\�\�~Y \�_\��\�iDD`~u�R�i\�8��\�Ǆ8\�R3���f��\�\"�\�Y��\�pg#\��\�\�]�y\�!:=F�8\�LA�&hHZ\�N�q������\�Nŗ�(}lH:}y��\��\'zڲ�jOqZG\�b�2�\��\�`߿|���%|�|ي\"\�Wa�����bi�F	\�&�\�%�Bd��\�\��\nku>�Τ�:\\E�\Z���+�\�\�ؓr\r�\'\\iH)|�}�}eu���e\0\0\0\0IEND�B`�','Toilet'),(5,2,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0qIDATh\�홿kSQ\�?	h\���l��tQ�[[�`�\���\�\ZlA(.�8\�L[;X�P��8��.V:)���T�\�\�ЛKMߍ/\�����~�ù\�{?�{Nx\�\�5\�2D�J7\�ሒ��?\��\�\�E��\�a�\�^�oe\�\0 �0xn\Z\��䈻M��H�%֌\�jN��kjF�Q������zcB\� �\��E\�3@\�\�@�*\�k��sra.�֞CX�3�\0r�\��s��\�b��O�<	\�L�g��-cLP U@J�˪*�YO�n��\�\0��\��;�\�O�\��\�\�\"l�\�+a ���\0�\�q\�a\�^�-�\�iS�IE[\�.���}�sX��\�>p\��*��S���@�\�e\0B<F�9\n�1\�!3�םDޫ�rY�Qz�o\����mq\'ݴ訅n:kT~��\�\��im8\���5_�1\�\�\0K;ހ�\�\�./BPH��*��`\��\��P6�|֧�w�V_N�\�X\0`,��\0�X\0\�\0�\\�A�\���]\�D�6N���\�㴌� �PvN=GX�\�2\��\�\�:\�3\�\�ua�\�j\�o�k\�\0!�\ZrE5a�Q\�<cdɲ� L�%\�4��@���ct�;�uU#FA�\��\�\���\�\�P?�+zI��~`/	�I�f�K\�\���f����8��\�\0\0\0\0IEND�B`�','Oven / Stove'),(6,2,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0\�IDATh\�\�MHTQ\�c��TL�(�_�$�B��#%J��\�E\�\�\re+��0�0č\�f�Z����¨ą}`P\�*���i�\�/Ӽ\�\�8z\�E\�=�9�3\��x��{��^ȶ��Saي\r\�\��l34��X^��\�\0�h\�BVs,d��\��\�(\���d���0J�[\��;\�+\'\�<0���\"Bƿ\0@K$�kl�E�{%�3\��\��[m��ޙ�,l�K\0���M�\0\�0�xE���\�wX@]���I�_A^B?�۟᢮\�4Y��\�\0�\�\�\�TY��?Z��\0�\�&H���%:H�\�\�\0�!D���\Z!�W\08Ǌ�o�R�)�Y��\0!~�73\0��UQ\0�}F�\���I�$��+q͑�F\Zm�2@{\nE�-.	} ��\�H\�N�ؐ	\0hE�J�z�8�@�\�\�?\�\nЈ��B�8�@�K\\�+�>�\�\�\0(@��,��\0fY\�W�\�l\�G�m.q\rQo��\�U��^\�t\�Y\0�g�_�\�9���sV\�E�C�A�11��F�-�\�B��=*b�)/].z`Q�\�3�\�0\�頛7ƿK�@Blv\0!D �r���\�T�g�v��\0g�\�P�-\�\�2.2\�4b�!:X�@�\���	�\�)\�$/���\Zs^t*J\�2B\�_�\"J`!��\�꨾/�j@��\�g�G�Dtb\Z\0���\�g�\��^\�p��8Y��\��y\�Lioq_\�9@=�8���\�FX\�\�+\"@ j��\��,@\�\0�_\�xzN\����\��\�\�A�\rr�`\��g\�!\0\0\0\0IEND�B`�','Dishwasher'),(7,2,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0pIDATh\�\�ٿKBQ\��/�68\�5JM����\0�� Z�\�Ơ����椡�&�A(ZUhq���%r\�L���\��\�G.\�{�\�\�\�|8�\\^��\��#��S`	Ǒ\�\�\�\�_�`\�\rp�\�q\�19ĭ\��4\��7�&��OL ęw�B$��*sQ\�\��\�Tt�}�H�\00@t�Eڼ2e/�a\�\��Z�yN�?��\�x\�\�s\��[��\�E	\�B�Yk\�0��\�\"D*:�4U\��nh\0�\00�b�\�YD��\�\�\n��)sJQr�n\�\�ߑ�۵Ó�\�\�\�\�e\�$I�T\�����\���!2���ȇW�5Dѹ�����y��\�\�g��kOz*��ˇ��Bн~\�w��sٽ�(���\�O\�n\�|,`O4\0\0\0\0IEND�B`�','Fridge'),(8,2,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0	IDATh\�\�[HTQ��Q�R�R*BH-�\�4\�\"�؃��\�E-\"\�!(L��\��,\�\nr���\"��HdvA��AȢ$��\�2\�ˬ<gtFg�\�]4k?\�f�\���u\�^�\�5�y\�k@�4\�񨣐\0�`\�#�\�;��� t\�:ǣA��n�F|\�|\�}iB\�A�T��J�PP1 ��Y\ZA\��fM\���� qŮxXj9V\0>dQH�:�Za�-j\0\�tE�T�JhV`\��`a�L\0BHa�\�F>\�8\r%�`;\Z0�\�9�\\\�R�\�\'���\��\�d/OE��\�rFRE�\�\�\�\�Bt\�)��_�\�Jw��Ţ-6Jed�@\�\�j�\�K\'��LA\�\�:I\�X�?g���\�M_\'�37؁�\�<\�\�JX\���3\\c\�R�O:g�\�5���\�iQ��>3Մ\�J�M�V��r�@,�\�]r��$\��gK9\�==ڭ��Nۂ\�\���\�U̓\�\�\�)B\'�^\�N\�3� <�+\�\\N�\�l\�]VN�0\�\�7�z�\'䳉\�\�<o�JU�\�\�\">k��\�D��;\�\��4\�\��.,g\�#E,���$n�\�\�u\�J\�a\�b*N m�\�\�<֑Il`���C����\"2�X�g��\�xI�BUQz[+J\�Օ\��\�/?��\�gC\�\�se\r\n�-�n�\�\n�T~4!t�^��6\��CY��\�8�9F\r4`F\�Z�-B�\�-\�v�E�\ZA0k�ڂ	\'�	�8A\��h*��\�\�e�裏B�\�\0��\�\�ت�Ǔ\�\�٣6���i�Y�;aSM�&LTs��	�@�R��Z\�\n\���y\�\�~=v�\�E�\�\0\0\0\0IEND�B`�','Microwave'),(9,3,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0\0\�IDATh\�\�ٽ\r�@�a�6;055-\�T�RQ1\055�1@~<��s\�k���G����s�K\�\���\�\�\�\�\�\�s�\Z\�\�_\�؀VC�\\z\�g��\0*���\�\�\�rbg�\�o�L�\�\�\�E3��Y�:3]k�63\0\0\0\0\0\0p0���I3���\���\�k�73\0\0\0\0\0\0\0\0\0\0\0�\�/*��h~]:�ل�\�\�v\�K\�\��\0\�E�s0U�\0\0\0\0IEND�B`�','Window'),(10,3,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0\0\�IDATh\�\�ٱ	\�@\��?J�	B,R�+�46Y�\�\�)l҈`m#v\�\nA��g�	\��7��\�>��ӧ@-��Oe��/Ĵ\Z�\"Dβ�\���\�F\�?�\�r�P�D��GG/�H\�̦a\���\�\Z\�|f�`�`�\�3\�qD�\�0�y����J�\"`\�!nB\raʁ=�`�`�`�\�r��\�©a/�~uu|y����\�°|�A�[\0\0\0\0IEND�B`�','Door'),(11,3,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0LIDATh\�\�\�o�E��@m\�Bw���DB]�31&S�\�#�Pjh�\�H�n�ƽ]`���\�b����l\�5�T��\"\�Oz��{\��\�\�{]�\�\�:�s�\�̜9�sa�ͷ���Qb[\�w�Yn�\�\�kd�!���:����`t�+�\�I\�\��\"e\�gO\�aؑP\�q�\�݇ ;�\�\�\�l\�C	\��$$�Kު�Uǖ�%�\�,\�8�N\����)\�G\�=*\�{d!=\�eZ2�20�/�\�?��/�LF$�B�x�~��~\�I�E(��~�.~���g�\n7\r	�g�W�n\�U\�n(!�<�3��\�I\�ޭ<@\'�P�좌p�M�#L�\�X\��0Ɋ~�\�쪵		�\�\�}���\�J��k\��9��\���ʴ\�°]W\�\�?w>[��\�4�\�ب&9��}��J�~w�\�X�*]����ŌV\���W�.�x\��/cA�P|m	~�N\�\"�\��� �1_���������\Zxa��E��1��O�\��XH��TDB�&v\�\r:�����\�\�\'#��*\�Z���� 6\�(���|cHȞ��\��JXg�Ax+�ا�����\�M\�-�;\�\�~W��=\�]����\�B�-`!\�}�P��Ik\�\'aF��t\�p\�m\����\�K]�(H%l1���� L��\n�%\�\��4\�e=�{���w\��t�p���k|EB��o\�:\�\�h��Ҍ\��&\�>\�\�\��k\�-\�\�}\�1K�\�W溔m\�/\"\���\�g#�\��ק~\"\�#�\�h0C�\�8\��+�\��lr\�\��FE\�\�eS�(p\�f\�@�Ϥ�)VU��\�)!~W\�3� \�TXx\�|���j&;Zn!G@�gh0ߟV\�!/\�/��`	?�4\�\�8G<@�f�q]�\�\�g\'=hO\�|\�\Z�}��\"��_\�\�\�,��Hj���j�����\�l||��3F@�Vj*�˰\�\�@~*N\�\�Q5ء0#����F/\�\�|G��^ܙ�V\�省z�(\�,|PoJH�\'�\\[�\'\���w�A�C\��iv�\�IՊQ���c��H4Ƞ]Q\�^,h\�\�H̔�e̳\��c?�6>�\�k�<Lz#�f@B�\�\�}\�y�\�U�1�r\�q,(VƻB|[`7�\�J\�[�JX^����Ш\�kƘ��n|�L3\�\�LuC����d�;l\�\�\�\�\nn�(,��\���\�Kc!z;t\�o\�X\�3Os=\'�6\�I\�tna�=�\�F\�>�닕\�3u\��x5�FT��|n��MK�OE�\�;+\�fp\",|N�^ba��k\���\�䤱\r^v�\�Nn�\Z`��B�1{�:�1���\�O���Yg�x�$�Y`���\�\\\�\�_B�4�2�*�\�&�D\�D�t\�\�\'?Z�Ge9\��L3C:��\"a�\�<�\�F���_\�\�]\���\�\�R{�\0\0\0\0IEND�B`�','Floor'),(12,3,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0uIDATh\�홱JA�?L�\"�A	v��\�#h�\�\�T����y�쬮i���\�66\"�D�Dzc!(w\�\\4d��\��\��\�\�W\�\�\�ށŔE��_h��w��7��|�q���Pq�� T�z\�\��p��¥\���t��I	A((nA(+n\�\0�\0f\�� ��\�<�2�\�	p\�SL�5���}ɼOB\�\0\�}ג\�\�\0��\0�\�!i�Mx�\�%�\0,�\��� d��P2\0�\0�!�\n�*��\�`�+\�\�]0G��.��M\��2���w\0\�S\�\��\nkB0�?4B�U\�\�\�\�Bc�PCn\"O~*�M�5�F-�Kms7@m^y\�|\�7\�#�Ѫu�\ZK\�2�\�ƪV�\���RcHŪ氘���-�y\�L{\0\0\0\0IEND�B`�','Cabinet'),(13,4,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0<IDATh\�c`�`��A\r�0�3�\�L�\0�a�\���0�\�D�H\�qA�<`\����=Ԉ�hI�<��Ƞ\�P�\��\�\0��Z\�3(��\rP#��$O����j�n�\�&*\�\�3H\"�X, _~\��u\0�\�\n�\�88��T\�w��\��^}`3\0�/?�\\�d!����\�Pİ�a\�n<ʭ\�#�*����ʴJ�K�<��\��u��F0\�Q�:�b2��C�\�3C.�ѩIv\0w���>1D�vLF0Dp8\��)X, _�H`\�MT�\'4q��J�D�>��w\�\�qC�ɏ�Q0\nF�`\0�\�\�\�]��1\0\0\0\0IEND�B`�','Fence'),(14,4,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0�IDATh\�\�mLUu\�?W�ZS\���t\�XI��r�\�j��/Z\�bm�sl�a�lNC\�|�j��\�264��1x��iq5j\�BH@\�ۋ��\�^\�\�{ν\\�\�\�\�����{���?🖥�Q\�\�;e~\r�\�k\��F�\�r\�x<�A��D��P\�\�\�4B\� ��E�&�\��3�#D/OYϞ�!��\�|�/`!N��|5q���3~/�\��.e\�m�>��B�\n\��)\\@�k�j;gCq�\'�6�:\��3ia\�\����7�3i��;�q\�\�P��,\�B�S\�x\�;��u,�\�|}1\�W\�\�W� ;�o3��<\�z\�\n\�M�z/\�p[j�eY�A6�\�\�씓\�v�y�f��B��e/�;B��6\�C�A\'B�\�f�NW\�$B|K�\'n��c1\�n|�\'W[1\�\�a +0/U��VӅ�\��~C�_ȴ��\�d�I��d��1ɞ�\\�ԔWQ��k\�\�,��\�?\�.^DM1A�h\"/L�`,\�OY��\'jl�:�u��Xb�S��$\�\n<\n�����\�\�~\�#��k�u�AN\"D��h\�E1>l� D�\�ܶ\��-�\0�(��m�C�\0��q��\�8�5��b�!> �n�\�h7\��9BsF�(\0����Aݐ����b\�\�7p\r��[��q�\�6z!v�Bl��1\�\�@�WCCH�,\�\n��x �	DC�\0\�#\�!\0r�\�x#ě\0��\��Y\�\0� \�X �Q\��\0�qq&:�d�)b?B1=��Ft����#��\"��\� \�R�\0�@%b\��U\�j�\0���+İ��|\�VGM*�@|\�(\�!&Y	�\�\�vrЌ\�$�4\�LR)1��ρrA����t\"�\�����s��8��\�@#��\\r\�j\�6PE���:��\�K�|b�GC\�UP��\�\�\�\�Y�/f�}f�p\�\�A�\�\�\�D>��\�69>X^\�Kj\�e�\�\�\"�8��p=B\��\�mB|\�|�5\�q\�<�X\�>G�ˌ!��6�-\�L#FMk^\�@\�\��\�\�|�k�qq�8o\07�a�\�\\m����i�M&�A�W��1C=��V@^A�~\�A��\��3��BT�=�Ǭy���\0ҩ��\n#\�|\�QH����B�\0���`�.u��\0\��\�q�]\�F�Cm��f\��9z�\n�\�5-��\��{��H\�c\���iA�=\�XGx��Q�\�����J5E�-\�`�\�\�Y#�5\�Z�1k$՛d�/ɿ�\�)\�\�Y\0\0\0\0IEND�B`�','Garage'),(15,4,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0\�IDATh\�\�{h�e\�?�\�\\�\�-\�\'\�J+����$*\�S3KR�`\�.l$\�],�\�\\�9��4jb�vA\�RQ3/�\�[j��\�\�ئ����\�\�w�\�\�8�\�?���\�\�<\�=\��=�\��c\��7kx;8���!z`B���� \�\�\'(\0M<��B|d�#�\n�O�*\�	�4�8���AX��L\n@W\nB|�A��\�%�8JRP�;B4��XvSl\�^\�G�\�#�P\�6�h\"�\�A\0�#��b�\0`4\�����\0�>lF�\�\�\0\�D&Wb��\0\0�\�	��f��LR�\�x�?\0�;\�-S\�Eɠ\�M\�Ք�\�댡_{F\0�2u��!a�!K}[�`++\� ����\�I\�TT\�0!D\rӬ�^\\FԲ�\�Ic!_s\����Z\�I�?\0� \�Ln<\�\�+ך;s&BL\r�aLa1E3�\�\Zx\'�hD�\�z0�j�8M:X�]OǑ\�4�A���\0��Ϻ�\�O�\�\'7\"D6I$\�E*���F\�^=!�\\\�\�2\��\Z\�\�z2�����\�]ć\r�\�&ר:D.\�\�\'�/�\�DG[�\�a�!��<jUX\�?o.B|\��U��dJ\�~\'x��X\�..G\����s��\�\�w�n�\��R��\�?\Z�X\�S@1UQ�\�0.�\���\�ş\�@\��澌bK\�\�I[@~\�]Wf\�:���go�<�\�)�G�5�\�n\�Pn@ԑGbĉ\Z\�꛾i�R\�\�\�\�0l\�BQ�n�;B,�ɼ�3j7��T\"ʉw���QbY��T�\��\"\�I�,^)9�h�91\�\�\�\�l�\�(:\�\�Ir�\�R\�Յ\�!\�y\�\�\�eD��\�\n�\�X\�\�\�1U{Z�b\�>a�\�rM���6^��G�0�Tǐ\�l!\����!�F፤q�;}v]�`3\�vC�D�\�2�\\�+\�G�D�P��rl\�b9�8\�cy��?G&qcXI#\"V\�DY�!\�\�\�z~�<f۞?B��=\�2\������Q\�\".y5�G\�0{�xx\�\�y	!\��-�(t}�ķ\�\�pc�����1��.����L\�z��F\�t�Qf\�2�Z;Y�R8��kM�h�MUy���\�\�!�\�m�-��\�Ƣ�c%�\�@:B�\��\�\�a�\\)!^323\�*Ӷ#�{e\��\���ּvm\���g-p��!��͈�@��\�#Ƙqf����4�!�\�؝�#��W�mR,8h��f��\�S+$�\��X���r\�H\�\�c;�\�<�\�4I�!�P\�&�\Z�]�Ǣ\�fJp�\�YrCS\�\�\�kY�\�\�\�6&�\�J\�\�2\�1]\�L*k\�C)\���at��u���\0�񞌲hv�\0\0\0\0IEND�B`�','Landscaping'),(16,4,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0wIDATh\�\�OHTQ\�:#\ZImZ���\�̪�!�\�&���A\�`�-��\�0&��E)�IDE�k�P�Cj�F��4\n����pZ\��:of�7��\���\�{��\��ͽ\�w怅�\�\Z@m\�8A���*o\�˸\�� �$f�Z��2\��\�2�\�m\�zB����j���\"�\���JB]70� �\0P\��p#/�\"Cff��\�n�0�O\��\�G�A�5�ھEgܻcᒵ�KY>\nx��,��Z:�-�\0?\�\nX\�b�\�!���\�+ \�\�.\�\na\�+�\�\�\0w�0x��TB\����/�k%�,��\�<\��\n�r\"\��W�e����q&\�\��m\�!��E�û�1��v�\�y\�3\�<\���\�\�\�\�ٛ- � Ls�\"\�	�i�0H��;\�7a�F\�3�F7\��(@���\�\�\�]�Cng\�\�G�\�w\�\'�\'\\�\�\�c�\�\�G\�\�\Z=<uD&�\�E�ψ`��z�F5\�\�?�p)5^{��ޏ2�\�Q,��\�9M�\�AZ�va#q���>�8\�X�o�N�\��@mpj\�\�QM�.>�EN\�A�\Z\�E�\�N\�qf	\0(a7�D9☉�i\�,�\�о\�짝v��I��4��\�\�;\"p�S4Q\�\�UD\�KG`�7�8�-�Y9a\�P{h\�WiWl\�rۖ�綼\�\n^�\��\�\�\��}\�\�\��\0\0\0\0IEND�B`�','Swimming pool'),(17,5,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0�IDATh\��Mh\0�߶\�Td%�V�V(T\�B� \�Ò\�C�\�!\�g\"ݢ�S\�� \�d��\�FDx�@� �:�\"���	\�MaM�yEӽ����\�ϔ)׺�uj�\�\�\�f��M�f����\�+��I��R\��h�\�| \"\"�\�Ԫ�\��Gm�(:.\"\�\r\�jP\�k\�\�,\"b�Y\"\�iΛeDD��AqȘA�4D��\�ѡ!�D0樈�\r\�%�_QQQ\�	\Zb��������4ĳ\"\"\"\"\"\":5\�\"*)))))�V\�K\Z�\���\�.�Q\�7Z\�݋\"Mw��xF�-sJī.�]\�IK\�\�be?�\�R\��Q�D�ܦ,\�O��/w+�(��\�|%bȃ�\�>\�EԢ涊�\�լtZ\�F56]Y\�n\�yYĀv5�A\�1\�Ӯ_\�\Z5���ݪ�w\�\�\"V�\�]\"~3a[��\�@\�L#\n�3$�Ѫb�]JJ�*�\�\"\">S�P\�)\�\�q��\�ED<�*\�\"\">V1_\�1\��Y\�-*>�AUZ<�G�-f��aD�5Cu�Ĉ6\�ۢG�\'���\�\"��ƽ\"����D�Tc��}j\�Q�:�g���\'\�T�\�E�n<�E��]�u�\�\�jsV\�sj�ŧ\"\�X\�J���6up�~���ѥ\�zKD�Y�,rXD��U\�8o��\�4$\"��_Ͷ_DD\��yj�\�:K]�_DDDDDؤ`L�u\�\��4}b\�\"�\�Ϗ�E�3\�]\�\�t�\"â\�4�ԪOĨN�+�\�<�{@D�i5)�ED���WD�6)w:i\��èS��9���\�檫;�\�{wh�m\"�i��\"vj�^��f��\�5\�\n+L�rm�\0؉\�\�S�U\0\0\0\0IEND�B`�','Light'),(18,5,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0\"IDATh\�\�=OTA�X�� ~`��4Z(�[�A��Zи��B\�D�d	\�*h\�jwc���&&��Ŭ�\���@\�&\��Zh&��\�\�\�H\�\�S�s\�d�\�̙\�9�7H�\Z�}J�*�\�L��&\�H�L����b�u�\�S\�\�A48�`!�le!���=�\0� \�b�AK�,y\0pH\0�g���\�g\�c����-�K�\���v\0fb�\�-d\r!f\�\0\�#D�\�2B\�{\0\�<��\0�`!V[\�\nB\�\�\�\'~�ܵ0�`\�&�2!!\�Y%o>\�\'\��l�\0�B�\�\�3�\'M&l\0\�R�e��\�yK\�\0��X\�ັc�\ZG�~�\r�\0�b,�\�ѫ.�\�s,�\�\�+:�\�\�wg�c��\�\�(\09��\�U\�`��\�\�t\�DL\�$�I�\�0�C�.\�9B�ۮ���\�v���.\�p\�X.\�`�~�ϸC�\�X��\�.���\�@�\\\�Ĵ.J6��܃OyA��,QA�a;\0g��\�9�Ӷ�TO\��\��\�\�\�,ӝ`���\�b2\�C��R\���\�M�\�m�{�\0\�o�m�u\�r�si��2m\�>lg\��dҼ.s����:\�Uvq��q\0\0\0\0IEND�B`�','Switch'),(19,5,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0$IDATh\�c`�`��Q\0\�2��|\�p�!\����\�g\"�\��c�J\'�\rj�\�7�\\=:Fx\�	]0\�k \�]S�\�\�\�F0\�\0\��e�g\���m�X�\�fhƢ\ZkX\�q�z�\�gØ6\�-�\�\�C8�\�\�0l�B��<\\`D��X\��\� ��\Z��KYrpMS02��}gPƙ\�L�Ul����b�@�\0C\Zj\�e�| k)X�)m��S\�\�˦�e��| K\r�zh\�\0&��@��`6n00\\��\�\�F`�B�\�\0�e�\�0��%A�\��:\��\n\\�\�<��\"AX�\�\�\�/�Z�D�9@\�Χ�Zp��\�@�.��Q�Q\"\�\0K��0\�&B\�c�d@@f\"$6!�C{��Di�\r�^\0Ev!�T\�\�J2�\�%ZD\�E1̄;�.�.��i\�\0/�\�8\�\\� ��YF\�ʈ�\��:V��L�\��&\�5H\\�6H��\r����l�M \�$��u�t��\�,\��:`�8\0>Ds\�5���Q��z���\�\�\0T\�ȡ\�Q��\�`��Q\0\0zо\�\�f*�\0\0\0\0IEND�B`�','Power outlet'),(20,5,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0\0IDATh\�\�ر\r� \�_S%0c�c��BK\����C\n�d�;��pe��\�t�γ�\�r�2\0\�e�2\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�h��mr%{��&%��dZy>��-ZW��f����	�\�A�`��h\�\\d�\�\r\0\0\0\0IEND�B`�','Satellite Tv'),(21,6,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0iIDATh\�\�=hA\�\�gB\����\�BL��\"!��\��\�G\Z��,�\�R�Ћ\��FPl\�R��$	-\�C<\�\�Jr�C����\�{7��\�\�\�do7\����߾\�\�߼�Y%\�a�\n\�X\�=0K�ָ���\��\�\���X6Pt#\��\�\�\�\Z(��\\\�sD�\�ȫ@1br\r�\�(RZ+r*T���U��@|cmHz 1`��v�|a��\�Fg��\�,���\�MA\r�/��[��\�\n��\����\�q�\�(\�\'���V�ʑ\�}�\08�C\��\05�;8D\�\�Y�*;&h \�1��1\�\Z�k\'�E~U�\�0M)\"5Jd�\�O��z\����Kӈ���g\r9o�~/u~�ۓ\�\�3\��\�\rd��p֐�\�L�#��>|֐/\�8�𕍞\\b��\�܀C\����\Z\�FH��E�D�d�~+\Z\��\�\�\�b�\�d���+Z���+�\�c�q>e��H�Ģ�]\rP/Gxcc�9�\�\�\��\�~8`ņ\Zb\nG�6Fպ^yutbk\�i\�:�\�	fl��ERwH/>���2�\�/\�\�k�W;i\���\�\"\\3\�P\�\�w�A\0�SS�#��Q�ѯ�!\�]O�?��_<d\r�[\���T\�]��\�\�\�!k=?�����.(\�s���\�c����/%d�3K\0\0\0\0IEND�B`�','Air conditioner'),(22,6,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0�IDATh\�\�;hTA���F]\"bT|,�F�H\na\�EQLP\�Q�E�B\�BA���I��₊c#Xh�(�5�A	\"q-$����\�\"��\�}e\�˽w��\�\�\��?s\�̝s!B�\"\�c7gY��j�!/�/^O��Ɓ`\�kh\�!.\�\�\'�d�\�#\��p.�\�PT\�i%�!c,�[<\�)�+�\\`��\�`A�\��>>(�\"wi�4�R�F�\�\��\�\�z�E&A�JK�\�s�\�%�WY/�=\�5�͟8���E�����\�HK7	��YI\�0\�ו�\�%��+�9\�IYl!#-�HS\�o��\�/���Z��E���a^\�\�-\�-��xcl�#V��Axg���@q�\�\�3B3꥝\�\�:�m٥�-f1� �\�GVӤ/��(�Җ=w�F^�U���\�4 $\�Io��X2G\�e�\�,q\����^���%��B<��\r4:�=�(��\�\�T\�\�Sf۰K�ZXð\�f�	@\�\�Gُ\�\\\�7p^�\��5�\��:�\r$�m�\Z8\�\�ɛ���#\�\��}קǨ\��\rWvEB<\'4#ti���\�\�x�_e\0�\�\�`_aSU\���5�g9@�#\Z�K,�\�o\�.�\r�.���\�_�mMx��:\�w=�&�4&�\�z\\�\�\�@%�\�dd�\�\r�x\n�h/�\�\�c��z^i],}\�\�1��*��\��� �\�w̺\0\0\0\0IEND�B`�','Wall'),(23,6,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0�IDATh\�\�OHQ\�?�+]��4+(�h��ܬJB!dy	<x�{<.^d\"�xܓ�Go\"�!��BH&���he�ؚ����3κf\�C�y���7�>�\�\�w&&&&&&Fq{D�Jf*�oeQ4���\���֍В:�i�;�S��J(\�xK5\0Edy<\�_ �N\�X��\�}��\�!�\n�\�\�\"\�S�4�\��\0\�1��R��0�%���\��\�\�\�G�W\�F�<Q?\'\�i��Y���\�Z.\��9g�@n6\�L\�WD?[\�\�1鴰��+�c�<BX��L�\�2�0O���A��\�\�<��<AX��,EO=�\�R��f\�\�\n\�{*�(�\�A�(P-�\�*�#X��d\�nP% p��#s^\�s�~~���b\n\�\�!��L<��0\�\�\�/�F\�\�\�G\�\�(��\"�ĭ\�\�<G�\�O\�:��A�\�bf�S]s��iQd\�NP	C�M \"h�r�	�/8T;�\�T�/�Q�\�\�\"��8�\�B�\�K~\�o�\�\�a9�TZװ�0�MQϧ�\rBP\�\Z�3@�\rzT�6\��U+���M4�Ʃ�\�	�bai�\�զ�Zv\"\�#*�y�����\�o\�Q�\�*p�A���8�p�g\�`a�\��	�\�4ɢ�v�oo\�$\�ޠ:@����I�:f\�. �iU\�>�ӊ?\�\�\�I\07�I.nZ�\��)3l�����E���\�\��4��C,�0�)Ư��H�Z�<,��\�\�Tܔҕ\�?)$�!\�W*R��R*`�M\�\�9�MX�Ϡǰ_,������\��\�\�\��\�\�\0\0\0\0IEND�B`�','Gutter'),(24,6,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0@\0\0\0@\0\0\0\0`�U\0\0\0bKGD\0���̿\0\0�IDATh\�\�\�?�TU\��J%,\Z\n\�c\�\���1�\�\'���P\��%���	\n\Z�,��&T$\�º[��`�A-d���K\�n�\�\�ƅ]V\�\�{6ι\�\�\��\���;��{\�yl`����ׄ9)ls&�\Z*~ę\������?#\�k.��a;L�\�%��W���\�q�i�J\�\�IѪd%\�_�.\�H��\�։\�{�E*\�MEϺ^t�\��Z��\�W9@s\�pЬ���u\0�\"~�̭8*��K�F\0F\�\�\�mo\���}��op@|oUs\0k\\�\�*m�\�\�\�\�\��S\�W�\\��n�9\��\�\�7EL�-]�y�\�\r�yy\�V��}\"~rL\�\�=�	�Ҥ{�\�\"^6*>�`��.{\�ߗ\�WxV�\�pP|�\��]�:?\�\�\�\�\�y�_\�6l\�\�>�\\�.8\�(�\��$ˤ\�kE�^�\�Ė�j���z>{n�yM��%�u����f\���\�\�8����>\�\�?�4\'޿\Z�\���\�ln\�0zQGL{\�V\�\�x\�~3b\�\�M%$��Xt�\�Cͦd/���9:\��\�8��TPe[�\0�Q}`\0�8i�[\'*\�������2�*\���Kio}Y�rB\�d	�����l����X}N\�\�]�Z[L\�i]U\�s\�T\�G�\�J��S(}�!�\�u��\�����\�ұl�-�߼\0\�\0��\���-gc|�O��]g�\�)\�L\�\�\0\0\0\0IEND�B`�','Geyser');
/*!40000 ALTER TABLE `ComplaintSubCategory` ENABLE KEYS */;
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