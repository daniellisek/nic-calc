import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Calculator} from './components/Calculator'


function App() {
  const [baseQuantity, setBaseQuantity] = useState(0);
  const [basePower, setBasePower] = useState(0);
  return (
    
    <div className="Container">
      <div className="Main">
        <h1>
          Kalkulator mocy liquidu
        </h1>
        <div className="ContMain">
          <h3>Liquid bazowy</h3>
          <Calculator 
            ilosc="Ilość liquidu bazowego [ml]" 
            moc="Moc liquidu bazowego [mg/ml]"
            value={baseQuantity}
            setValue={setBaseQuantity}
            value1={basePower}
            setValue1={setBasePower}
          />
          <h3>Liquid rozcieńczający</h3>
          {/* <Calculator 
            ilosc="Ilość liquidu rozcieńczającego [ml]" 
            moc="Moc liquidu rozcieńczającego [mg/ml]"
          />           */}
        </div>
      </div>
    </div>
  );
}

export default App;
// jebać kurwa biedaków