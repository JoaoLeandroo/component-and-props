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
          <Card tittle="Planetas" content="Os maiores exoplanetas descobertos" author="Stehan" classEdit="card2"/>
          <Card tittle="Buracos Negros" content="Primeiro buraco negro descoberto" author="Victoria"/>
        </main>
    </>
  )
}

export default App
