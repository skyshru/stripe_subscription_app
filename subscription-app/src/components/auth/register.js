import React from 'react';


import { Link } from 'react-router-dom'; // Import Link from React Router

const Register = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Create Account</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input type="text" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input type="password" style={styles.input} />
        </div>
        <div style={styles.rememberMe}>
          <input type="checkbox" />
          <span style={styles.rememberLabel}>Remember me</span>
        </div>
        <Link to="/login"> {/* Use Link to navigate to the Login component */}
          <button style={styles.signupButton}>Sign Up</button>
        </Link>
        <p style={styles.loginLink}>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

// Styles remain unchanged




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
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
  },
  heading: {
    marginTop: 0,
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '10px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  rememberLabel: {
    marginLeft: '10px',
  },
  signupButton: {
    backgroundColor: '#1e4d91',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
    cursor: 'pointer',
  },
  loginLink: {
    marginTop: '15px',
  },
};

export default Register;
