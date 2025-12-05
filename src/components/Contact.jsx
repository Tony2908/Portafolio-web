import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); 
  const [errorMessage, setErrorMessage] = useState('');

  // 👇 VALIDACIÓN DEFINITIVA (Uso de Diccionario)
  const validateEmail = (email) => {
    // 1. Sintaxis básica
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regex.test(email)) {
      return "Por favor ingresa un correo válido (ej: usuario@dominio.com)";
    }

    // 2. Anti-Typos con Diccionario Exacto
    const domain = email.split('@')[1].toLowerCase();
    
    // En lugar de una lista simple, usamos un objeto "Clave -> Valor"
    // Izquierda: El error del usuario -> Derecha: La corrección correcta
    const domainCorrections = {
      'gmoli.com': 'gmail.com',
      'gmil.com': 'gmail.com',
      'gmal.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'gimail.com': 'gmail.com',
      'gamail.com': 'gmail.com',
      'gmali.com': 'gmail.com', // El que te fallaba
      
      'hotmal.com': 'hotmail.com',
      'hotmail.co': 'hotmail.com',
      'hotmai.com': 'hotmail.com',
      
      'outlok.com': 'outlook.com',
      'otlook.com': 'outlook.com',
      
      'yahooo.com': 'yahoo.com'
    };

    // Verificamos si el dominio escrito está en nuestra lista de errores
    if (domainCorrections.hasOwnProperty(domain)) {
      // Si existe, sugerimos el valor correcto directamente
      return `¿Quisiste decir @${domainCorrections[domain]}? Verifica tu correo.`;
    }

    return null; 
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setStatus(null);

    const userEmail = form.current.user_email.value.trim();

    const validationError = validateEmail(userEmail);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setStatus('sending');

    // TUS CREDENCIALES
    const SERVICE_ID = 'service_v6a4gwp';
    const TEMPLATE_ID = 'template_dy7wy6h';
    const PUBLIC_KEY = 'nXSoTnnPq4AFl4lVo';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(null), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-light-text">
            Contáctame
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          <p className="text-lg text-dark-text mb-8">
            ¿Interesado en colaborar? No dudes en enviarme un mensaje. ¡Estoy abierto a nuevas oportunidades y me encantaría saber de ti!
          </p>
          
          <div className="flex justify-center space-x-8 mb-10">
            <a href="https://wa.link/sz20vh" target="_blank" rel="noopener noreferrer" className="text-3xl text-dark-text hover:text-[#25D366] transition-colors duration-300">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/peter-güette-433871319" target="_blank" rel="noopener noreferrer" className="text-3xl text-dark-text hover:text-primary transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Tony2908" target="_blank" rel="noopener noreferrer" className="text-3xl text-dark-text hover:text-primary transition-colors duration-300">
              <FaGithub />
            </a>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Tu Nombre"
              required
              className="w-full p-4 bg-card border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-text"
            />
            
            <div>
              <input
                type="text"
                name="user_email"
                placeholder="Tu Email"
                required
                className={`w-full p-4 bg-card border rounded-lg focus:outline-none focus:ring-2 text-light-text ${
                  errorMessage ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-primary'
                }`}
              />
              {errorMessage && (
                <p className="text-red-400 text-sm text-left mt-2 ml-1 animate-pulse">
                  ⚠️ {errorMessage}
                </p>
              )}
            </div>

            <textarea
              name="message"
              placeholder="Tu Mensaje"
              rows="5"
              required
              className="w-full p-4 bg-card border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-text"
            ></textarea>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === 'sending'}
              className={`w-full bg-primary text-background font-bold py-3 rounded-lg hover:bg-opacity-90 transition ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>

            {status === 'success' && (
              <p className="text-green-400 font-semibold mt-4">¡Mensaje enviado con éxito! Te responderé pronto.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 font-semibold mt-4">Hubo un error al enviar. Por favor intenta de nuevo.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;