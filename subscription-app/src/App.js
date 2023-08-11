import React from 'react';
import Register from './components/auth/register'; // Import the Register component
import Login from './components/auth/login';
import MonthlyPlanPage from './components/plans/monthyPlan';
import CompletePayment from './components/CompletePayement/completePayement';
import CurrentPlanActive from './components/plans/currentPlanActive';
import CurrentPlanCancel from './components/plans/currentPlanCancel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/monthly-plan" component={MonthlyPlanPage} />
          <Route path="/complete-payment" component={CompletePayment} />
          <Route path="/current-plan-active" component={CurrentPlanActive} />
          <Route path="/current-plan-cancel" component={CurrentPlanCancel} />
          {/* Add other routes here */}
        </Routes>
        <Register/>
      </div>
    </Router>
  );
}

export default App;





