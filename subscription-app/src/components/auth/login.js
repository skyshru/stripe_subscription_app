import React from 'react';

const Login = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Login to Your Account</h2>
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
        <button style={styles.loginButton}>Login</button>
        <p style={styles.signupLink}>New to MyApp? <a href="#">Sign Up</a></p>
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
  loginButton: {
    backgroundColor: '#1e4d91',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
    cursor: 'pointer',
  },
  signupLink: {
    marginTop: '15px',
  },
};

export default Login;
