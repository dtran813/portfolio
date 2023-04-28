import { SectionWrapper } from '../../hoc';

function ContactSection() {
  return <div>Contact</div>;
}

const Contact = SectionWrapper(ContactSection, 'contact');

export default Contact;
