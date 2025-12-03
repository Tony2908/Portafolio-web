import React from 'react';

const Footer = () => {
  return (
    // CAMBIOS: Fondo transparente y texto más sutil
    <footer className="bg-transparent text-dark-text py-6 text-center text-sm">
      <p>&copy; 2025 Peter Güette. Todos los derechos reservados. Hecho con ❤️ y React.</p>
    </footer>
    // NOTA: El comentario que tenías aquí se eliminó porque estaba fuera del return y causaría un error.
  );
};

export default Footer;