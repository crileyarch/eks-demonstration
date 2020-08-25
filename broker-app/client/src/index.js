import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);  