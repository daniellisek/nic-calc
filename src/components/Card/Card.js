import React, {useState} from "react";
import { Container, StyledLabel } from "./Card.styles";

export const Card = (props) => {
    return (
        <Container>
            <h3>{props.title}</h3>
            <div>
                <StyledLabel>
                    {props.ilosc}
                    <input 
                        type="number" 
                        value={props.value}
                        onChange={(event) => {
                            props.setValue(parseInt(event.target.value))
                        }}
                    />
                </StyledLabel>
                <StyledLabel>
                    {props.moc}
                    <input 
                        type="number" 
                        value={props.value1}
                        onChange={(event) => {
                            props.setValue1(parseInt(event.target.value))
                        }}
                    />
                </StyledLabel>
            </div>
        </Container>
    )
}
