import React from 'react'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss"

export default function Contact(){
    const form = useRef()

    const [message,setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_u44sgj6', form.current, 'user_3b3qxo9vpaQ8bPGl1tsBt')
      .then((result) => {
          alert("foi")
          setMessage(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
        <div className="contact" id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contato</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" required name='email'/>
                    <textarea placeholder="Message" required name='message'></textarea>
                    <button type="submit">Send</button>
                </form>
                {message && <span>Obrigado, irei retornar o mais breve possivel! <span>&#128516;</span></span>}
            </div>
        </div>
    )
}