import { useState } from 'react';
import { NoticiaPage } from './pages/ProductsPage';
import { CreateProductPage } from './pages/CreateProductPage';
import type { Noticia } from './types/noticia';
import './App.css';

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
      name: 'Smartphone Galaxy Pro',
      description: 'Smartphone com tela de 6.7 polegadas, câmera de 108MP e 256GB de armazenamento. Ideal para uso profissional e pessoal.',
      price: 2599.99
    },
    {
      id: '2',
      name: 'Notebook Gamer Ultra',
      description: 'Notebook gamer com processador Intel i7, 16GB RAM, SSD 1TB e placa de vídeo RTX 4060. Perfeito para jogos e trabalho.',
      price: 4999.90
    },
    {
      id: '3',
      name: 'Fone Bluetooth Premium',
      description: 'Fone de ouvido sem fio com cancelamento de ruído ativo, 30 horas de bateria e qualidade de som Hi-Fi.',
      price: 599.50
    }
  ]);

  const handleNavigateToCreate = () => {
    setCurrentPage(PAGE_TYPES.CREATE);
  };

  const handleNavigateToProducts = () => {
    setCurrentPage(PAGE_TYPES.PRODUCTS);
  };

  const handleAddProduct = (newProduct: Noticia) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
    setCurrentPage(PAGE_TYPES.PRODUCTS); // Voltar para listagem após criar
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
      
      {currentPage === PAGE_TYPES.CREATE && (
        <CreateProductPage
          onAddProduct={handleAddProduct}
          onCancel={handleNavigateToProducts}
        />
      )}
    </div>
  );
}

export default App;
