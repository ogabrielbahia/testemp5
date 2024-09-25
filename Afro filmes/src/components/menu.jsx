import React, { useEffect, useState } from "react";
import "../styles/menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"; 

const Filmes = () => {
  const [filmes, setFilmes] = useState([]); 
  const apiUrl = "https://miniprojetom5-1.onrender.com/filmes";

  
  const fetchFilmeById = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar o filme com ID ${id}:`, error);
      return null;
    }
  };

  
  useEffect(() => {
    const filmeIds = [
      298.49300785647756,
      738.4786661652397,
      676.0947555554953,
      104.5898443862169,
      436.78929020321425,
      51.256467762522504,
      26.363614191844412,
      918.3909775712332,
      839.9240497526167,
      650.9515724595411,
    ];

    
    const fetchAllFilmes = async () => {
      const filmesPromises = filmeIds.map((id) => fetchFilmeById(id)); 
      const filmesData = await Promise.all(filmesPromises); 
      setFilmes(filmesData.filter(filme => filme !== null)); 
    };

    fetchAllFilmes();
  }, []);

  return (
    <section id="menu">
      <h2 className="section-title">NOSSOS FILMES</h2>
      <h3 className="section-subtitle">EXPLORE OS NOSSOS MELHORES FILMES:</h3>

      <div id="filmes">
        {filmes.map((filme, index) => (
          <a
            href={`https://www.google.com/search?q=${filme.titulo.replace(/\s/g, "+")}`}
            target="_blank"
            rel="noreferrer"
            className="filme"
            key={index}
            id={`filme-${filme.id}`} 
          >
            <div className="filme-heart">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <h3 className="filme-title">{filme.titulo} ({filme.ano})</h3>
            <p className="filme-description">{filme.descricao}</p>           
          </a>
        ))}
      </div>
    </section>
  );
};

export default Filmes;
