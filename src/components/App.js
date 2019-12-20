import React from 'react';
import Header from "./Header";
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import SignUpPage from './signup/SignUpPage';
import LogInPage from './login/LogInPage';
import BusinessPage from './business/BusinessPage';
import FormPage from './form/FormPage';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={LogInPage} />
        <Route path="/b/:business_id" exact component={BusinessPage} />
        <Route path="/b/:business_id/:form_id" exact component={FormPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
