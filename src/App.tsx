import {
  About,
  Experience,
  Header,
  Project,
  Technology,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Experience />
        <Technology />
        <Project />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
