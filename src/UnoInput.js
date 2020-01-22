import React from 'react';
import './App.css';
import deck from "./deck";
// const card = require.context('../public/cards', true);
import {ReactComponent as Card0} from "./cards/card0.svg";
import {ReactComponent as Card1} from "./cards/card1.svg";
import {ReactComponent as Card2} from "./cards/card2.svg";
import {ReactComponent as Card3} from "./cards/card3.svg";
import {ReactComponent as Card4} from "./cards/card4.svg";
import {ReactComponent as Card5} from "./cards/card5.svg";
import {ReactComponent as Card6} from "./cards/card6.svg";
import {ReactComponent as Card7} from "./cards/card7.svg";
import {ReactComponent as Card8} from "./cards/card8.svg";
import {ReactComponent as Card9} from "./cards/card9.svg";
import {ReactComponent as CardBlock} from "./cards/cardBlock.svg";
import {ReactComponent as CardReverse} from "./cards/cardReverse.svg";
import {ReactComponent as CardWild2} from "./cards/cardWild2.svg";
import {ReactComponent as CardChangeColor} from "./cards/cardChangeColor.svg";
import {ReactComponent as CardWild4} from "./cards/cardWild4.svg";

function randomCard(){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    const randomCard = deck.shift();
    return (
            <Card0 style={{fill:randomCard.color}}/>
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
                </div>
            </div>
        )
    }
}

export default UnoInput;
