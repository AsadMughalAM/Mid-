import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import React from 'react';
import Card from './components/Card/Card';
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <div className="app">
      <div className="card-row">
        <Card
          title="Card 1"
          subtitle="Subtitle 1"
          image={'src/components/assets/p2.jpg'}
          description="Description 1"
        />
        <Card
          title="Card 2"
          subtitle="Subtitle 2"
      image={'src/components/assets/p3.jpg'}
          description="Description 2"
        />
        <Card
          title="Card 3"
          subtitle="Subtitle 3"
          image={'src/components/assets/pi.jpg'}
          description="Description 3"
        />
      </div>
    </div>
    <Footer />

    </>
  );
}

export default App;
