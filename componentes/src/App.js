import './App.css';
import DigaMeuNome from './components/DigaMeuNome';
import Frases from './components/Frases';
import HelloWord from './components/HelloWord';

function App() {
  return (
    <div className="Container">
        <h1>Olá Mundo</h1>
        <HelloWord/>
        <Frases/>
        <DigaMeuNome nome="Junkrat" idade="20" profissao="Maluco"/>
    </div>
  );
}

export default App;
