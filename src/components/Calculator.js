import React, {useState} from "react";

export const Calculator = (props) => {
    return (
        <div>
            <div className="title">
                <div className="container">
                    <div className="inputdiv">
                        {props.ilosc}
                        <input 
                            type="number" 
                            value={props.value}
                            onChange={(event) => {
                                props.setValue(event.target.value)
                            }}
                        />
                    </div>
                    <div className="inputdiv">
                        {props.moc}
                        <input 
                            type="number" 
                            value={props.value1}
                            onChange={(event) => {
                                props.setValue1(event.target.value)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
