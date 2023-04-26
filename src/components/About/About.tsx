import { SectionWrapper } from '../../hoc';

function About() {
  return (
    <>
      <div>Hello. About section</div>
    </>
  );
}

export default SectionWrapper(About, 'about');
