import Navbar from '../../components/Navbar'
import Navigation from '../../components/Navigation.jsx'
import TokenPage from '../../components/TokenPage'
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
      current="Token 2"
      />
      <TokenPage
      name="Token 2"
      />
      <Footer/>
      <Snow/>
    </div>
  )
}
