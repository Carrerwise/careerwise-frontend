import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import WelcomeView from './views/WelcomeView';
import SelectRolePageView from './views/SelectRolePageView';

import SignUpForm from './views/SignUpView';
import SurveyView from './views/TestResultsView';
import TestView from './views/TestView';
import PaymentSuccessView from './views/SuccessPaymentView';
import { MyContext } from './contexts/MyContext';
import PaymentFailureView from './views/FailurePaymentView';
import LoginFacultyAdmin from './views/LoginFacultyAdmin';
import SignUpFacultyAdmin from './views/SignUpFacultyAdmin';
import AdminDashboard from './views/AdminDashboard';
import BoostCareerPage from './views/BoostCareerView';


const App: React.FC = () => {
  const [myVariable, setMyVariable] = useState('');

  return (
    <MyContext.Provider value={{ myVariable, setMyVariable }}>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/select-role" element={<SelectRolePageView />} />
        <Route path="/login/faculty" element={<LoginFacultyAdmin />} />
        <Route path="/signup/faculty" element={<SignUpFacultyAdmin />} />
        <Route path="/faculty" element={<AdminDashboard />} />
        <Route path="/boost-career/:careerId" element={<BoostCareerPage />} />
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
