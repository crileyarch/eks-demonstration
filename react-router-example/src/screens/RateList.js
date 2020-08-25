import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default (props) => {

    const [rates, setRates] = useState([]);

    const fetchRates = async () => {
        const res = await axios.get(`${window.ENV.MORTGAGE_API_URL}`)
        .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
          });
        setRates(res.data);
        
    };

    useEffect(() => {
        fetchRates();
    }, []);
    
     
    const renderedRates = Object.values(rates).map(rate => {

        return(
                <tr>
                    <td>{rate.loanType}</td>
                    <td>{rate.description}</td>
                    <td>{rate.rateDate}</td>
                    <td>{rate.rate}</td>
                </tr>
        );
    });

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Current Mortgage Rates</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Loan Type</th>
                            <th>Description</th>
                            <th>Rate Date</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedRates}
                    </tbody>
                </table>
            </div>
        </div>
    
    );
};