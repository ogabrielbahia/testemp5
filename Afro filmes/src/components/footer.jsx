import React from 'react';
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer>
      <div id="footer_items">
        <p id="copyright">
          &copy; 2024 Afro Filmes. Todos os direitos reservados.
        </p>
        <a href="mailto:contato@afrofilmes.com" className="email-link">
          contato@afrofilmes.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;