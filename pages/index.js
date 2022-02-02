import Navbar from './components/Navbar'
import Article from './components/Article'
import Navigation from './components/Navigation.jsx'
import Snow from './components/Snow'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Cursor from './components/Cursor'

// Lupa del input
// Cards: Icono, Barrita, ajustar tamaños
// Footer: Iconos
export default function Home() {


  return (
    <div>
      {/* <Cursor/> */}
      <Modal/>
      <Navbar/>
      <Navigation 
      current="Project"
      />
      <Article/>
      <Footer/>
      <Snow/>



    </div>
  )
}
