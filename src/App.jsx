import Card from "./components/Card"
import Header from "./components/Header"
import galaxy from './assets/galaxy.jpg'
function App() {

  return (
    <>
      <Header/>
        <div className="img-fundo">
          <img src={galaxy} alt="Galaxia" />
        </div>
        <main>
          <Card tittle="Galaxia" content="Descubra tudo sobre Galaxias espirais" author="Spider Newton"/>
        </main>
    </>
  )
}

export default App
