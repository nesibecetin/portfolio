import React, { useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ThemeContext } from '../../Context'
import { useContext } from 'react';

const Contact = () => {
    const form = useRef();
    const [done , setDone] =useState(false); 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0baz6yf', 'template_zokg14k', form.current, 'lDCVPvmdxmqw4Ckpf')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    const theme = useContext(ThemeContext);
    const dark = theme.state.darkMode

    return (
        <div className="contact" id='Contact' style={{background:dark?  'var(--bg-color)': '' ,
        color:dark? 'var(--white)' : ''}}>
            <div className=" c-left">
                <div className="c-awesome">
                    <span style={{ color:dark? 'var(--primary-color)' : ''}}>Bana Ulaş</span>
                    <span></span>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' className='user' placeholder='Ad' />
                    <input type="text" name='email' className='user' placeholder='Email' />
                    <textarea type="text" name='message' className='user' placeholder='Message' />
                    <input type='submit' value='Gönder' className='button' />
                    <span>{done && "İletişime geçtiğiniz için teşekkürler!"}</span>
                </form>
            </div>
        </div>
    )
}

export default Contact