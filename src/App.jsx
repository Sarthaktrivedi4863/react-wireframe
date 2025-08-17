import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Feature from './components/Feature/Feature';
import Team from './components/Team/Team';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

//

function App() {
  return (
    <>
    <hr />
      <Header />
      <hr />
      <br />
      <Hero />
      <hr />
      <br />
      <Feature />
      <hr />
      <Team />
      <hr />
      <br />
      <CTA />
      <br /><hr /><br />
      <Footer />
      <br /><hr />
    </>
  );
}

export default App;