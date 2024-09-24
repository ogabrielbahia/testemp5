    import soulImage from '../assets/images/soul.jpeg';
    import anosImage from '../assets/images/12anos.png';
    import "../styles/feed.css"
    const Feed = () => {
      return (
        <section id="feed">
          <div id="feed_content">
            <h2 className="section-title">FILMES POR GÊNERO</h2>
    
            <div id="feedbacks">
              <div className="feedback">
                <img src={soulImage} className="feedback-avatar" alt="Soul" />
                <div className="feedback-content">
                  <p className="movie-title">
                    SOUL
                    <span className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </p>
                  <p className="movie-details">
                    Gênero: Animação, Família, Fantasia<br />
                    Descrição: "Soul" conta a história de Joe Gardner, um professor de música que sonha em se tornar um grande músico de jazz...
                  </p>
                </div>
              </div>
    
              <div className="feedback">
                <img src={anosImage} className="feedback-avatar" alt="12 Anos de Escravidão" />
                <div className="feedback-content">
                  <p className="movie-title">
                    12 ANOS DE ESCRAVIDÃO
                    <span className="stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </p>
                  <p className="movie-details">
                    Gênero: Drama, Histórico<br />
                    Descrição: Baseado em uma história real, "12 Anos de Escravidão" narra a vida de Solomon Northup, um homem negro livre que é sequestrado e vendido como escravo...
                  </p>
                </div>
              </div>
            </div>
            <button className="btn-default">Ver mais avaliações</button>
          </div>
        </section>
      );
    };
    
    export default Feed;
    
