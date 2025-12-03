import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa'; // Usando FaGithub para consistencia
import Vetsalud from '../assets/Vetsalud.png';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce App',
      description: 'Una aplicación de compras con React y Tailwind, integrada con API de pagos.',
      image: 'https://via.placeholder.com/400x250?text=E-commerce',
      link: '#',
      demo: '#',
      tags: ['React', 'Tailwind CSS', 'API'],
    },
    {
      title: 'Dashboard Admin',
      description: 'Panel de administración responsive con charts y autenticación.',
      image: 'https://via.placeholder.com/400x250?text=Dashboard',
      link: '#',
      demo: '#',
      tags: ['React', 'Chart.js', 'Firebase'],
    },
    {
      title: 'Landing Page Vetsalud',
      description: 'Landing page para una clínica veterinaria con un diseño moderno y enfocado en la conversión.',
      image: Vetsalud,
      link: 'https://github.com/Tony2908/Vetsalud',
      demo: 'https://tony2908.github.io/Vetsalud/',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // CAMBIO 1: Fondo de sección y espaciado
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CAMBIO 2: Título de sección consistente */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-light-text">
            Mis Proyectos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              // CAMBIO 3: Estilo de tarjeta para tema oscuro
              className="bg-card rounded-lg shadow-xl flex flex-col justify-between border border-transparent hover:border-primary transition-colors duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Contenedor principal de la tarjeta */}
              <div>
                <img src={project.image} alt={`Captura del proyecto ${project.title}`} className="rounded-t-lg object-cover h-48 w-full" />
                <div className="p-6">
                  {/* CAMBIO 4: Colores de texto dentro de la tarjeta */}
                  <h3 className="text-xl font-semibold mb-2 text-light-text">{project.title}</h3>
                  <p className="text-dark-text mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CAMBIO 5: Estilo de los enlaces (GitHub/Demo) */}
              <div className="p-6 pt-0 flex items-center space-x-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-primary transition-colors duration-300 flex items-center space-x-2">
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-primary transition-colors duration-300 flex items-center space-x-2">
                  <FiExternalLink size={20} />
                  <span>Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;