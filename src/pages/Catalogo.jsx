import React, { useEffect, useState, useMemo } from 'react';
import api from '../services/api';
import ItemCard from '../components/ItemCard';

// IMPORTAÇÃO DO HEADER E FOOTER
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

import './Catalogo.css';

export default function Catalogo() {

  const [itens, setItens] = useState([
    {
      id: 999,
      nome: "Item de Exemplo para Print",
      imagem: "/imgs/carrinho.png", // Usando uma imagem existente
      instituicao: "Sua Instituição",
      endereco: "Rua Fictícia, 123 - Bairro Modelo",
      status: "nova_doacao",
      tipo: "Brinquedo",
      disponibilidade: "disponivel",
      turno: "tarde",
      bairro: "Modelo"
    }
  ]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(false); // Desativado para o print
  const [erro, setErro] = useState('');

  // useEffect(() => {
  //   async function carregar() {
  //     try {
  //       const response = await api.get("/donations");
  //       setItens(response.data.data);
  //     } catch (error) {
  //       setErro('Erro ao carregar itens do catálogo.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   carregar();
  // }, []);

  // Filtragem dos itens
  const filtrados = useMemo(() => {
    return itens.filter((item) =>
      item.nome.toLowerCase().includes(busca.toLowerCase())
    );
  }, [itens, busca]);

  return (
    <>

      <Header />

      <main className="catalogo__container">

        <aside className="catalogo__filtros">
          <h2>Filtros</h2>
          <div className="filtro">
            <label>Categoria</label>
            <select>
              <option value="">Todas</option>
              <option value="Brinquedo">Brinquedo</option>
              <option value="Roupa">Roupa</option>
              <option value="Moveis">Móveis</option>
            </select>
          </div>
          <div className="filtro">
            <label>Bairro</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Centro</label>
              <label><input type="checkbox" /> Modelo</label>
            </div>
          </div>
        </aside>

        <section className="catalogo__conteudo">
          <div className="catalogo__busca">
            <input
              type="text"
              placeholder="Buscar item..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          {loading && <p>Carregando itens...</p>}
          {erro && <p className="erro">{erro}</p>}

          {/* Grid de cards */}
          <div className="catalogo__grid">
            {filtrados.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
