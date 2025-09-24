import React from 'react';
import type { Noticia } from '../../types/News';


// export interface Noticia {
//   id: string;
//   titulo: string;
//   data: string;
//   conteudo: number;
//   imagem: string;
//   categorias:string[];
//   comentarios: {
//     nome: string;
//     texto: string
//   };
// }

interface NoticiaCardProps {
  noticia: Noticia;
  onDetalhe: (id: string) => void;
}

export const NoticiaCard: React.FC<NoticiaCardProps> = ({ noticia, onDetalhe }) => {
  const handleDetalhe = () => {
    if (window.confirm(`Ver detalhe "${noticia.titulo}"?`)) {
      onDetalhe(noticia.id);
    }
  };

  return (
    <div className="product-card">
      <div className="product-content">
        <h3 className="product-name">{noticia.titulo}</h3>
        <img src={noticia.imagem || '\assets\jornal.png'} alt={noticia.titulo}/>
        <p className="product-description">{noticia.conteudo}</p>
        <div className="product-footer">
          <span className="product-price">
            {noticia.data}
          </span>
          <button 
            className="delete-button"
            onClick={handleDetalhe}
            aria-label={`Ver noticia ${noticia.titulo}`}
          >
           Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};
