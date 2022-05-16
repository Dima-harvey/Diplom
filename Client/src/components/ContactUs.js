import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import './TodoList.css';


export default function ContactUs() {
  const form = useRef();
  const notify = () => toast("Message send!");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y52e72t', 'template_v6wm7m8', e.target, '1h7OxhUQbZ9YfAhva').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
    notify()
    e.target.reset()
  };

  return (
    <div className="patientlist-main-container">
        <form ref={form} onSubmit={sendEmail} className="Border">
          <h1>Отправить Сообщение</h1>
          <br />
          <label className='NameLabel'>Имя</label>
          <input type="text" name="user_name" className='NameText' />
          <label className='NameLabel'>Eмаил</label>
          <input type="email" name="user_email" className='Name' />
          <label className='NameLabel'>Сообщение</label>
          <textarea name="message" className='NameMessage'/>
          <input type="submit" value="Send" className='Button'/>
          <ToastContainer />
        </form>
      </div>
  );
}
