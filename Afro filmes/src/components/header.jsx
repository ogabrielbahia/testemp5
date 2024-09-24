import React, { useState } from 'react';
import "../styles/header.css"

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMenuActive(!menuActive);
  };

  const searchNewsletter = () => {
    alert('Inscrever-se na newsletter!');
  };

  return (
    <header>
      <nav id="navbar">
        <a id="nav_logo" aria-label="Página inicial">
          <i className="fa-solid fa-film"></i> AFRO FILMES
        </a>

        <ul id="nav_list">
          <li className="nav-item active">
            <a href="#home" id="navi" aria-label="Filmes">FILMES</a>
          </li>
          <li className="nav-item">
            <a href="#menu" aria-label="Filmes recomendados para você">FILMES PARA VOCÊ</a>
          </li>
          <li className="nav-item">
            <a href="#feed" aria-label="Filmes por gênero">FILMES POR GÊNERO</a>
          </li>
        </ul>

        <button className="btn-default" aria-label="Assinar newsletter" onClick={searchNewsletter}>
          NEWSLETTER
        </button>

        <button id="mobile_btn" aria-label="Abrir menu mobile" onClick={toggleMobileMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      <div id="mobile_menu" className={menuActive ? 'active' : ''}>
        <ul id="mobile_nav_list">
          <li className="nav-item">
            <a href="#home" aria-label="Filmes">FILMES</a>
          </li>
          <li className="nav-item">
            <a href="#menu" aria-label="Filmes recomendados para você">FILMES PARA VOCÊ</a>
          </li>
          <li className="nav-item">
            <a href="#feed" aria-label="Filmes por gênero">FILMES POR GÊNERO</a>
          </li>
        </ul>

        <button className="btn-default" aria-label="Assinar newsletter" onClick={searchNewsletter}>
          NEWSLETTER
        </button>
      </div>
    </header>
  );
};

export default Header;
