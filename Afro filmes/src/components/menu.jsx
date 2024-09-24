import React from "react";
import "../styles/menu.css"

const Filmes = () => {
  const filmes = [
    {
      titulo: "Malcolm X (1992)",
      descricao: "A vida do ativista Malcolm X e sua luta por direitos iguais.",
      link: "https://www.google.com/search?q=Malcolm+X+1992",
    },
    {
      titulo: "Pantera Negra (2018)",
      descricao: "Um super-herói africano se torna o rei de Wakanda.",
      link: "https://www.google.com/search?q=Pantera+Negra+2018",
    },
    {
      titulo: "12 Anos de Escravidão (2013)",
      descricao: "A história de um homem negro livre sequestrado e vendido como escravo.",
      link: "https://www.google.com/search?q=12+Anos+de+Escravid%C3%A3o+2013",
    },
  ];

  return (
    <section id="menu">
      <h2 className="section-title">NOSSOS FILMES</h2>
      <h3 className="section-subtitle">NOSSOS PRINCIPAIS FILMES</h3>

      <div id="filmes">
        {filmes.map((filme, index) => (
          <a href={filme.link} target="_blank" rel="noreferrer" className="filme" key={index}>
            <div className="filme-heart">
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="filme-title">{filme.titulo}</h3>
            <p className="filme-description">{filme.descricao}</p>
            <div className="filme-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Filmes;
