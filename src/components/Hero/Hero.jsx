import React from 'react';
import heroImage from '../../assets/02.jpg'; // Adjust path if needed

const Hero = () => (
  <section style={styles.section}>
    <img src={heroImage} alt="Hero" style={styles.image} />
    <div style={styles.text}>
      <h2>WHAT WE DO ?</h2>
      <p>There might be a Criminal matter or Civil Matter.
         Aimed to provide the best criminal lawyer in Mumbai to bring you out 
         to relieve you of the charges. FatShe Lawyers have unique case to case think tank resources.
          Check the quality description in the best law firms in Mumbai web page. For this Reason people trust us.</p>
    </div>
  </section>
);

const styles = {
  section: {
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

export default Hero;

// const styles = {
//   section: { display: 'flex', gap: '20px', padding: '20px' },
//   image: { width: '50%', background: '#ccc', height: '200px' }
// };

// export default Hero;