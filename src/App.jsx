
import './App.css'
import Contenedor from './components/Contenedor'
import List from './components/List'
import Menu from './components/Menu'

import ReactPlayer from 'react-player'
import Draggable from 'react-draggable';

function App() {

  return (
    <>
      <h1>Aprendiendo más react</h1>

      {/* <List /> */}

      {/* <Menu /> */}

      

      <Contenedor color={"purple"}>
        <li>febrero</li>
      </Contenedor>

      <Contenedor color={"magenta"}>
        <form action="">
          <button>marzo</button>
        </form>
      </Contenedor>

      {/* <Contenedor color="green">
          <List />
      </Contenedor> */}

      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' controls={true}/>

      <Draggable>
        <div>
          <Contenedor color={"red"}>
          <h1 style={{color: "blue"}}>enero</h1>
          <h2>patata</h2>
        </Contenedor>
        </div>
      </Draggable>

    </>
  )
}

export default App
