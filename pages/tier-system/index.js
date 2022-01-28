import Navbar from '../components/Navbar'
import Article from '../components/Article'
import Navigation from '../components/Navigation.jsx'
import Snow from '../components/Snow'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

// Lupa del input
// Cards: Icono, Barrita, ajustar tamaños
// Footer: Iconos
export default function Home() {
  return (
    <div>
      <Modal/>
      <Navbar/>
      <Navigation current="Tier System"/>
      <Footer/>
      <Snow/>
    </div>
  )
}
