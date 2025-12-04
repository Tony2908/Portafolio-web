import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // Importamos la librería

const Contact = () => {
  const form = useRef(); // Referencia al formulario
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setStatus('sending');

    // 👇 REEMPLAZA ESTOS DATOS CON TUS CREDENCIALES REALES DE EMAILJS
    const SERVICE_ID = 'service_v6a4gwp';
    const TEMPLATE_ID = 'template_dy7wy6h';
    const PUBLIC_KEY = 'nXSoTnnPq4AFl4lVo';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset(); // Limpia el formulario
          
          // Borra el mensaje de éxito después de 5 segundos
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
            <a href="mailto:tuemail@example.com" className="text-3xl text-dark-text hover:text-primary transition-colors duration-300">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="text-3xl text-dark-text hover:text-primary transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-3xl text-dark-text hover:text-primary transition-colors duration-300">
              <FaGithub />
            </a>
          </div>
          
          {/* Conectamos el formulario con ref y onSubmit */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name" // IMPORTANTE: Debe coincidir con tu plantilla de EmailJS
              placeholder="Tu Nombre"
              required // Hacemos el campo obligatorio
              className="w-full p-4 bg-card border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-text"
            />
            <input
              type="email"
              name="user_email" // IMPORTANTE
              placeholder="Tu Email"
              required
              className="w-full p-4 bg-card border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-text"
            />
            <textarea
              name="message" // IMPORTANTE
              placeholder="Tu Mensaje"
              rows="5"
              required
              className="w-full p-4 bg-card border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-text"
            ></textarea>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === 'sending'} // Desactiva el botón mientras envía
              className={`w-full bg-primary text-background font-bold py-3 rounded-lg hover:bg-opacity-90 transition ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>

            {/* Mensajes de feedback */}
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