function Card({ titulo, descricao, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />

      <h2>{titulo}</h2>

      <p>{descricao}</p>

      <button>Comprar</button>
    </div>
  )
}

export default Card
