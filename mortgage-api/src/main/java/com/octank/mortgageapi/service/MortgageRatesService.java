package com.octank.mortgageapi.service;

import com.octank.mortgageapi.models.MortgageRates;
import com.octank.mortgageapi.repository.MortgageRatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MortgageRatesService {

    private MortgageRatesRepository mortgageRatesRepository;

    @Autowired
    public MortgageRatesService(MortgageRatesRepository mortgageRatesRepository){
        this.mortgageRatesRepository = mortgageRatesRepository;
    }

    public Iterable<MortgageRates> getMortgageRates(){



        return mortgageRatesRepository.findAll();
    }

}
