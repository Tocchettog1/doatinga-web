import React, { useEffect, useState, useMemo } from 'react';
import { fetchCatalogItems } from '../services/catalogApi';
import ItemCard from '../components/ItemCard';
import './Catalogo.css';

export default function Catalogo() {
  const [itens, setItens] = useState([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  // Carregar dados do JSON
  useEffect(() => {
    async function carregar() {
      try {
        const data = await fetchCatalogItems();
        setItens(data);
      } catch (e) {
        setErro(e.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  // Filtrar pela busca
  const filtrados = useMemo(() => {
    const q = busca.toLowerCase();
    return itens.filter(i => i.nome.toLowerCase().includes(q));
  }, [itens, busca]);

  if (loading) return <p>Carregando catálogo...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div className="catalogo__container">
      {/* ================= FILTROS ================= */}
      <aside className="catalogo__filtros">
        <h2>Filtros</h2>

        <div className="filtro">
          <label>Localização</label>
          <select>
            <option>Adicionar bairro</option>
          </select>
        </div>

        <div className="filtro">
          <label>Horário de retirada</label>
          <select>
            <option>Adicionar turno</option>
          </select>
        </div>

        <div className="filtro">
          <label>Doar ou retirada</label>
          <div className="checkbox-group">
            <label><input type="checkbox" /> Disponível para retirar</label>
            <label><input type="checkbox" /> Precisa de doação</label>
          </div>
        </div>

        <div className="filtro">
          <label>Tipo de doação</label>
          <div className="checkbox-group">
            <label><input type="checkbox" /> Comida</label>
            <label><input type="checkbox" /> Roupas</label>
            <label><input type="checkbox" /> Itens de higiene</label>
            <label><input type="checkbox" /> Utensílios domésticos</label>
            <label><input type="checkbox" /> Água</label>
          </div>
        </div>
      </aside>

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <main className="catalogo__conteudo">
        {/* Barra de busca */}
        <div className="catalogo__busca">
          <input
            type="text"
            placeholder="Buscar itens por nome"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Grid de cards */}
        <div className="catalogo__grid">
          {filtrados.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
