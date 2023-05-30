import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomeView from './views/WelcomeView';
import SignUpForm from './components/SignupForm';
import SurveyView from './views/SurveyView';
import TestView from './views/TestView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/test" element={<TestView />} />
        <Route path="/results" element={<SurveyView />} />
      </Routes>
    </Router>
  );
}

export default App;
