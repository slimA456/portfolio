import React, { useState, useEffect } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { IoIosLocate } from "react-icons/io";
import { GiClockwork } from "react-icons/gi";
import { motion } from "framer-motion"
import { TbBrandTelegram } from "react-icons/tb";

const Contact = () => {
  const [formData , setFormData] = useState({
    name:"",
    email:"",
    message:"",
  })

const [errors , setErrors] = useState(
 {
  name:'',
  email:'',
  message:'',
 }
)

const [isSubmitting , setIsSubmitting] = useState(false)
const [isSubmitted , setIsSubmitted] = useState(false)
const [serverError, setServerError] = useState('')
const [serverMessage, setServerMessage] = useState('')

// Replace with your Formspree form ID (create a form at https://formspree.io)
const FORMSPREE_URL = 'https://formspree.io/f/mwvpglzv';

const validateField = (e) =>{
  const {name , value} = e.target
  let error = "";

  switch (name){
    case 'name' :
      if (!value.trim()) error = "Name is required"
      else if (value.length < 2) error = " Name must be atleast 2 character"
      else if (value.length > 50) error = " Name must be less than 50 character"
      break;
      
      case 'email' :
        if (!value.trim()) error = "email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address';
      }
      break;

      case 'message' :
      if (!value.trim()) error = "message  is required"
      else if (value.length < 10) error = " message must be atleast 10 character"
      else if (value.length > 2000) error = " message is too long (max 2000)"
      break;
      
  }
  setErrors(prev => ({...prev , [name] : error}))
  return !error;

}

const validateForm = () =>{
  const newErrors = {}
  let isValid = true;

  if (!formData.name.trim()){
    newErrors.name = "name is required"
    isValid = false
  }else if (formData.name.length < 2){
    newErrors.name = 'Name must be at least 2 character'
    isValid = false;
  }

   if (!formData.email.trim()) {
    newErrors.email = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email address';
    isValid = false;
  }
  // Validate message
  if (!formData.message.trim()) {
    newErrors.message = 'Message is required';
    isValid = false;
  } else if (formData.message.length < 10) {
    newErrors.message = 'Please provide more details (min 10 characters)';
    isValid = false;
  }

  setErrors(newErrors);
  return { isValid, newErrors };
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
  
  // Clear error when user starts typing
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: '' }));
  }

  // Clear server messages when user modifies the form
  if (serverError) setServerError('');
  if (serverMessage) setServerMessage('');
};

// Validate form inputs with debounce when user types
useEffect(() => {
  const timer = setTimeout(() => {
    if (formData.name || formData.email || formData.message) {
      validateForm();
    }
  }, 500); // Validate 500ms after user stops typing

  return () => clearTimeout(timer);
}, [formData.name, formData.email, formData.message]);

