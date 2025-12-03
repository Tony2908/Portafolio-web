import React from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Typewriter from 'typewriter-effect'; // <-- CAMBIO 1: El import es diferente
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const particlesLoaded = (container) => {
    console.log("Partículas cargadas", container);
  };

  const particlesOptions = {
    fpsLimit: 120,
    interactivity: { events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" } } },
    particles: {
      color: { value: "#64ffda" },
      links: { color: "#8892b0", distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: { enable: true, speed: 1 },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 bg-background">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.img
            src={profileImg}
            alt="Foto de perfil de Peter"
            className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg object-cover border-4 border-primary/70"
            whileHover={{ scale: 1.05 }}
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-light-text">¡Hola! Soy Peter</h1>
          
          {/* --- CAMBIO 2: La forma de usar Typewriter es diferente --- */}
          <div className="text-xl mb-8 max-w-2xl mx-auto text-dark-text">
            <Typewriter
              options={{
                strings: ['Desarrollador Web.', 'Apasionado por la tecnología.', 'Creador de soluciones digitales.'],
                autoStart: true,
                loop: true,
                delay: 70,
                cursorClassName: 'text-primary'
              }}
            />
          </div>

          <motion.button
            onClick={handleScrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent hover:bg-primary/10 text-primary font-semibold py-3 px-8 border border-primary rounded-lg transition-colors duration-300"
          >
            Ver Mis Proyectos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;