CREATE TABLE `ratingsAgencies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerId` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `experianCreditScore` varchar(45) DEFAULT NULL,
  `transunionCreditScore` varchar(45) DEFAULT NULL,
  `equifaxCreditScore` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
SELECT * FROM credit.ratingsAgencies;

#SANDBOX
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('4444','FICO Scores','770','705','756');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('1111','FICO Scores','650','650','680');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('2222','FICO Scores','701','675','712');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('3333','FICO Scores','500','525','560');
#TESTING
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('0133','FICO Scores','770','705','756');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('1992','FICO Scores','641','650','680');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('5415','FICO Scores','701','700','712');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('2251','FICO Scores','699','686','671');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('5050','FICO Scores','713','705','721');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('1844','FICO Scores','654','671','670');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('2311','FICO Scores','800','810','813');
insert into credit.ratingsAgencies(customerId,description,experianCreditScore,transunionCreditScore,equifaxCreditScore) values ('7711','FICO Scores','699','689','691');