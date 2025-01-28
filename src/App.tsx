import './App.scss'
import Consultation from './components/Consultation'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="app">
    <Header />
    <main>
      <Consultation />
    </main>
    <Footer />
  </div>
  )
}

export default App
