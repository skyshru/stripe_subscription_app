import React from 'react';

const CurrentPlanActive = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.header}>
          <h2 style={styles.heading}>Current Plan Details &nbsp;</h2>
          <span style={styles.activeText}>Active</span>
          <span style={styles.cancelText}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cancel</span>
        </div>
        <p style={styles.plan}>Basic</p>
        <p style={styles.devices}>Phone + Tablet</p>
        <p style={styles.price}>₹‎ 2000/yr</p>
        <button style={styles.changePlanButton}>Change Plan</button>
        <p style={styles.message}>Your subscription has started on DATE, and will auto renew on Date.</p>
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
    
  },
  heading: {
    margin: 0,
  },
  activeText: {
    backgroundColor: '#c2dcfb',
    color: '#1e4d91',
    padding: '3px 6px',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#1e4d91',
    fontWeight: '12px',
    cursor: 'pointer',
    
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
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    padding: '8px 20px',
    borderRadius: '4px',
  },
};

export default CurrentPlanActive;
