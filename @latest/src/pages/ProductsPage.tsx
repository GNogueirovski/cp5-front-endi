import React from 'react';

import type { Noticia } from '../types/News';
import { NoticiaCard } from '../components/NoticiaCard/NoticiaCard';
import Footer from '../components/Footer/Footer';

interface NoticiaPageProps {
  noticias: Noticia[];
  onNavigateToCreate: () => void;
  onDetalheNoticia: (id: string) => void;
}

export const NoticiaPage: React.FC<NoticiaPageProps> = ({ 
  noticias, 
  onNavigateToCreate, 
  onDetalheNoticia 
}) => {
  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Noticias</h1>
        <button onClick={onNavigateToCreate} className="add-button">
          ➕ Adicionar comentario
        </button>
      </header>

      <main className="products-container">
        {noticias.length === 0 ? (
          <div className="empty-state">
            <p>Não há noticias disponíveis</p>
            <button onClick={onNavigateToCreate} className="create-first-button">
              Criar primeiro noticia
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {noticias.map(noticia => (
              <NoticiaCard
                key={noticia.id}
                noticia={noticia}
                onDetalhe={onDetalheNoticia}
              />
            ))}
          </div>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};
