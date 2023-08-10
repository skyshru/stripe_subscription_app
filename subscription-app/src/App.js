import React from 'react';
import Register from './components/auth/register'; // Import the Register component
import Login from './components/auth/login';
import MonthlyPlanPage from './components/plans/monthyPlan';
function App() {
  return (
    <div className="App">
      {/* Render the Register component */}
      
      <MonthlyPlanPage/>
    </div>
  );
}

export default App;
