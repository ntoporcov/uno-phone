import React from 'react';
import './App.css';
import deck from "./cards/deck";
import Card from "./cards/card";

function randomCard(){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    const randomCard = deck.shift();
    return (
        <div className={"card"} role={"button"}>
            <Card id={randomCard.id} color={randomCard.color}/>
        </div>
)
}

class NumberInput extends React.Component{
    render() {
        return(
            <div className={"oneNumberInput"+(this.props.focus?" focus":(this.props.past?" past":""))}>{this.props.number}</div>
        )
    }
}

class UnoInput extends React.Component{

    constructor(props){
        super(props);
        this.state={
            numbers:[null,null,null,null,null,null,null,null,null,null],
            currentColor:null,
            currentNumber:null
        }
    }

    render() {
        const numbersArray = this.state.numbers;
        return (
            <div>
                <h1>Please Enter Your Phone Number</h1>
                <p style={{fontSize:12,lineHeight:0}}>By Playing UNO</p>
                <div className={"inputRow"}>
                    {numbersArray.map((number,key) => <NumberInput key={key} number={number} focus={ key===this.state.numbers.indexOf(null)} past={this.state.numbers.indexOf(null)>key}/>)}
                </div>
                <div className={"cardsRow"}>
                    {randomCard()}
                    {randomCard()}
                    {randomCard()}
                    {randomCard()}
                    {randomCard()}
                </div>
            </div>
        )
    }
}

export default UnoInput;
