import './App.scss'
import Componente1 from './components/Componente1'
import Componente2 from './components/Componente2'
import Cabeçalho from './components/Cabecalho'
import Rodape from './components/Rodape'
function app() {

  const paragrafo = {
    color: 'darkblue', 
    textAlign: 'justfy',
    fontSize: '1.5em'
  }

  return (
    <>
    <Cabeçalho/>
    <div className='div-app'>
      <h1>Introdução React</h1>
    </div>
    <p style={paragrafo}>primeiro teste.</p>
    <Componente1/>
    <Componente2/>
    <Rodape/>

    <section>
      <h2>Exemplo de uso de SASS</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Reprehenderit culpa iure eveniet aliquam eaque totam incidunt!</p> 
    </section>
    </>
  )
}

export default app