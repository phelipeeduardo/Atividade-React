import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark app' : 'app'}>
      <Header />

      <div className="botao-area">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </div>

      <main className="cards-container">
        <Card
          titulo="Cappuccino"
          descricao="O mais pedido da loja."
          imagem="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        />

        <Card
          titulo="Latte"
          descricao="Uma bebida para quem quer acordar com calma."
          imagem="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
        />

        <Card
          titulo="Mocha"
          descricao="Um chocolate com café, uns dos melhores pedidos da loja."
          imagem="https://images.unsplash.com/photo-1517701604599-bb29b565090c"
        />

        <Card
          titulo="Expresso"
          descricao="O classico café intenso para acordar de vez."
          imagem="https://images.unsplash.com/photo-1511920170033-f8396924c348"
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
