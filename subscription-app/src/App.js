import React from 'react';
import Register from './components/auth/register'; // Import the Register component
import Login from './components/auth/login';
import MonthlyPlanPage from './components/plans/monthyPlan';
import CompletePayment from './components/CompletePayement/completePayement';
import CurrentPlanActive from './components/plans/currentPlanActive';
import CurrentPlanCancel from './components/plans/currentPlanCancel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch

function App() {
  return (
    <div className="App">
      {/* Render the Register component */}
      
      <MonthlyPlanPage/>
    </div>
  );
}

export default App;
