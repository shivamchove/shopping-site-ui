-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for shopping-site
DROP DATABASE IF EXISTS `shopping-site`;
CREATE DATABASE IF NOT EXISTS `shopping-site` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `shopping-site`;

-- Dumping structure for table shopping-site.category
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `added_by` bigint(20) DEFAULT NULL,
  `added_on` date NOT NULL,
  `cate_desc` text DEFAULT NULL,
  `cate_name` text DEFAULT NULL,
  `is_active` bit(1) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `modified_on` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table shopping-site.category: ~6 rows (approximately)
DELETE FROM `category`;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`id`, `added_by`, `added_on`, `cate_desc`, `cate_name`, `is_active`, `modified_by`, `modified_on`) VALUES
	(1, 1, '2020-06-29', 'Clothes', 'Clothes', b'1', 1, '2020-06-29'),
	(2, 1, '2020-06-29', 'Footwear', 'Footwear', b'1', 1, '2020-06-29'),
	(3, 1, '2020-07-05', 'Electronic', 'Electronic', b'1', 1, '2020-07-05'),
	(4, 1, '2020-07-05', 'Toy', 'Toy', b'1', 1, '2020-07-05'),
	(5, 1, '2020-07-05', 'Home & Kitchen', 'Home & Kitchen', b'1', 1, '2020-07-05'),
	(6, 1, '2020-07-05', 'Furniture', 'Furniture', b'1', 1, '2020-07-05');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Dumping structure for table shopping-site.product
DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `added_by` bigint(20) DEFAULT NULL,
  `added_on` date NOT NULL,
  `cate_id` bigint(20) DEFAULT NULL,
  `is_active` bit(1) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `modified_on` date NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `product_desc` longtext DEFAULT NULL,
  `product_name` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table shopping-site.product: ~14 rows (approximately)
DELETE FROM `product`;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`id`, `added_by`, `added_on`, `cate_id`, `is_active`, `modified_by`, `modified_on`, `price`, `product_desc`, `product_name`) VALUES
	(1, 1, '2020-06-29', 1, b'1', 1, '2020-06-29', 10.20, 'This is good product', 'My Shirt'),
	(2, 1, '2020-06-29', 1, b'1', 1, '2020-06-29', 11.11, 'Test', 'Test'),
	(6, 0, '2020-07-06', 3, b'0', 0, '2020-07-06', 44.00, 'this is very nice mobile', 'Mobiel'),
	(7, 0, '2020-07-06', 1, b'0', 0, '2020-07-06', 12.23, 'Thi is very nice t-shirt', 'US Polo Asian T-Shirt'),
	(8, 0, '2020-07-06', 6, b'0', 0, '2020-07-06', 78.50, 'very good dining table', 'Dining table'),
	(9, 0, '2020-07-06', 5, b'0', 0, '2020-07-06', 1200.00, 'This is a fully automated washing machine', 'Washing Machine'),
	(10, 0, '2020-07-08', 3, b'0', 0, '2020-07-08', 800.00, 'This is very nice refridgerator', 'Refrigerator '),
	(11, 1, '2020-07-08', 3, b'0', 1, '2020-07-08', 23.90, 'this is very nice mobile', 'Samsung Mobile'),
	(12, 1, '2020-07-08', 1, b'1', 1, '2020-07-08', 12.20, 'Casual shirt by shiv', 'Casual Shirt'),
	(13, 1, '2020-07-08', 1, b'1', 1, '2020-07-08', 45.20, 'Casual shirt by shiv', 'Casual Shirt'),
	(14, 1, '2020-07-08', 1, b'1', 1, '2020-07-08', 78.30, 'This is full sleeves shirt for men', 'Casual Shirt full sleeves'),
	(15, 1, '2020-07-08', 1, b'1', 1, '2020-07-08', 23.90, 'this is very nice mobile', 'Casual Shirt full sleeves again'),
	(16, 1, '2020-07-08', 1, b'1', 1, '2020-07-08', 78.20, 'very nice shirt', 'Casual shirt half sleeves'),
	(17, 1, '2020-07-08', 1, b'1', 1, '2020-07-08', 898.00, 'test prod', 'test prod');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- Dumping structure for table shopping-site.product_image
DROP TABLE IF EXISTS `product_image`;
CREATE TABLE IF NOT EXISTS `product_image` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `added_by` bigint(20) DEFAULT NULL,
  `added_on` date NOT NULL,
  `image_desc` longtext DEFAULT NULL,
  `image_name` text DEFAULT NULL,
  `image_path` text DEFAULT NULL,
  `is_active` bit(1) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `modified_on` date NOT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6oo0cvcdtb6qmwsga468uuukk` (`product_id`),
  CONSTRAINT `FK6oo0cvcdtb6qmwsga468uuukk` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table shopping-site.product_image: ~7 rows (approximately)
DELETE FROM `product_image`;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` (`id`, `added_by`, `added_on`, `image_desc`, `image_name`, `image_path`, `is_active`, `modified_by`, `modified_on`, `product_id`) VALUES
	(1, 1, '2020-06-29', 'shirt image', 'image1.png', './product-images/', b'1', 1, '2020-06-29', 1),
	(5, 0, '2020-07-08', NULL, 'fridge1.jpg', '/product_images_folder/', b'1', 0, '2020-07-08', 10),
	(6, 0, '2020-07-08', NULL, 'fridge2.jpg', '/product_images_folder/', b'1', 0, '2020-07-08', 10),
	(7, 1, '2020-07-08', NULL, 'nature1.jpg', '/product_images_folder/', b'1', 1, '2020-07-08', 11),
	(8, 1, '2020-07-08', NULL, 'nature2.jpg', '/product_images_folder/', b'1', 1, '2020-07-08', 11),
	(9, 1, '2020-07-08', NULL, '17_fridge1.jpg', 'product_images_folder//', b'1', 1, '2020-07-08', 17),
	(10, 1, '2020-07-08', NULL, '17_fridge2.jpg', 'product_images_folder//', b'1', 1, '2020-07-08', 17);
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;

-- Dumping structure for table shopping-site.roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKkipq0epw9t7dv8j9bsmrg3wdg` (`user_id`),
  CONSTRAINT `FKkipq0epw9t7dv8j9bsmrg3wdg` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table shopping-site.roles: ~2 rows (approximately)
DELETE FROM `roles`;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `role`, `user_id`) VALUES
	(1, 'ROLE_ADMIN', 1),
	(2, 'ROLE_USER', 1);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Dumping structure for table shopping-site.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email_id` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table shopping-site.user: ~1 rows (approximately)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `email_id`, `first_name`, `last_name`, `password`, `username`) VALUES
	(1, 'admin@gmail.com', 'Shiv', 'Chove', '$2a$10$HLPKZWvIox3AI5ipmvcpgOd3JSKLN24a8B8GDdJyckDMuFF3FRnVe', 'admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
