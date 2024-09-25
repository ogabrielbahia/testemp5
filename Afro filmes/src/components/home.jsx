import React, { useState, useEffect } from 'react';
import "../styles/home.css";
import meninaFoto from "../assets/images/imagem.png";

const Home = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch('https://miniprojetom5-1.onrender.com/filmes')
      .then(response => response.json())
      .then(data => {
        const top3Filmes = data.sort((a, b) => b.avaliacao - a.avaliacao).slice(0, 3);
        setFilmes(top3Filmes);
      })
      .catch(error => console.error('Erro ao buscar os filmes:', error));
  }, []);

  return (
    <section id="home">
      <div className="shape">
        <h1>Bem-vindo à nossa página dedicada a Filmes Afros!</h1>
        <br />
        <p>
          Aqui, celebramos a riqueza e diversidade do cinema afro, um espaço onde histórias, vozes e culturas de origem africana ganham destaque. Nosso objetivo é proporcionar uma experiência única e significativa, oferecendo filmes que refletem a pluralidade de identidades, tradições e vivências da diáspora africana, bem como de países do continente africano.
        </p>
        <br />
        
        <div className="top-filmes">
          <h2>Top 3 Filmes Mais Bem Avaliados</h2>
          <div className="filmes-container">
            {filmes.map(filme => (
              <div className="filme-card" key={filme.id}>
                <h3>{filme.titulo}</h3>
                <p>Avaliação: {filme.avaliacao}</p>
                <p>{filme.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="ttl">
        <h1 className="title">
          REPRESENTATIVIDADE NA SUA <span>TELA</span>
        </h1>
        <p className="description">
          Dando o devido valor ao protagonismo negro nos filmes!
        </p>
        <img id="imagem" src={meninaFoto} alt="Representatividade" />
      </div>
    </section>
  );
};

export default Home;
