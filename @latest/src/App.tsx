import { useState } from 'react';
import { NoticiaPage } from './pages/ProductsPage';
import ImagemNoticia from './assets/jornal.png'

import './App.css';
import type { Noticia } from './types/News';

// Constantes para definir as páginas possíveis
const PAGE_TYPES = {
  PRODUCTS: 'products',
  CREATE: 'create'
} as const;

type PageType = typeof PAGE_TYPES[keyof typeof PAGE_TYPES];

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(PAGE_TYPES.PRODUCTS);
  const [products, setProducts] = useState<Noticia[]>([
  {
    id: '1',
    titulo: 'FIAP LANÇA NOVO CURSO',
    data: '24/09/2025',
    conteudo:'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur adipiscing',
    imagem:ImagemNoticia,
    categorias:['Educação', 'Marketing', 'Cursos', 'Tecnologia'],
    comentarios:[
        {
        nome: 'João silva',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
        {
        nome: 'Maria João',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
                {
        nome: 'Gabriel Silva',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
                {
        nome: 'Carlos Melo',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
    ]
  },
    {
    id: '2',
    titulo: 'UNIP LANÇA NOVO CURSO',
    data: '24/09/2025',
    conteudo:'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur adipiscing',
    imagem:ImagemNoticia,
    categorias:['Educação', 'Marketing', 'Cursos', 'Tecnologia'],
    comentarios:[
        {
        nome: 'João silva',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
        {
        nome: 'Maria João',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
                {
        nome: 'Gabriel Silva',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
                {
        nome: 'Carlos Melo',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
    ]
  },
    {
    id: '3',
    titulo: 'UBC LANÇA NOVO CURSO',
    data: '24/09/2025',
    conteudo:'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur adipiscing',
    imagem:ImagemNoticia,
    categorias:['Educação', 'Marketing', 'Cursos', 'Tecnologia'],
    comentarios:[
        {
        nome: 'João silva',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
        {
        nome: 'Maria João',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
                {
        nome: 'Gabriel Silva',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
                {
        nome: 'Carlos Melo',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing,Lorem ipsum dolor sit amet'
        },
    ]
  }]);

  const handleNavigateToCreate = () => {
    setCurrentPage(PAGE_TYPES.CREATE);
  };

  const handleDetalheNoticia = (id: string) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  return (
    <div className="app">
      {currentPage === PAGE_TYPES.PRODUCTS && (
        <NoticiaPage
          noticias={products}
          onNavigateToCreate={handleNavigateToCreate}
          onDetalheNoticia={handleDetalheNoticia}
        />
      )}
    </div>
  );
}

export default App;
