import React from 'react';
import {
  About,
  Experience,
  Header,
  Project,
  Technology,
  Contact,
} from './components';

function App() {
  const mainRef = React.useRef(null);

  return (
    <>
      <Header />

      <main ref={mainRef} className="mainWrapper">
        <About />
        <Experience />
        <Project />
        <Technology />
        <Contact />
      </main>
    </>
  );
}

export default App;
