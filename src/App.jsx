import './App.css'
import Componente1 from './components/Componente1'
import Componente2 from './components/Componente2'
function app() {

  const paragrafo = {
    color: 'darkblue', 
    textAlign: 'justfy',
    fontSize: '1.5em'
  }

  return (
    <>
    <div className='div-app'>
      <h1>Introdução React</h1>
    </div>
    <p style={paragrafo}>primeiro teste.</p>
    <Componente1/>
    <Componente2/>
    </>
  )
}

export default app