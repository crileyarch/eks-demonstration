package com.octank.mortgageapi.controller;

import com.octank.mortgageapi.models.MortgageRates;
import com.octank.mortgageapi.service.MortgageRatesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MortgageController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private MortgageRatesService mortgageRatesService;

    @Autowired
    public MortgageController(MortgageRatesService mortgageRatesService){
        this.mortgageRatesService = mortgageRatesService;
    }



    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/rates", method = RequestMethod.GET)
    public Iterable<MortgageRates> getRates(){
        logger.info("In getRates()");
        return mortgageRatesService.getMortgageRates();
    }

}
