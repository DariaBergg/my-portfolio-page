import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_28fpss5', 'template_a47m4gr', form.current, {
          publicKey: 'yJdeMngK8mfIN-MVd',
        })
        .then(
          () => {
            console.log('Your email was sent!');
            alert('Your email was successfully sent!');
            form.current?.reset();
          },
          (error) => {
            console.log('Error ...', error.text);
          },
        );
    } else {
      console.log('Form is not available');
    }
  };

  return (
    <>
      <div className="contact-page">
        <div className="contact">
          <div className="contact-me">
            <h1>Contact me</h1>
          </div>
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="First-name">Name</label> <br />
              <input
                type="text"
                id="First-name"
                name="user_name"
                required
              />{' '}
              <br />
              <label htmlFor="Email">Email</label> <br />
              <input type="email" id="Email" name="user_email" required />
              <br />
              <label htmlFor="Message">Message</label> <br />
              <textarea
                className="message-style"
                id="Message"
                name="message"
                required
              />
              <br />
              <button className="submit-button" type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
