export interface Noticia {
  id: string;
  titulo: string;
  data: string;
  conteudo: string;
  imagem: string;
  categorias?: string[];
  comentarios?: Comentario[]
}

export interface Comentario{
    nome: string;
    texto: string;
}

export interface NoticiaFormData {
  titulo: string;
  data: string;
  conteudo: string;
  imagem: string;
  categorias?: string[];
}