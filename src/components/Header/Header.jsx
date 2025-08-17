import React from 'react';
import logo from '../../assets/logo.png'; 

const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.title}>THE LAWYERS ASSOCIATION</h1>
    <div style={styles.row}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <nav style={styles.nav}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Layers</a>
        <a href="#">Cases</a>
      </nav>
    </div>
  </header>
);

const styles = {
  header: {
    //padding: '20px',
   
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: '48px',
    padding: '30px',
     backgroundColor: '#063077ff',
    marginBottom: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: '120px',
    width: 'auto',
  },
  nav: {
    
    display: 'flex',
    gap: '25px',
    
  },
};

export default Header;