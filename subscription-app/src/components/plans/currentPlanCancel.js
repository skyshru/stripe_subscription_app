import React from 'react';

const CurrentPlanCancel = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.header}>
          <h2 style={styles.heading}>Current Plan Details &nbsp;</h2>
          <span style={styles.cancelText}>Cancelled</span>
        </div>
        <p style={styles.plan}>Basic</p>
        <p style={styles.devices}>Phone + Tablet</p>
        <p style={styles.price}>₹‎ 2000/yr</p>
        <button style={styles.changePlanButton}>Choose Plan</button>
        <p style={styles.message}>Your subscription was cancelled and you will loose access to services on Jul 11, 2023.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#1e4d91',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    width: '13cm',
    height: '7cm',
    textAlign: 'left',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1px',
  },
  heading: {
    margin: 0,
  },
  cancelText: {
    backgroundColor: '#f9f1ee',
    color: '#d78180',
    padding: '3px 6px',
    borderRadius: '5px',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  plan: {
    fontSize: '17px',
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: '3px',
    fontWeight: 'bold',
  },
  devices: {
    fontSize: '12px',
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: '8px',
  },
  price: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '10px',
  },
  changePlanButton: {
    backgroundColor: 'transparent',
    color: '#1e4d91',
    border: '2px solid #1e4d91',
    borderRadius: '5px',
    padding: '8px 20px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  message: {
    color: 'black',
    fontSize: '13px',
    marginTop: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    padding: '8px 20px',
    borderRadius: '4px',
    marginBottom: '10px'
  },
};

export default CurrentPlanCancel;
