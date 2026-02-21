import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header'
import './App.css'
import { Inicio } from './pages/Inicio/Inicio'
import { Footer } from './components/Footer/Footer'
import { SobreMi } from './pages/SobreMi/SobreMi'
import { Galeria } from './pages/Galeria/Galeria'
import { Contacto } from './pages/Contacto/Contacto'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/sobre-mi" element={<SobreMi />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
        
      </BrowserRouter>
    </>
  )
}

export default App
