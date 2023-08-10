import React, { useState } from 'react';
import './monthlyPlanPage.css'; // Import the CSS file for styling

const MonthlyPlanPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    { id: 'mobile', title: 'MOBILE', price: '100', videoQuality: 'Good', resolution: '480p', devices: ['Phone'] },
    { id: 'basic', title: 'BASIC', price: '200', videoQuality: 'Good', resolution: '480p', devices: ['Phone', 'Tablet'] },
    { id: 'standard', title: 'STANDARD', price: '500', videoQuality: 'Better', resolution: '1080p', devices: ['Phone', 'Tablet', 'Computer'] },
    { id: 'premium', title: 'PREMIUM', price: '700', videoQuality: 'Best', resolution: '4K+ HDR', devices: ['Phone', 'Tablet', 'Computer', 'TV'] },
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSwitchToggle = () => {
    setSelectedPlan(null); // Reset selected plan when toggling switch
    setIsYearly(!isYearly);
  };

  return (
    <div className="monthly-plan-page">
      <h2>Choose the right plan for you</h2>
      <div className="switch-container">
        <label className={`switch-label ${isYearly ? 'active' : ''}`}>Monthly</label>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={handleSwitchToggle} />
          <span className="slider round"></span>
        </label>
        <label className={`switch-label ${isYearly ? '' : 'active'}`}>Yearly</label>
      </div>
      <table className="plans-table">
        <thead>
          <tr>
            <th></th>
            {plans.map(plan => (
              <th key={plan.id} className={selectedPlan === plan.id ? 'selected' : ''}>
                {plan.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly price</td>
            {plans.map(plan => (
              <td key={plan.id}>₹{isYearly ? parseInt(plan.price) * 10 : plan.price}</td>
            ))}
          </tr>
          <tr>
            <td>Video quality</td>
            {plans.map(plan => (
              <td key={plan.id}>{plan.videoQuality}</td>
            ))}
          </tr>
          <tr>
            <td>Resolution</td>
            {plans.map(plan => (
              <td key={plan.id}>{plan.resolution}</td>
            ))}
          </tr>
          <tr>
            <td>Devices you can use to watch</td>
            {plans.map(plan => (
              <td key={plan.id}>{plan.devices.join(', ')}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <button className="next-button">Next</button>
    </div>
  );
};

export default MonthlyPlanPage;
