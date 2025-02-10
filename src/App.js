import React, { useState } from 'react';
import './App.css'; // Certifique-se de importar o arquivo CSS correto
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Configurações do carrossel
  const settings = {
    autoplay: true,        // Ativar rotação automática
    autoplaySpeed: 2000,   // Troca a cada 2 segundos (mais rápido)
    dots: true,            // Exibe os pontos de navegação
    infinite: true,        // Loop infinito
    speed: 300,            // Velocidade de transição mais rápida
    slidesToShow: 3,       // Mostrar 3 imagens ao mesmo tempo
    slidesToScroll: 1,     // Mover 1 slide por vez
    centerMode: true,      // Destaque na imagem do meio
    focusOnSelect: true,   // Permite clicar para focar na imagem
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      alert("Inscrição realizada com sucesso!");
      setFormData({ name: '', email: '', phone: '' });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="App">
      <div className="carousel-container">
        <Slider {...settings}>
          <div><img src="login.png" alt="Imagem 1" className="carousel-image" /></div>
          <div><img src="inicio.png" alt="Imagem 2" className="carousel-image" /></div>
          <div><img src="tela1.png" alt="Imagem 3" className="carousel-image" /></div>
          <div><img src="cond.png" alt="Imagem 4" className="carousel-image" /></div>
          <div><img src="IA.png" alt="Imagem 5" className="carousel-image" /></div>
        </Slider>
      </div>

      <div className="container">
        <div className="form-container">
          <h1 className="title">Faça sua Inscrição</h1>
          <p>Insira seus dados para receber notificações</p>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Número:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">Confirmar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
