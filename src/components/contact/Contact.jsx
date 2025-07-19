// import React from 'react'
// import './Contact.css'
// import linkedin from '../../assets/linkedin.png'
// import github from '../../assets/github.png'
// import mail from '../../assets/mail.png'
// import insta from '../../assets/insta.png'

// import { useForm } from "react-hook-form"

// const Contact = () => {

// const [result, setResult] = React.useState("");

// //   const onSubmit = async (data) => {
// //     // event.preventDefault();
// //     await delay(2)
// //     console.log(event)
// //     setResult("Sending....");
// //     const formData = new FormData(event.target);

// //     formData.append("access_key", "08ec9b76-59b8-47d6-b0a6-7f9de0342b0c");

// //     const response = await fetch("https://api.web3forms.com/submit", {
// //       method: "POST",
// //       body: formData
// //     });

// //     const data = await response.json();

// //     if (data.success) {
// //       setResult("Form Submitted Successfully");
// //       event.target.reset();
// //     } else {
// //       console.log("Error", data);
// //       setResult(data.message);
// //     }
// //   };

    
// const onSubmit = async (data) => {
//   setResult("Sending...");
//   await delay(2);
//   console.log("Form data:", data);

//   const formData = new FormData();
//   formData.append("access_key", "08ec9b76-59b8-47d6-b0a6-7f9de0342b0c");
//   formData.append("name", data.name);
//   formData.append("email", data.email);
//   formData.append("message", data.message);

//   const response = await fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     body: formData,
//   });

//   const result = await response.json();

//   if (result.success) {
//     setResult("Form Submitted Successfully");
//     reset(); // ✅ this will now work, since you're using react-hook-form's reset
//   } else {
//     console.error("Error", result);
//     setResult(result.message);
//   }
// };


//     const {
//         register,
//         handleSubmit,
//         setError,
//         clearErrors,
//         reset,
//         formState: { errors, isSubmitting },
//     } = useForm()



//     const delay = (d) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve()
//                 reset()
//             }, d * 1000);
//         })
//     }

//     // const onSubmit = async (data) => {
//     //     await delay(2)
//     //     console.log(data)

//     // }

//     return (

//         <>


//             <div className="all">
//                 <div className="contact">
//                     <h1>Contact Me ☎️</h1>
//                     <h2>Discuss a project or just want to say hi? My Inbox is open for all.</h2>
//                     <h2>+91 8888888888</h2>
//                     <h2>Gmail : poretfolio@gmail.com</h2>
//                     <div className="icon">
//                         <img src={linkedin} alt="" />
//                         <img src={github} alt="" />
//                         <img src={mail} alt="" />
//                         <img src={insta} alt="" />
//                     </div>

//                 </div>
//                 <div className="form">
//                     <form className='form' onSubmit={handleSubmit(onSubmit)}>
//                         <input className='name' type="text"{...register("name", { required: { value: true, message: "fill this section" }, maxLength: { value: 20, message: "Name muth be less then 10 char" } })} placeholder='enter your name' />
//                         {errors.name && <span>{errors.name.message}</span>}
//                         <input className='' type="email" {...register("email", { required: { value: true, message: "fill this section" }, maxLength: { value: 25, message: "email mush be less then 15 char" } })} placeholder='enter your email' />
//                         {errors.email && <span>{errors.email.message}</span>}
//                         <textarea placeholder='Enter your message' {...register("message")} rows="10" cols="115"></textarea>
//                         <input className='submit' type="submit" value="Submit" disabled={isSubmitting} />
//                 {/* {isSubmitting && <span>Submitting...</span>} */}
//                     </form>
//                     <span>{result}</span>
//                 </div>

//             </div>

//         </>

//     )
// }

// export default Contact






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
