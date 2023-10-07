-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2022 at 02:17 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sabzlearn_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(100) NOT NULL,
  `firstname` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `username` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `task` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `img` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `token` varchar(100) COLLATE utf8_persian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `firstname`, `lastname`, `username`, `password`, `task`, `img`, `token`) VALUES
(1, 'محمدامین', 'سعیدی راد', 'amin_saeedi', 'react2020', 'برنامه نویس فرانت اند', 'img/saeedi.jpeg', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'),
(2, 'قدیر', 'یلمه', 'q_yolme', 'q_909012_yolme', 'برنامه نویس پایتون', 'img/yolme.jpg', 'G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'),
(3, 'ساسان', 'مقدس', 'sasan_mqds', 'sa_ds12', 'دیجیتال مارکتر', 'img/sasan.avif', 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(100) NOT NULL,
  `title` varchar(100) COLLATE utf8_persian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(1, 'گوشی'),
(2, 'لپتاپ'),
(3, 'عمومی');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(100) NOT NULL,
  `body` text COLLATE utf8_persian_ci NOT NULL,
  `date` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `hour` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `userID` int(100) NOT NULL,
  `productID` int(100) NOT NULL,
  `is-reply` int(10) NOT NULL,
  `reply-id` int(100) NOT NULL,
  `isAccept` int(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `body`, `date`, `hour`, `userID`, `productID`, `is-reply`, `reply-id`, `isAccept`) VALUES
(1, 'سلام، من از این محصول رضایت کافی رو دارم', '1401-07-12', '12:01', 2, 7, 0, 0, 0),
(2, 'سلام، متاسفانه کیفیت کافی رو نداشت', '1401-06-19', '18:09', 3, 2, 0, 0, 0),
(3, 'این محصول خیلی خوب بود. ممنون از سایت خوبتون', '1401-07-01', '01:19', 1, 3, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `offs`
--

CREATE TABLE `offs` (
  `id` int(100) NOT NULL,
  `code` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `percent` int(100) NOT NULL,
  `adminID` int(100) NOT NULL,
  `productID` int(100) NOT NULL,
  `date` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `isActive` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(100) NOT NULL,
  `productID` int(100) NOT NULL,
  `userID` int(100) NOT NULL,
  `date` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `hour` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `price` bigint(20) NOT NULL,
  `off` int(100) NOT NULL,
  `sale` bigint(20) NOT NULL,
  `popularity` int(100) NOT NULL,
  `count` bigint(20) NOT NULL,
  `sale_count` bigint(20) NOT NULL,
  `isActive` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `title` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `price` int(100) NOT NULL,
  `count` int(100) NOT NULL,
  `img` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `popularity` int(100) NOT NULL,
  `sale` int(100) NOT NULL,
  `colors` int(100) NOT NULL,
  `productDesc` text COLLATE utf8_persian_ci NOT NULL,
  `url` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `categoryID` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `count`, `img`, `popularity`, `sale`, `colors`, `productDesc`, `url`, `categoryID`) VALUES
(1, 'شارژر Type-C', 90000, 102, '/img/charger.jpeg', 89, 12000000, 3, 'شارژر Type-C لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'charget-type-c', 1),
(2, 'هندزفری بلوتوثی', 139000, 90, '/img/head.jpeg', 90, 18980000, 4, 'هندزفری بلوتوثی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'headset', 1),
(3, 'تیشرت مشکی', 290000, 129, '/img/tshirt.jpeg', 82, 9100000, 1, 'تیشرت مشکی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'black-tshirt', 3),
(4, 'هدفون', 300000, 91, '/img/headphone.jpeg', 96, 8912200, 5, 'هدفون لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'headphone', 2),
(5, 'آیفون 13', 32000000, 35, '/img/iphone.jpeg', 84, 231000000, 3, 'آیفون 13 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'iphone13', 1),
(6, 'روغن اویلا', 78000, 900, '/img/oil.jpeg', 76, 17000000, 1, 'روغن اویلا لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'oila-oil', 3),
(7, 'صابون گلنار', 56000, 313, '/img/soap.jpeg', 83, 19782000, 1, 'صابون گلنار لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n', 'golnar-soap', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `firsname` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `username` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `phone` bigint(20) NOT NULL,
  `city` varchar(50) COLLATE utf8_persian_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_persian_ci NOT NULL,
  `address` text COLLATE utf8_persian_ci NOT NULL,
  `score` int(100) NOT NULL,
  `buy` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firsname`, `lastname`, `username`, `password`, `phone`, `city`, `email`, `address`, `score`, `buy`) VALUES
(1, 'علیرضا', 'احمدی', 'alireza_ahmdi19', '19901432', 9129872314, 'تهران', 'alireza@gmail.com', 'تهران - خیابان فلان - کوچه فلان', 98, 9000000),
(2, 'حسین', 'محمدی', 'hosyn_mmdi', 'ho3ein_12', 9921558293, 'تبریز', 'ho3ein@gmail.com', 'تبریز - خیابان فلان - کوچه فلان', 31, 12000000),
(3, 'علی', 'حسینی', 'ali_9001', 'ali190012', 9943287617, 'شیراز', 'ali@gmail.com', 'شیراز - خیابان فلان - کوچه فلان', 28, 8541000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productID` (`productID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `offs`
--
ALTER TABLE `offs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adminID` (`adminID`),
  ADD KEY `productID` (`productID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productID` (`productID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryID` (`categoryID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `offs`
--
ALTER TABLE `offs`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `offs`
--
ALTER TABLE `offs`
  ADD CONSTRAINT `offs_ibfk_1` FOREIGN KEY (`adminID`) REFERENCES `admins` (`id`),
  ADD CONSTRAINT `offs_ibfk_2` FOREIGN KEY (`productID`) REFERENCES `products` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
