import './App.css';
import { Counter } from './components/Counter-UseState';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <h1> No eS uNa EtApA mAma </h1>
      <Counter initialValue={0}/>
      <Counter initialValue={100}/>
      </header>
    </div>
  );
}

export default App;
