import React from 'react';
import Image from '../../assets/03.jpg';
const Feature = () => (
  <section style={styles.section}>
     
    <div style={styles.text}>
      <h2>WHAT CUSTOMERS SAYS ABOUT OUR BEST SERVIXES ?</h2>
      <p>In a cheque Bounce case, which I felt, was weak, well contested, focused the main points and resulted in my acquittal. I had 5% hope, and 95% I thought to have lost the case. FatShe Lawyers are the best.</p>
    <p></p>
    </div>
    <img src={Image} alt="Hero" style={styles.image} />
   </section>
);

// const styles = {
//   section: { display: 'flex', justifyContent: 'space-between', padding: '20px' },
//   image: { width: '50%', background: '#ccc', height: '200px' }
// };

const styles = {
  section: {
    //margin:'50px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  text: {
    maxWidth: '500px',
  },
};

export default Feature;