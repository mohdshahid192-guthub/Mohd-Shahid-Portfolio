import React, { useState } from 'react';
import InputBox from '../Input/Input';
import ButtonRectangle from '../Buttons/ButtonRectangle';
import usePhoneCodes from '../../Hooks/PhoneCountryCode';
import contactImage from "../../assets/ContactAvatar.png"
import emailjs from "@emailjs/browser"

export default function Contact(){
const [firstName, setFirstName] = useState("")

const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState({
  countryCode: '',
  phoneNumber: ''
})

const [message, setMessage] = useState('')
const [isSubmitting, setIsSubmitting] = useState(false)

const handleChange = (e) => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    const templateParams = {
      full_name: firstName + " " + lastName,
      user_email: email,
      phone_number: phone.countryCode + " " + phone.phoneNumber,
      message: message
    }

    emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_PUBLIC_KEY

    )
    .then(
      (response) => {
          alert('Message sent successfully! 🚀');
      
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone({ countryCode: '', phoneNumber: '' });
          setMessage('');
        },
        (error) => {
          alert('Failed to send the message. Please try again.');
          console.error('EmailJS Error:', error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  }



return(


<div className=" min-h-[calc(100vh-64px)] dark:bg-slate-800 w-full h-auto  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2">


<div className="sm:grid place-items-center hidden pt-16">
  <img src={contactImage} alt="contact-image" />
</div>

    <div className="px-2 grid place-items-center sm:col-span-2 md:col-span-1">
       <form onSubmit={handleSubmit} className="w-[80%] flex items-center justify-start gap-4 h-max pt-8 pb-6 px-4 flex-col shadow-lg shadow-gray-300 bg-white dark:bg-slate-900/80  dark:shadow-gray-800 dark:text-white rounded-lg">
        
        <h2 className="font-bold text-3xl text-center sm:text-start">Contact <span className="text-orange-600 dark:text-indigo-500">Me</span></h2>

        <div className='flex gap-2 w-full '>
             <InputBox
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              isRequired = {true}
              width='w-full'
            />
             <InputBox
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              isRequired = {true}
               width='w-full'
            />
        </div>
         <InputBox
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              isRequired = {true}
               width='w-full'
            />
       
            <div className='flex w-full'>
              <InputBox 
              type = "select"
              name="countryCode"
              value={phone.countrycode}
              onChange={handleChange}
              isRequired={true}
               width='w-[30%] sm:w-[25%] md:w-[20%]'
              />

              <InputBox
              type="text"
              name= "phoneNumber"
              value={phone.phoneNumber}
              placeholder="9999999999"
              onChange={handleChange}
              isRequired = {true}
               width='w-[70%] sm:w-[75%] md:w-[80%]'
            />
            
            </div>

              <div className='w-full relative'>
                <InputBox
              type="textarea"
              value={message}
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.target.value)}
              isRequired = {true}
               width='w-full'
            />
            <p className='absolute z-10 top-0 right-0 pr-2 text-sm text-gray-500'>{message.length}/100</p>
              </div>

           <div className='w-full pt-2'>
             <ButtonRectangle width='w-full' height='h-12' textSize='text-xl' btnText={isSubmitting ? "Sending..." : "Submit"} type='submit' disabled={isSubmitting}/>
           </div>
       </form>
    </div>
  </div>

  

  
)
}