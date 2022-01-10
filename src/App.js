import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Calculator} from './components/Calculator'


function App() {
  const [baseQuantity, setBaseQuantity] = useState(0);
  const [basePower, setBasePower] = useState(0);
  const [diluteQuantity, setDiluteQuantity] = useState(0);
  const [dilutePower, setDilutePower] = useState(0);
  const [power, setPower] = useState(0);

  const calculate = () => {
    console.log(typeof diluteQuantity)
    // setPower((diluteQuantity * dilutePower) / (baseQuantity + diluteQuantity))
    setPower(((diluteQuantity * dilutePower) + (baseQuantity * basePower)) / (baseQuantity + diluteQuantity))
  }

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
          <Calculator 
            ilosc="Ilość liquidu rozcieńczającego [ml]" 
            moc="Moc liquidu rozcieńczającego [mg/ml]"
            value={diluteQuantity}
            setValue={setDiluteQuantity}
            value1={dilutePower}
            setValue1={setDilutePower}
          /> 
          <br /> 
          <button onClick={calculate}>Oblicz</button>
          <p>Moc: {Math.round(power * 100) / 100}</p>        
        </div>
      </div>
    </div>
  );
}

export default App;
// jebać kurwa biedaków