import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiMysql, SiMongodb } from 'react-icons/si';
import { BiLogoSpringBoot } from 'react-icons/bi';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 'Avanzado' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 'Avanzado' },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 'Avanzado' },
    { name: 'React', icon: <FaReact className="text-sky-400" />, level: 'Avanzado' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Intermedio' },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, level: 'Avanzado' },
    { name: 'Java', icon: <FaJava className="text-red-500" />, level: 'Avanzado' },
    { name: 'Spring Boot', icon: <BiLogoSpringBoot className="text-green-600" />, level: 'Avanzado' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, level: 'Avanzado' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" />, level: 'Avanzado' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // --- CAMBIO 1: Fondo de la sección (ahora hereda el del body) ---
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- CAMBIO 2: Estructura de título consistente --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-light-text">
            Habilidades y Tecnologías
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              // --- CAMBIO 3: Estilo de la tarjeta para tema oscuro ---
              className="bg-card p-6 rounded-lg shadow-lg text-center border border-transparent hover:border-primary transition-colors duration-300 flex flex-col items-center justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              {/* --- CAMBIO 4: Colores del texto dentro de la tarjeta --- */}
              <h3 className="text-lg font-semibold text-light-text">{skill.name}</h3>
              <span className={`mt-2 px-3 py-1 text-xs font-bold rounded-full ${
                skill.level === 'Avanzado' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-800'
              }`}>
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;