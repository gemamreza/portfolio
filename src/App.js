import React from 'react';
import Header from '../src/components/header/header';
import About from '../src/components/about/about';
import Resume from '../src/components/resume/resume';
import Contact from '../src/components/contactus/contactus';
import Footer from '../src/components/footer/footer';
import propsHeader from '../src/components/header/propsHeader';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header propsHeader={propsHeader}/>
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
