import React from 'react';
import Header from "./Header";
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import SignUpPage from './signup/SignUpPage';
import LogInPage from './login/LogInPage';
import BusinessPage from './business/BusinessPage';
import FormPage from './form/FormPage';
import SuccessPage from './form/SuccessPage';
import FormSubmissionsContainer from './history/FormSubmissionsContainer';
import FormSubmissionsDetails from './history/FormSubmissionsDetails';

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
        <Route path="/success" exact component={SuccessPage} />
        <Route path="/history" exact component={FormSubmissionsContainer} />
        <Route path="/history/:submission_id" exact component={FormSubmissionsDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
