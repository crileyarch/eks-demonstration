CREATE SCHEMA `rates` ;
CREATE TABLE `mortgage_rates` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `loan_type` varchar(255) DEFAULT NULL,
  `rate` varchar(255) DEFAULT NULL,
  `rate_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
