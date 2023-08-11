import React from 'react';
import './completePayment.css';

const CompletePayment = () => {
  return (
    <div className="complete-payment-page">
      <div className="payment-container">
        <div className="payment-section payment-details">
          <h2>Complete Payment</h2>
          <p className="subtext">Enter your credit or debit card details below</p>
          <button className="confirm-button">Confirm Payment</button>
        </div>
        <div className="payment-section order-summary">
          <h3>Order Summary</h3>
          <p><span className="summary-label">Plan Name:</span> [Selected Plan]</p>
          <p><span className="summary-label">Billing Cycle:</span> [Selected Cycle]</p>
          <p><span className="summary-label">Plan Price:</span> [Price]</p>
        </div>
      </div>
    </div>
  );
};

export default CompletePayment;
