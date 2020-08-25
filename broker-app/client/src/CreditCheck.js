import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import settings from '../public/config';

export default (props) => {
    const [scores, setScores] = useState({});
    const fetchScores = async () => {
        var customerId = '3333';
        const res = await axios.get(`${window.ENV.CREDIT_API_URL}/${customerId}`)
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
        setScores(res.data);
    };

    useEffect(() => {
        fetchScores();
    }, []);


    return(
        <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Credit Ratings</h4>
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Customer Id</th>
                              <th>Experian Score</th>
                              <th>Equifax Score</th>
                              <th>TransUnion Score</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td>{scores.lastFourSSN}</td>
                                <td>{scores.experianCreditScore}</td>
                                <td>{scores.equifaxCreditScore}</td>
                                <td>{scores.transUnionCreditScore}</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
    )
};