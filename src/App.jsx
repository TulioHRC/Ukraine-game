import './App.css';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <Game 
        image1={'putin.png'} 
        image2={'https://static.poder360.com.br/2022/02/azov-fev-2022-848x477.jpeg'} 
        image3={'Ukranian.png'} 
        image4={'elefante.png'} 
      />
    </div>
  );
}

export default App;
