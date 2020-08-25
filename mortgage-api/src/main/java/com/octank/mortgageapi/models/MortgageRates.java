package com.octank.mortgageapi.models;

import net.bytebuddy.dynamic.loading.InjectionClassLoader;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class MortgageRates {



    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String loanType;
    private String description;

    @CreatedDate
    private Date rateDate;

    private String rate;

    //private MortgageRates(){}
    public MortgageRates(){}

    public MortgageRates(Long id, String loanType, String description, Date rateDate, String rate){
        this.id = id;
        this.loanType = loanType;
        this.description = description;
        this.rateDate = rateDate;
        this.rate = rate;
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getLoanType() {
        return loanType;
    }

    public void setLoanType(String loanType) {
        this.loanType = loanType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getRateDate() {
        return rateDate;
    }

    public void setRateDate(Date rateDate) {
        this.rateDate = rateDate;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

}
