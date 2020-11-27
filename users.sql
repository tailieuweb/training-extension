-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 27, 2020 at 04:42 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `listsv`
--

DROP TABLE IF EXISTS `listsv`;
CREATE TABLE IF NOT EXISTS `listsv` (
  `id` int(11) NOT NULL,
  `mssv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `diemdanh` int(11) DEFAULT 5,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `listsv`
--

INSERT INTO `listsv` (`id`, `mssv`, `fullname`, `diemdanh`) VALUES
(1, '18211tt0001', 'Nguyen Van A', 1),
(2, '18211tt0002', 'Nguyen Van B', 1),
(3, '18211tt0003', 'Nguyen Van C', 0),
(4, '18211tt0004', 'Nguyen Van E', 0),
(5, '18211tt0005', 'Nguyen Van E', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_encode` text NOT NULL,
  `username` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_type` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image_profile` varchar(255) NOT NULL,
  `version` int(11) NOT NULL,
  `stt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `id_encode`, `username`, `fullname`, `email`, `user_type`, `password`, `image_profile`, `version`, `stt`) VALUES
(1, 'c4ca4238a0b923820dcc509a6f75849b', 'admin', 'Admin thinh', 'admin1@gmail.com', 'admin', 'c4ca4238a0b923820dcc509a6f75849b', 'admin_profile.png', 0, '0'),
(5, 'e4da3b7fbbce2345d7772b0674a318d5', 'thach', 'thach dong', 'dong@gmail.com', 'user', '59f2443a4317918ce29ad28a14e1bdb7', 'user_profile.png', 0, '0'),
(4, 'a87ff679a2f3e71d9181a67b7542122c', 'thinh', 'phuoc thinh', 'thinh@gmail.com', 'user', 'c4ca4238a0b923820dcc509a6f75849b', 'anh-anime-boy-dep-nhat_101905549.jpg', 0, '0'),
(7, '8f14e45fceea167a5a36dedd4bea2543', 'nguyenthinh', 'nguyen thinh', 'thinh123@gmail.com', 'user', '59f2443a4317918ce29ad28a14e1bdb7', '155474996-288-k789200.jpg', 0, '0'),
(8, 'c9f0f895fb98ab9159f51fd0297e236d', 'dong', 'dong abc', 'a1@gmail.com', 'user', '59f2443a4317918ce29ad28a14e1bdb7', 'anh-3d-anime-girl-ca-tinh_033448756.jpg', 0, '0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
