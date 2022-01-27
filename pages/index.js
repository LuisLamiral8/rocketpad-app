import Navbar from './components/Navbar'
import Article from './components/Article'
import Navigation from './components/Navigation.jsx'
import Snow from './components/Snow'
import Footer from './components/Footer'
import Head from 'next/head'
// Lupa del input
// Cards: Icono, Barrita, ajustar tamaños
export default function Home() {
  return (
    <div>
      <Head/>
      <Navbar/>
      <Navigation/>
      <Article/>
      <Footer/>
      <Snow/>
    </div>
  )
}
