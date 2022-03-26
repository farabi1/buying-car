import './App.css';
import Bonus from './components/Bonus/Bonus';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
