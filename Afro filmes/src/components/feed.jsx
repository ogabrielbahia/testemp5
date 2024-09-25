import React, { useState, useEffect } from 'react';
import axios from 'axios';
import soulImage from '../assets/images/soul.jpeg';
import anosImage from '../assets/images/12anos.png';
import panteraNegraImage from '../assets/images/panteranegra.jpeg';
import amistadImage from '../assets/images/amistad.jpeg';
import corPurpuraImage from '../assets/images/corpurpura.jpeg';
import djangoImage from '../assets/images/django.jpeg';
import selmaImage from '../assets/images/selma.jpeg';
import malcolmXImage from '../assets/images/malcomx.jpeg';
import panteraNegra2Image from '../assets/images/panteranegra2.jpeg';
import getOutImage from '../assets/images/corra.jpeg';

import "../styles/feed.css";

const Feed = () => {
  const [generoSelecionado, setGeneroSelecionado] = useState('Drama');
  const [filmesPorGenero, setFilmesPorGenero] = useState([]);
  const [isLoadingGenero, setIsLoadingGenero] = useState(true);

  const fetchFilmesPorGenero = async (genero) => {
    setIsLoadingGenero(true);
    try {
      const response = await axios.get(`https://miniprojetom5-1.onrender.com/filmes/genero/${genero}`);
      setFilmesPorGenero(response.data);
    } catch (error) {
      console.error('Erro ao buscar filmes por gênero:', error);
      setFilmesPorGenero([]);
    }
    setIsLoadingGenero(false);
  };

  useEffect(() => {
    fetchFilmesPorGenero(generoSelecionado);
  }, [generoSelecionado]);

   const mapFilmeToImage = (filmeTitulo) => {
    switch (filmeTitulo) {
      case 'Soul':
        return soulImage;
      case '12 Anos de Escravidão':
        return anosImage;
      case 'Amistad':
        return amistadImage;
      case 'A Cor Púrpura':
        return corPurpuraImage;
      case 'Django Livre':
        return djangoImage;
      case 'Selma':
        return selmaImage;
      case 'Malcolm X':
        return malcolmXImage;
      case 'Black Panther: Wakanda Para Sempre':
        return panteraNegra2Image;
      case 'Get Out':
        return getOutImage;
      default:
        return ''; 
    }
  };

  return (
    <section id="feed">
      <div id="feed_content">
        <div id="filmes-por-genero">
          <h2 className="section-title">FILMES POR GÊNERO</h2>

          <div className="genre-selector">
            <label htmlFor="genero">Escolha um gênero:</label>
            <select
              id="genero"
              value={generoSelecionado}
              onChange={(e) => setGeneroSelecionado(e.target.value)}
            >
              <option value="Drama">Drama</option>
              <option value="Animação">Animação</option>
              <option value="Histórico">Histórico</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Família">Família</option>
            </select>
          </div>

          <div id="feedbacks">
            {isLoadingGenero ? (
              <p>Carregando filmes por gênero...</p>
            ) : (
              filmesPorGenero.length > 0 ? (
                filmesPorGenero.map((filme) => (
                  <div className="feedback" key={filme.id}>
                    <img
                      src={mapFilmeToImage(filme.titulo)}
                      className="feedback-avatar"
                      alt={filme.titulo}
                    />
                    <div className="feedback-content">
                      <p className="movie-title">
                        {filme.titulo}
                      </p>
                      <p className="movie-details">
                        Gênero: {filme.genero}<br />
                        Ano: {filme.ano}<br />
                        Descrição: {filme.descricao}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Nenhum filme encontrado para o gênero selecionado.</p>
              )
            )}
          </div>
        </div>

     
        {generoSelecionado === 'Drama' && (
          <>
            <div className="feedback">
              <img src={amistadImage} className="feedback-avatar" alt="Amistad" />
              <div className="feedback-content">
                <p className="movie-title">Amistad</p>
                <p className="movie-details">
                  Gênero: Drama<br />
                  Ano: 1997<br />
                  Descrição: Baseado em uma história real sobre a luta de escravos africanos pela liberdade.
                </p>
              </div>
            </div>

            <div className="feedback">
              <img src={corPurpuraImage} className="feedback-avatar" alt="A Cor Púrpura" />
              <div className="feedback-content">
                <p className="movie-title">A Cor Púrpura</p>
                <p className="movie-details">
                  Gênero: Drama<br />
                  Ano: 1985<br />
                  Descrição: A luta de uma mulher afro-americana para encontrar sua identidade e independência.
                </p>
              </div>
            </div>

            <div className="feedback">
              <img src={djangoImage} className="feedback-avatar" alt="Django Livre" />
              <div className="feedback-content">
                <p className="movie-title">Django Livre</p>
                <p className="movie-details">
                  Gênero: Faroeste<br />
                  Ano: 2012<br />
                  Descrição: Um escravo libertado se torna caçador de recompensas para resgatar sua esposa.
                </p>
              </div>
            </div>

            <div className="feedback">
              <img src={selmaImage} className="feedback-avatar" alt="Selma" />
              <div className="feedback-content">
                <p className="movie-title">Selma</p>
                <p className="movie-details">
                  Gênero: Drama<br />
                  Ano: 2014<br />
                  Descrição: A luta pelos direitos civis liderada por Martin Luther King Jr.
                </p>
              </div>
            </div>

            <div className="feedback">
              <img src={malcolmXImage} className="feedback-avatar" alt="Malcolm X" />
              <div className="feedback-content">
                <p className="movie-title">Malcolm X</p>
                <p className="movie-details">
                  Gênero: Biografia<br />
                  Ano: 1992<br />
                  Descrição: A vida do ativista Malcolm X e sua luta por direitos iguais.
                </p>
              </div>
            </div>
          </>
        )}

        <button className="btn-default">Ver mais avaliações</button>
      </div>
    </section>
  );
};

export default Feed;
