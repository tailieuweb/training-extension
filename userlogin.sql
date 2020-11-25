-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 24, 2020 lúc 07:25 AM
-- Phiên bản máy phục vụ: 10.4.6-MariaDB
-- Phiên bản PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `userlogin`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `autocheck`
--

CREATE TABLE `autocheck` (
  `id` int(11) NOT NULL,
  `mssv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `custom_id` varchar(255) NOT NULL,
  `mssv` varchar(200) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_type` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image_profile` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `custom_id`, `mssv`, `username`, `fullname`, `email`, `user_type`, `password`, `image_profile`) VALUES
(2, 'c81e728d9d4c2f636f067f89cc14862c1603719914', '18211TT1924', 'admin', 'Pháº¡m VÄƒn Hiá»‡u', 'vanhieutdc6@gmail.com', 'admin', 'c4ca4238a0b923820dcc509a6f75849b', 'vkjfsb8xnzhg9mdac7271536492icon-facebook.png'),
(4, 'a87ff679a2f3e71d9181a67b7542122c1603719914', '18211TT1924', 'nguyenducduy', 'Nguyá»…n Äá»©c Duy', 'nguyenducduy@gmail.com', 'user', 'c4ca4238a0b923820dcc509a6f75849b', 'mgcxksvza7jhnf9bd87581514483-bang-gia-can-ho-diamond-riverside-quan-8-chinh-sach-thanh-toan-2020.png'),
(5, 'e4da3b7fbbce2345d7772b0674a318d51603719914', '18211TT1949', 'huynhdailong', 'Huá»³nh Äáº¡i Long', 'huynhdailong@gmail.com', 'user', 'c4ca4238a0b923820dcc509a6f75849b', 'cb9kzhg7avfjnmxds8140749435download.jpg'),
(1, 'e4da3b7fbbce2345d7772b0674a318d516037dsadsadsadsa', '18211TT0435', 'phamvanhieu', 'Pháº¡m VÄƒn Hiá»‡u', 'phamvanhieu@gmail.com', 'user', 'c4ca4238a0b923820dcc509a6f75849b', '7d9kvjazxshbm8fncg504278615Thegioididong-icon.png'),
(3, 'e4da3b7fbbce2345d7772b0674a3sadsada', '18211TT5624', 'levantrung', 'Le Van trung', 'levantrung@gmail.com', 'user', 'c4ca4238a0b923820dcc509a6f75849b', 'cs78dgabnzxvfjkmh95516925big-pk-800-300-800x300.png');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `autocheck`
--
ALTER TABLE `autocheck`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `autocheck`
--
ALTER TABLE `autocheck`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
