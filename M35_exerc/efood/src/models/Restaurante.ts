class Restaurante {
  nome: string
  categoriaDestaque: string[]
  descricao: string
  imagem: string
  nota: number
  url?: string
  id: number

  constructor(
    nome: string,
    categoriaDestaque: string[],
    descricao: string,
    imagem: string,
    nota: number,
    id: number,
    url?: string
  ) {
    this.nome = nome
    this.categoriaDestaque = categoriaDestaque
    this.descricao = descricao
    this.imagem = imagem
    this.nota = nota
    this.url = url
    this.id = id
  }
}

export default Restaurante
