import React, { useState, useEffect } from 'react';

function App() {
  // Estado para armazenar os dados do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Estado para contar os visitantes e os submits
  const [visitorCount, setVisitorCount] = useState(0);
  const [formSubmitCount, setFormSubmitCount] = useState(0);

  // Efeito para contar o número de visitantes
  useEffect(() => {
    // Atualiza o contador de visitantes
    const storedVisitorCount = localStorage.getItem('visitorCount');
    const newVisitorCount = storedVisitorCount ? parseInt(storedVisitorCount) + 1 : 1;
    setVisitorCount(newVisitorCount);
    localStorage.setItem('visitorCount', newVisitorCount.toString());
  }, []);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples para garantir que todos os campos estão preenchidos
    if (!name || !email || !phone) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Atualiza o contador de formulários submetidos
    const newFormSubmitCount = formSubmitCount + 1;
    setFormSubmitCount(newFormSubmitCount);
    localStorage.setItem('formSubmitCount', newFormSubmitCount.toString());

    // Limpa os campos após o envio
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h1>Formulário de Contato</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Número:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Confirmar</button>
      </form>

      <div>
        <h2>Estatísticas</h2>
        <p>Visitantes na página: {visitorCount}</p>
        <p>Pessoas que preencheram o formulário: {formSubmitCount}</p>
      </div>
    </div>
  );
}

export default App;
