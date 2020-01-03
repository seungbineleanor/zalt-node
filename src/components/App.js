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
import SettingsPage from './settings/SettingsPage';
import PrivateRoute from './PrivateRoute';
import SharedPage from './shared/SharedPage';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={LogInPage} />
        <PrivateRoute path="/b/:business_id" exact component={BusinessPage} />
        <PrivateRoute path="/b/:business_id/:form_id" exact component={FormPage} />
        <PrivateRoute path="/success" exact component={SuccessPage} />
        <PrivateRoute path="/history" exact component={FormSubmissionsContainer} />
        <PrivateRoute path="/history/:submission_id" exact component={FormSubmissionsDetails} />
        <PrivateRoute path="/settings" exact component={SettingsPage} />
        <Route path="/shared" exact component={SharedPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
