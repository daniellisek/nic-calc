import React, {useState} from "react";
import { Card } from "../Card/Card";
import { Container, Wrapper } from "./Calculator.styles";


export const Calculator = (props) => {
    const [baseQuantity, setBaseQuantity] = useState(0);
    const [basePower, setBasePower] = useState(0);
    const [diluteQuantity, setDiluteQuantity] = useState(0);
    const [dilutePower, setDilutePower] = useState(0);
    const [power, setPower] = useState(0);

    const calculate = () => {
        setPower(((diluteQuantity * dilutePower) + (baseQuantity * basePower)) / (baseQuantity + diluteQuantity))
    }

    return (
        <Container>
            <div>
                <h1>Kalkulator mocy liquidu</h1>
                <Wrapper>
                    <Card 
                        title="Liquid bazowy"
                        ilosc="Ilość liquidu bazowego [ml]" 
                        moc="Moc liquidu bazowego [mg/ml]"
                        value={baseQuantity}
                        setValue={setBaseQuantity}
                        value1={basePower}
                        setValue1={setBasePower}
                    />
                    <Card 
                        title="Liquid rozcieńczający"
                        ilosc="Ilość liquidu rozcieńczającego [ml]" 
                        moc="Moc liquidu rozcieńczającego [mg/ml]"
                        value={diluteQuantity}
                        setValue={setDiluteQuantity}
                        value1={dilutePower}
                        setValue1={setDilutePower}
                    /> 
                </Wrapper>
                <div>
                    <button onClick={calculate}>Oblicz</button>
                    <p>Moc: {Math.round(power * 100) / 100}</p> 
                </div>
            </div>
        </Container>
    )
}
