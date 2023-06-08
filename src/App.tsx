import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomeView from './views/WelcomeView';
import SignUpForm from './views/SignUpView';
import SurveyView from './views/TestResultsView';
import TestView from './views/TestView';
import PaymentSuccessView from './views/SuccessPaymentView';
import { MyContext } from './components/MyContext';
import PaymentFailureView from './views/FailurePaymentView';

function App() {
  const [myVariable, setMyVariable] = useState('');

  return (
    <MyContext.Provider value={{ myVariable, setMyVariable }}>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/test" element={<TestView />} />
        <Route path="/results" element={<SurveyView />} />
        <Route path="/payment/success" element={<PaymentSuccessView />} />
        <Route path="/payment/failure" element={<PaymentFailureView />} />
      </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
