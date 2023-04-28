import React from 'react';
import { Hero } from './components';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

function App() {
  const mainRef = React.useRef(null);

  return (
    <>
      <Header />

      <main ref={mainRef} className="mainWrapper">
        <About />
        <Experience />
      </main>
    </>
  );
}

export default App;
