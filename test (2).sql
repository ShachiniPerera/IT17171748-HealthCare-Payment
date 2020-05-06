-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 09:26 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `docpayment`
--

CREATE TABLE `docpayment` (
  `PaymentID` int(20) NOT NULL,
  `Paymentcode` varchar(20) NOT NULL,
  `DocID` varchar(20) NOT NULL,
  `DocName` varchar(20) NOT NULL,
  `PaymentType` varchar(20) NOT NULL,
  `Amount` varchar(20) NOT NULL,
  `DateOfPayed` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `docpayment`
--

INSERT INTO `docpayment` (`PaymentID`, `Paymentcode`, `DocID`, `DocName`, `PaymentType`, `Amount`, `DateOfPayed`) VALUES
(7, '701', 'Doc02', 'Kalana', 'C', '2000', '2020/09/02'),
(9, '888', 'Doc04', 'Hettihewa.R', 'C', '200000', '2020/07/05'),
(11, 'P01', 'DOC20', 'L.K.Perera', 'C', '2000.0', '2020'),
(12, '1100', 'Doc34', 'Perera.W.S.K', 'C', '2000.0', '2020-03-07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `docpayment`
--
ALTER TABLE `docpayment`
  ADD PRIMARY KEY (`PaymentID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `docpayment`
--
ALTER TABLE `docpayment`
  MODIFY `PaymentID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
