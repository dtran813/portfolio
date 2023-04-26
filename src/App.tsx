import React from 'react';
import { Hero } from './components';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  const mainRef = React.useRef(null);

  return (
    <>
      <Header />

      <main ref={mainRef} className="mainWrapper">
        <About />
      </main>
    </>
  );
}

export default App;
