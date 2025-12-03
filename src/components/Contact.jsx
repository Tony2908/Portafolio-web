import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  // Nota: La lógica del formulario (onSubmit con EmailJS) no se incluye aquí
  // para enfocarnos en el estilo. Puedes añadirla de nuevo cuando quieras.

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- CAMBIO 1: Título de sección consistente --- */}
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
          {/* --- CAMBIO 2: Color del párrafo --- */}
          <p className="text-lg text-dark-text mb-8">
            ¿Interesado en colaborar? No dudes en enviarme un mensaje. ¡Estoy abierto a nuevas oportunidades y me encantaría saber de ti!
          </p>
          
          {/* --- CAMBIO 3: Estilo de los íconos sociales --- */}
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
          
          {/* --- CAMBIO 4: Formulario adaptado al tema oscuro --- */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full p-4 bg-card border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-text"
            />
            <input
              type="email"
              placeholder="Tu Email"
              className="w-full p-4 bg-card border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-text"
            />
            <textarea
              placeholder="Tu Mensaje"
              rows="5"
              className="w-full p-4 bg-card border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-text"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-primary text-background font-bold py-3 rounded-lg hover:bg-opacity-90 transition"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;