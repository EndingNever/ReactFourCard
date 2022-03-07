import logo from './logo.svg';
import Tb from './components/teambuilder/Tb';
import Calculator from './components/calculator/calculator';
import Karma from './components/karma/karma';
import Supervisor from './components/supervisorCard/Supervisor';
import './App.css';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
      <Body />
      <div className='cardContainer'>
        <div className='left'>
          <Supervisor />
        </div>
        <div className='mid'>
          <Tb />
          <Karma />
        </div>
        <div className='right'>
          <Calculator />
        </div>
      </div>

    </div>
  );
}

export default App;
