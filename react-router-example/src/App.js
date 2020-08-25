import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RateList from './screens/RateList';
import Header from './screens/Header';
import DisplayEnv from './screens/DisplayEnv';
import CreditRating from './screens/CreditRating';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


const  App = ()  => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <AmplifySignOut />
                    <Header />
                    <br />
                    <Route path="/" exact component={DisplayEnv} />
                    <Route path="/rates" component={RateList} />
                    <Route path="/credit" component={CreditRating} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default withAuthenticator(App);