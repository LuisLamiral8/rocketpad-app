import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation.jsx'
import Snow from '../components/Snow'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Tiers from '../components/Tiers'
// Lupa del input
// Cards: Icono, Barrita, ajustar tamaños
// Footer: Iconos
export default function Home() {
  return (
    <div>
      <Modal/>
      <Navbar/>
      <Navigation current="Tier System"/>
      <Tiers/>
      <Footer/>
      <Snow/>
    </div>
  )
}
