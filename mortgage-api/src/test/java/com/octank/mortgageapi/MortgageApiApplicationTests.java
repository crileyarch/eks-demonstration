package com.octank.mortgageapi;

import com.octank.mortgageapi.models.MortgageRates;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class MortgageApiApplicationTests {

	private final MortgageRates rates = new MortgageRates(new Long(2222), "HOME", "5/1 ARM", new Date(), "3.75%");


	@Test
	void getMortgageRate() {
		assertEquals("3.75%", rates.getRate());
	}

	void getMortgageProduct(){
		assertEquals("5/1 ARM", rates.getDescription());
	}

	void getLoanType(){
		assertEquals("HOME", rates.getLoanType());
	}


}
