import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

//RiiiiTkYz_LB7U6kt
//template_43zlu29
//service_4oknwif

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {  name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_4oknwif',
      'template_43zlu29',
      {
        from_name: form.name,
        to_name: 'Omkar Gaikwad',
        from_email: form.email,
        to_email: 'omkargaikwad9805@gmail.com',
        message: form.message,
      },
      'RiiiiTkYz_LB7U6kt'
    ).then(() => {
      setLoading(false);
      alert('Thank you I\'ll get back to you ASAP!');

      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    });
  };


  return (
    <div className="xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden">
     <motion.div
     variants={slideIn("left", "tween", 0.2, 1)}
     className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
      <p className={styles.sectionSubText}>
        Get in touch
      </p>
      <h3 className={styles.sectionHeadText}>
        Contact.
      </h3>

      <form ref = {formRef}
      onSubmit={handleSubmit} 
      className="mt-12 flex flex-col gap-8">
        <label className = "flex flex-col">
          <span className="text-white font-medium mb-4">
            Your Name
          </span>
          <input 
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary 
          text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
         <label className = "flex flex-col">
          <span className="text-white font-medium mb-4">
            Your Email
          </span>
          <input 
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary 
          text-white rounded-lg outline-none border-none font-medium"
          />

        </label>
         <label className = "flex flex-col">
          <span className="text-white font-medium mb-4">
            Your Message
          </span>
          <textarea
          rows="7"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary 
          text-white rounded-lg outline-none border-none font-medium"
          />

        </label>
        <button
        type="submit"
        className="bg-tertiary py-3 px-8 
        outline-none w-fit text-white font-bold 
        shadow-md shadow-primary rounded-xl"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
     </motion.div>

     <motion.div
     variants={slideIn("right", "tween", 0.2, 1)}
     className="xl:flex-1 xl:h-auto 
     md:h-[550px] h-[350px]">
      <EarthCanvas />
     </motion.div>

    </div>
  )
}

export default SectionWrapper
(Contact, "contact");