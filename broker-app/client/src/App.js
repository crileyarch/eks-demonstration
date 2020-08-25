import React from 'react';
import Header from './Header';
import RatesList from './RatesList';
import CreditCheck from './CreditCheck';
import DisplayEnv from './DisplayEnv';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


const App = () => {
    return (
    <div className="container">
        <AmplifySignOut />
        <br />
        <Header />
        <br />
        <RatesList />
        <br />
        <CreditCheck />
        <br />
        <DisplayEnv />
    </div>
    );
}

export default withAuthenticator(App);