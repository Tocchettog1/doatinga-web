import React from 'react';
import './ItemCard.css';

export default function ItemCard({ item }) {
  return (
    <div className="card">
      {/* Selo de status */}
      {item.status && (
        <span
          className={`card__badge ${
            item.status === 'nova_doacao'
              ? 'card__badge--green'
              : 'card__badge--blue'
          }`}
        >
          {item.status === 'nova_doacao'
            ? 'Nova doação'
            : 'Recém-chegado'}
        </span>
      )}

      {/* Imagem (por enquanto placeholder) */}
      <div className="card__img-area">
        <div className="card__placeholder">🧸</div>
      </div>

      {/* Informações */}
      <div className="card__info">
        <h3 className="card__title">{item.nome}</h3>
        <p className="card__inst">{item.instituicao}</p>
        <p className="card__addr">{item.endereco}</p>
      </div>
    </div>
  );
}
