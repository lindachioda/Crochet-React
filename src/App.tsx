import logo from "./assets/crochetlogo-width.png"
import './App.css'
import { Menu } from './components';

function App() {
  return (
    <div className="App">
      <section className="section-center">
        <div className="container-logo">
           <h3>My Crochet</h3>
           <img className="logo" src={logo} alt="logo"/>
        </div>
        <Menu/>
      </section>
    </div>
  )
}

export default App;
