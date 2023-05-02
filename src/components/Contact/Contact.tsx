import styles from './Contact.module.css';
import React, { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';

function ContactSection() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = React.useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Duc Tran',
          from_email: form.email,
          to_email: import.meta.env.VITE_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          alert('Thank you. I will get back to you as soon as possible');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        error => {
          setIsLoading(false);

          console.error(error);

          alert('Something went wrong,');
        }
      );
  }

  return (
    <>
      <motion.div
        variants={slideIn('left', 'tween', 0.1, 0.75)}
        className={styles.wrapper}
      >
        <p className="sectionSubText">-Get In Touch-</p>
        <h2 className="sectionHeadText">Contact.</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={styles.inputText}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Your Email
            </label>
            <input
              required
              type="text"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john.doe@gmail.com"
              className={styles.inputText}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Your Message
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows={8}
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className={styles.textarea}
            />
          </div>

          <button type="submit" className={styles.btn}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </>
  );
}

const Contact = SectionWrapper(ContactSection, 'contact');

export default Contact;
