import React from 'react';
//import settings from '../public/config';

export default () => {

    return (<div className="card">
    <div className="card-body">
        <h4 className="card-title">Application Environment Details</h4>
        <table className="table">
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Environment</td>
                    <td>{window.ENV.ENVIRONMENT}</td>
                </tr>
                <tr>
                    <td>Credit Rating API URL</td>
                    <td>{window.ENV.CREDIT_API_URL}</td>
                </tr>
                <tr>
                    <td>Mortgage Rates API URL</td>
                    <td>{window.ENV.MORTGAGE_API_URL}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
);

};