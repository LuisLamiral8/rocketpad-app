import Navbar from '../../components/Navbar'
import Navigation from '../../components/Navigation.jsx'
import Snow from '../../components/Snow'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'

// Lupa del input
// Cards: Icono, Barrita, ajustar tamaños
// Footer: Iconos
export default function Home() {
  return (
    <div>
      <Modal/>
      <Navbar/>
      <Navigation 
      current="Token 4"
      />
      <Footer/>
      <Snow/>
    </div>
  )
}
