import React from 'react';

const CTA = () => (
  <section style={styles.section}>
    <h2 style={styles.heading}>GET IN TOUCH</h2>
    <p style={styles.subtext}>We’d love to hear from you. Fill out the form below.</p>
    <form style={styles.form}>
      <input type="text" placeholder="Your Name" style={styles.input} />
      <input type="email" placeholder="Your Email" style={styles.input} />
      <textarea placeholder="Your Message" style={styles.textarea}></textarea>
      <button type="submit" style={styles.button}>Send Message</button>
    </form>
  </section>
);

const styles = {
  section: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#2b275bff',
    color: '#fff',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  subtext: {
    marginBottom: '30px',
    fontSize: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#f8f8f8ff',
    color:'black',
    borderRadius: '4px',
    border: 'none',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    color:'black',
    backgroundColor: '#f8f8f8ff',
    border: 'none',
    minHeight: '100px',
    resize: 'vertical',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#062443ff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default CTA;