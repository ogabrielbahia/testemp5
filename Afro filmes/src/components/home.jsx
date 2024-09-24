import React from 'react';
import "../styles/home.css"

const Home = () => {
  return (
    <section id="home">
      <div className="shape">
        <h1>Bem-vindo à nossa página dedicada a Filmes Afros!</h1>
        <br />
        <br />
        <p>
          Aqui, celebramos a riqueza e diversidade do cinema afro, um espaço onde histórias, vozes e culturas de origem africana ganham destaque. Nosso objetivo é proporcionar uma experiência única e significativa, oferecendo filmes que refletem a pluralidade de identidades, tradições e vivências da diáspora africana, bem como de países do continente africano.
        </p>
        <br />
        <p>
          Navegue por nossa seleção e descubra produções que exploram temas como resistência, ancestralidade, amor, cultura e superação. Cada filme presente em nossa plataforma é uma peça importante do mosaico que compõe a arte e a experiência afro pelo mundo.
        </p>
      </div>
      
      <div id="ttl">
        <h1 className="title">
          REPRESENTATIVIDADE NA SUA <span>TELA</span>
        </h1>
        <p className="description">
          Dando o devido valor ao protagonismo negro nos filmes!
        </p>
        <img id="imagem" src="src/images/imagem.png" alt="Representatividade" />
      </div>
    </section>
  );
};

export default Home;
