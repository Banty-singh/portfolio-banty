import React from 'react';
import './Contact.css';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import mail from '../../assets/mail.png';
import insta from '../../assets/insta.png';

import { useForm } from 'react-hook-form';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const delay = (d) => new Promise((resolve) => {
    setTimeout(resolve, d * 1000);
  });

  const onSubmit = async (data) => {
    setResult('Sending...');
    await delay(2);

    const formData = new FormData();
    formData.append('access_key', '08ec9b76-59b8-47d6-b0a6-7f9de0342b0c');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    if (result.success) {
      setResult('Form Submitted Successfully ✅');
      reset();
    } else {
      console.error('Error:', result);
      setResult(result.message);
    }
  };

  return (
    <>
    <div id='contact'>
    <section className="contact-wrapper">
      <div className="contact-left">
        <h1>Contact Me ☎️</h1>
        <p>Let's collaborate or just have a chat. My inbox is always open.</p>
        <p><strong>Phone:</strong> +91 8797853026</p>
        <p><strong>Email:</strong> bantysingh4754@gmail.com</p>
        <div className="icon">
          <img src={linkedin} alt="LinkedIn" />
          <img src={github} alt="GitHub" />
          <img src={mail} alt="Email" />
          <img src={insta} alt="Instagram" />
        </div>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Name"
            {...register('name', {
              required: 'Please enter your name',
              maxLength: { value: 20, message: 'Name must be under 20 characters' }
            })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}

          <input
            type="email"
            placeholder="Your Email"
            {...register('email', {
              required: 'Please enter your email',
              maxLength: { value: 30, message: 'Email must be under 30 characters' }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}

          <textarea
            placeholder="Your Message"
            rows="6"
            {...register('message', { required: 'Message cannot be empty' })}
          />
          {errors.message && <span className="error">{errors.message.message}</span>}

          <button type="submit" disabled={isSubmitting}>Send</button>
          <p className="result">{result}</p>
        </form>
      </div>
    </section>
    </div>
    </>
  );
};

export default Contact;