const handleSubmit = async (e) => {
  e.preventDefault();
  
  const { isValid, newErrors } = validateForm();
  if (!isValid) {
    // Scroll to first error
    const firstError = Object.keys(newErrors).find(key => newErrors[key]);
    if (firstError) {
      document.querySelector(`[name="${firstError}"]`).focus();
    }
    return;
  }

  setIsSubmitting(true);
  setServerError('');
  setServerMessage('');

  try {
    // Formspree expects form data (FormData) or urlencoded form posts from browsers
    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('message', formData.message);

    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: payload,
    });

    if (response.ok) {
      const data = await response.json().catch(() => null);
      console.info('Contact submit success:', { status: response.status, body: data });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setServerMessage(data?.message || 'Message sent successfully!');
      setServerError('');

      // If Formspree returns a redirect path, follow it after a short delay
      if (data?.next) {
        setTimeout(() => {
          // Use full URL if provided or relative path
          window.location.href = data.next;
        }, 800);
        return;
      }

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setServerMessage('');
      }, 5000);
    } else {
      // Try to capture response body for better error messages
      const text = await response.text().catch(() => null);
      let msg;
      try {
        const json = text ? JSON.parse(text) : null;
        msg = json?.error || json?.message || text;
      } catch (e) {
        msg = text || `Submission failed (${response.status})`;
      }
      console.error('Contact submit failed:', { status: response.status, body: msg });
      throw new Error(msg || `Submission failed (${response.status})`);
    }
  } catch (error) {
    console.error('Contact submit error:', error);
    setServerError(error.message || 'Failed to send message. Please try again.');
    setServerMessage('');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <motion.div 
    id="contact"
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}}
     className="flex items-center justify-center flex-col w-full py-20 px-4">
  <h1 className="text-xl sm:text-3xl font-bold tracking-wide text-center space-mono-bold-italic">
    Let’s Work Together
  </h1>
  <p className="font-bold  mt-4 text-center max-w-xl space-mono-regular">
    Open to remote Frontend engineering roles and select freelance projects. 
    Currently employed but exploring new opportunities
  </p>

   <motion.div 
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}} className="flex flex-col lg:flex-row gap-5 w-full mt-8 space-mono-regular">
    {/* Left Section */}
     <motion.div 
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}} className="flex-1">
      <h1 className=" sm:text-2xl text-xl font-bold space-mono-bold-italic">What I'm Looking For</h1>
      <div>
        <p className="mt-4 mb-4 flex items-center gap-2"><GoArrowUpRight/> Full-time remote frontend engineering roles</p>
        <p className="mt-4 mb-4 flex items-center gap-2"><GoArrowUpRight/> Contract opportunities (20+ hours/week)</p>
        <p className="mt-4 mb-4 flex items-center gap-2"><GoArrowUpRight/> High-impact projects at growing startups</p>
        <p className="mt-4 mb-4 flex items-center gap-2"><GoArrowUpRight/> Performance optimization consulting</p>

        <h1 className="text-xl sm:text-2xl font-bold">Direct Contact</h1>
        <p className="mt-4 mb-4 flex items-center gap-2"><AiOutlineMail/> abubakarrsanura105@gmail.com</p>
        <p className="mt-4 mb-4 flex items-center gap-2"><GrLinkedin/> linkedin.com</p>
        <p className="mt-4 mb-4 flex items-center gap-2"><IoIosLocate/> Uganda, Kampala</p>
        <p className="mt-4 mb-4 flex items-center gap-2"><GiClockwork/> Excellent overlap with EU/US East Coast</p>
      </div>

       <motion.div 
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}} className=" p-4 rounded-lg mt-8">
        <h1 className="sm:text-lg lg:xl  space-mono-bold-italic">Current Availability</h1>
        <p className="mt-4 mb-4 text-center space-mono-regular">
          Available for new opportunities with 2-week notice. Immediate start for the right role.
        </p>
      </motion.div>
    </motion.div>

    {/* Right Section (Form) */}
     <motion.div 
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}}
     className="my-box rounded-xl flex-1">
      <motion.form 
    initial = {{opacity: 0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1,ease: "easeOut"}}
    viewport={{once:true, amount:0.2}}
       className="flex flex-col w-full sm:max-w-md lg:max-w-2xl m-4 sm:m-12 mx-auto px-4"
       onSubmit={handleSubmit}
       noValidate>
        {serverMessage && (
         <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-600 text-sm mt-2"
         >
          {serverMessage}
         </motion.p>
        )}
        {serverError && (
         <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-2"
         >
          {serverError}
         </motion.p>
        )}
        <span 
        className="font-bold mt-4"
        >Your Name</span>
        <input name="name" type="text" placeholder="John Doe" className="border rounded-xl h-12 px-2"
        onChange={handleChange}
        onBlur={validateField}
        value={formData.name} />
        {errors.name && (
         <motion.p 
          initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-sm mt-1">
          {errors.name}
         </motion.p>

        
        )}

        <span className="font-bold mt-4">Email Address</span>
        <input name="email" type="email" placeholder="john@example.com" className="border rounded-xl h-12 px-2" 
        onChange={handleChange}
        value={formData.email}
        onBlur={validateField}  />
        {errors.email && (
          <motion.p
          initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-sm mt-1">
          {errors.email}
        </motion.p>
        )}

        <span className="font-bold mt-4">
          
          Message</span>
        <textarea 
        name='message'
        value={formData.message}
        onBlur={validateField}
        onChange={handleChange}
        className={`border rounded-xl p-2 min-h-24 md:min-h-32 w-full mt-1 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
        ></textarea>

        <p className="font-bold  rounded-xl mt-2 space-mono-regular">
          Please include: project scope, tech stack, timeline, and budget/compensation
        </p>
        <motion.div
       whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        
        className='w-full h-12 bg-(--silver-3) mt-4 rounded-xl '> 
          <button
      type="submit"
      disabled={isSubmitting}
      className="font-bold w-full h-full flex items-center justify-center p-2 gap-4 backdrop-blur disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isSubmitting ? 'Sending...' : 'Submit Form'}
      <TbBrandTelegram size={25} />
    </button>
        </motion.div>
      </motion.form>
    </motion.div>
  </motion.div>
</motion.div>
  )}

  export default Contact