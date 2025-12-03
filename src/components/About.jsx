import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    // Sin fondo, para que herede el color del body
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- CAMBIO 1: Título de sección consistente --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-light-text">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* --- CAMBIO 2: Color del párrafo principal --- */}
          <p className="text-lg text-dark-text mb-12">
            Soy desarrollador web con conocimientos en frontend y backend, con enfoque en crear soluciones digitales funcionales, escalables y centradas en la experiencia del usuario.
            Me apasiona la tecnología, la innovación y el desarrollo de proyectos que generen impacto real mediante código eficiente y bien estructurado.
          </p>

          {/* --- CAMBIO 3: Tarjetas para Educación y Experiencia --- */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Tarjeta de Educación */}
            <div className="bg-card p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-2xl font-semibold mb-3 text-light-text">Educación</h3>
              <p className="text-dark-text">Estudiante de Análisis y desarrollo de Software</p>
            </div>
            
            {/* Tarjeta de Experiencia */}
            <div className="bg-card p-8 rounded-lg shadow-lg text-left">
              <h3 className="text-2xl font-semibold mb-3 text-light-text">Experiencia</h3>
              <p className="text-dark-text">Freelance en proyectos web para startups</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;