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
  
    // Remove the selected class from all td elements
    const tds = document.querySelectorAll('.plans-table td');
    tds.forEach(td => td.classList.remove('selected-column'));
  
    // Add the selected class to the corresponding td elements
    const selectedColumn = document.querySelectorAll(`.${planId}-column`);
    selectedColumn.forEach(td => td.classList.add('selected-column'));
  };
  

  const handleSwitchToggle = () => {
    setSelectedPlan(null); // Reset selected plan when toggling switch
    setIsYearly(!isYearly);
  };

  return (
    <div className="monthly-plan-page">
      <h2>Choose the right plan for you</h2>
      <div className="switch-container">
        <div className="switch-labels">
          <label className={`switch-label ${isYearly ? 'active' : ''}`} onClick={() => setIsYearly(false)}>Monthly</label>
          <label className="switch">
            <input type="checkbox" checked={isYearly} onChange={handleSwitchToggle} />
            <span className="slider round"></span>
          </label>
          <label className={`switch-label ${isYearly ? '' : 'active'}`} onClick={() => setIsYearly(true)}>Yearly</label>
        </div>
        <div className="plan-options">
  {plans.map(plan => (
    <div
      key={plan.id}
      className={`plan-box ${selectedPlan === plan.id ? 'selected' : ''} ${plan.id}`}
      onClick={() => handlePlanSelect(plan.id)}
    >
      {plan.title}
    </div>
  ))}
</div>

      </div>
      <table className="plans-table">
        <tbody>
          <tr>
            <td>Monthly price</td>
            {plans.map(plan => (
              <td key={plan.id} className={`${selectedPlan === plan.id ? 'selected' : ''}`}>
                ₹{isYearly ? parseInt(plan.price) * 12 : plan.price}
              </td>
            ))}
          </tr>
          <tr>
  <td>Monthly price</td>
  {plans.map(plan => (
    <td
      key={plan.id}
      className={`${selectedPlan === plan.id ? 'selected' : ''} ${plan.id}-column`}
    >
      <span className="price">
        ₹{isYearly ? parseInt(plan.price) * 10 : plan.price}
      </span>
    </td>
  ))}
</tr>

          <tr>
            <td>Resolution</td>
            {plans.map(plan => (
              <td key={plan.id} className={`${selectedPlan === plan.id ? 'selected' : ''}`}>
                {plan.resolution}
              </td>
            ))}
          </tr>
          <tr>
            <td>Devices you can use to watch</td>
            {plans.map(plan => (
              <td key={plan.id} className={`${selectedPlan === plan.id ? 'selected' : ''}`}>
                <ul className="devices-list">
                  {plan.devices.map(device => (
                    <li key={device}>{device}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <button className="next-button">Next</button>
    </div>
  );
};

export default MonthlyPlanPage;
