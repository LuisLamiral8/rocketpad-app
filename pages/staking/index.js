import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation.jsx'
import Snow from '../components/Snow'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Staking from '../components/Staking'
// Lupa del input
// Cards: Icono, Barrita, ajustar tamaños
// Footer: Iconos
export default function Home() {
  return (
    <div>
      <Modal/>
      <Navbar/>
      <Navigation current="Staking"/>
      <Staking
      staked="0.000"
      unstaked="0.000"
      reward="0.000"
      />
      <Footer/>
      <Snow/>
    </div>
  )
}
