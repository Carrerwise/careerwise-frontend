import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import WelcomeView from './views/WelcomeView';
import SignUpForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
