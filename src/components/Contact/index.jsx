import React, { useRef } from 'react';
import './styles.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import {themeContext} from '../../Context';
import { useContext } from "react";

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8jtz9j6', 'template_fgr481w', form.current, 'LSjAx2rH-yrmkWECX')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-form" id="contact">
            <div className="w-left">
                <div className="awesome">
                    <span style={darkMode? {color: 'white'} : {color: 'black'}}>Fale Comigo</span>
                    <span>Mande um e-mail agora!</span>
                    <div className="blur blur1" style={{ background: "#abf1ff94" }}>
                    </div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Nome"/>
                    <input type="email" name="user_email" className="user" placeholder="Email"/>
                    <textarea name="message" className="user"placeholder="Digite sua mensagem aqui!"></textarea>
                    <input type="submit" value="Enviar" className="button"/>
                    <span>{done && "Obrigado por entrar em contato logo retornarei sua mensagem!"}</span>
                    <div className="blur blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;