import React from 'react';
import './App.css';
import AnimationSection from './components/AnimationSection';
import WhyDrop2Fill from './components/WhyDrop2Fill';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AnimationSection />
      <WhyDrop2Fill />
      <Footer />
    </div>
  );
}

export default App;
