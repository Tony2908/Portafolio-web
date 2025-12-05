import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import Vetsalud from '../assets/Vetsalud.png';
import Gymflow from '../assets/Gymflow.png';
import Joyeria from '../assets/Joyeria.png';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      title: 'Gold dream',
      description: 'Landing page para una joyeria',
      image: Joyeria,
      link: '#',
      demo: '#',
      tags: ['React', 'Tailwind CSS', 'Node'],
    },
    {
      title: 'Gymflow',
      description: 'Sistema para el control del flujo de clientes y membresias de un gimnasio',
      image: Gymflow,
      link: '#',
      demo: '#',
      tags: ['React', 'Node', 'Mysql'],
    },
    {
      title: 'Landing Page Vetsalud',
      description: 'Landing page para una clínica veterinaria con un diseño moderno y enfocado en la conversión.',
      image: Vetsalud,
      link: 'https://github.com/Tony2908/Vetsalud',
      demo: 'https://tony2908.github.io/Vetsalud/',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    // --- PROYECTOS ADICIONALES ---
    {
      title: 'App de Tareas (Demo)',
      description: 'Aplicación para gestión de tareas con Drag & Drop.',
      image: 'https://via.placeholder.com/400x250?text=Task+App', 
      link: '#',
      demo: '#',
      tags: ['React', 'Redux', 'DnD'],
    },
    {
      title: 'Weather App (Demo)',
      description: 'Consulta el clima en tiempo real usando OpenWeather API.',
      image: 'https://via.placeholder.com/400x250?text=Weather+App',
      link: '#',
      demo: '#',
      tags: ['Vue', 'API', 'CSS'],
    },
    {
      title: 'Chat en Tiempo Real',
      description: 'Chat con websockets y salas privadas.',
      image: 'https://via.placeholder.com/400x250?text=Chat+App',
      link: '#',
      demo: '#',
      tags: ['Node.js', 'Socket.io', 'React'],
    },
  ];

  // Función para mostrar más
  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  // 👇 NUEVA FUNCIÓN: Mostrar menos (Resetear a 3)
  const handleShowLess = () => {
    setVisibleProjects(3);
    // Opcional: Hacer scroll suave hacia arriba al colapsar
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-light-text">
            Mis Proyectos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-card rounded-lg flex flex-col justify-between border border-transparent 
                           transition-colors duration-300 
                           hover:border-primary/50 
                           hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -7, 
                  transition: { duration: 0.2, delay: 0 } 
                }}
              >
                <div>
                  <img src={project.image} alt={`Captura del proyecto ${project.title}`} className="rounded-t-lg object-cover h-48 w-full" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-light-text">{project.title}</h3>
                    <p className="text-dark-text mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

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
          </AnimatePresence>
        </div>

        {/* 👇 ZONA DE BOTONES */}
        <div className="text-center mt-12 flex justify-center gap-4">
          
          {/* Botón Ver Más (Solo si quedan proyectos por mostrar) */}
          {visibleProjects < projects.length && (
            <motion.button
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-primary/10 text-primary font-semibold py-3 px-8 border border-primary rounded-lg transition-colors duration-300"
            >
              Ver más proyectos
            </motion.button>
          )}

          {/* Botón Ver Menos (Solo si se han mostrado más de los iniciales 3) */}
          {visibleProjects > 3 && (
            <motion.button
              onClick={handleShowLess}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Usamos un estilo rojizo o diferente para indicar "cerrar", o mantenemos el estilo primario
              className="bg-transparent hover:bg-red-500/10 text-red-400 font-semibold py-3 px-8 border border-red-400 rounded-lg transition-colors duration-300"
            >
              Ver menos
            </motion.button>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;