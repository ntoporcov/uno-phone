import React from 'react';
import './App.css';
import deck from "./cards/deck";
import Card from "./cards/card";
import card0 from "./cards/public_card0.svg"
import cardBlock from "./cards/public_cardBlock.svg"
import cardChangeColor from "./cards/public_cardChangeColor.svg"
import cardReverse from "./cards/public_cardReverse.svg"
import cardWild2 from "./cards/public_cardWild2.svg"
import cardWild4 from "./cards/public_cardWild4.svg"
import Confetti from 'react-confetti'


class RandomCard extends React.Component{
    render() {
        return (
            <div className={"card"} role={"button"} onClick={this.props.callback}>
                <Card id={this.props.id} color={this.props.color}/>
            </div>
        )
    }
}

class NumberInput extends React.Component{
    render() {
        return(
            <div
                className={"oneNumberInput"+(this.props.focus?" focus":(this.props.past?" past":""))}
            >{this.props.number}</div>
        )
    }
}

class Instruction extends React.Component{
    render() {
        return (
            <div className={"instructionBox"}>
                <img className={"cardImg"} src={this.props.image}/>
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

class UnoInput extends React.Component{

    constructor(props){
        super(props);
        this.state={
            numbers:[null,null,null,null,null,null,null,null,null,null],
            currentColor:null,
            currentId:null,
            currentCard:{},
            deck:deck,
            cardTurn:{},
            handAmount:0,
            hand:[],
            errorMessage:null,
            done:false,
            failed:false
        }
    }

    drawCard = (handAmount) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        let cardTurn;
        const addCards = this.state.hand;

        for(let i=0;i<handAmount;i++){
            cardTurn = deck.shift();
            addCards.push(cardTurn);
        }

        this.setState({shuffle:deck,cardTurn:cardTurn,hand:addCards});
    };

    componentDidMount() {
        this.drawCard(5);
    }

    cardClick = (card,key) => {
        const _this = this;
        const numbers = this.state.numbers;
        const currentIndex = this.state.numbers.indexOf(null);
        const currentCard = this.state.currentCard;
        const currentColor = this.state.currentColor;
        const deck = this.state.deck;
        const hand = this.state.hand;
        const cardTurn = deck[0];

        function checkValidity(){
            return (
                card.color === currentColor ||
                card.color === null ||
                card.id === currentCard.id || false ||
                currentColor === null
            )
        }

        if(checkValidity()){
            hand.splice(key,1);
            deck.shift();
        }


        function delayAddCard(){
            if(deck.length>0){
                hand.push(cardTurn);
                _this.setState({hand:hand,errorMessage:null});
            }
        }

        function changeDigit(changeTo){
            const newNumbers = _this.state.numbers;
            const indexChange = changeTo===null?currentIndex-1:currentIndex;
            newNumbers[indexChange] = changeTo;

            _this.setState({
                numbers:newNumbers,
                currentColor: card.color,
                hand:hand,
                currentCard:card,
                errorMessage:null
            },() => delayAddCard());

            if(currentIndex === 9 && changeTo!==null){
                endGame();
                return false;
            }
        }

        function removeCard() {
            _this.setState({
                hand:hand,
                currentColor:card.color,
                currentId:card.id,
                currentCard:card,
                errorMessage:null
            },() => delayAddCard())
        }

        function addRandom(howMany,color){
            const newNumbers = numbers;
            for(let i=currentIndex;i<=currentIndex + howMany - 1;i++){
                if(i <= 9){
                    newNumbers[i] = Math.floor(Math.random() * Math.floor(9));
                    if(i === 9){
                        endGame();
                        return false;
                    }
                }else{
                    endGame();
                    return false;
                }
            }
            _this.setState({
                numbers:newNumbers,
                currentColor:color,
                currentId:card.id,
                currentCard:card,
                errorMessage:null
            },() => delayAddCard());
        }

        function endGame() {
            _this.setState({
                hand:[],
                deck:[],
                currentColor: null,
                done:true,
            });
        }

        //check if card can be played
        if(checkValidity()){

            //if card is number
            if(typeof card.value === 'number'){
                changeDigit(card.value);
                //if card is action
            }else{
                switch (card.id) {
                    //default is 'cardReverse'
                    default:
                        changeDigit(null);
                        break;
                    case'cardBlock':
                        removeCard();
                        break;
                    case'cardWild2':
                        addRandom(2,card.color);
                        break;
                    case 'cardWild4':
                        addRandom(4,null);
                        break;
                    case 'cardChangeColor':
                        _this.setState({currentColor:null,errorMessage:null},()=>delayAddCard());
                        break;
                }

            }

            //if it can't, tell user why
        }else{
            let errorMessage="";
            errorMessage+=' Wrong Color & Card';

            this.setState({errorMessage:errorMessage})
        }

    };

    resetHand = () =>{
        const _this = this;
        const deck = this.state.deck;
        function callback() {
            if(deck.length===0){
                _this.setState({failed:true,currentColor:null})
            }else{
                if(deck.length > 5 ){
                    _this.drawCard(5)
                }else{
                    _this.drawCard(deck.length);
                }
            }
        }

        this.setState({
            hand:[],
            errorMessage:null
        },()=>callback())
    };

    render() {
        const numbersArray = this.state.numbers;
        const hand = this.state.hand;
        const color = this.state.currentColor;
        const done = this.state.done;
        const fail = this.state.failed;
        const currentCard = this.state.currentCard;
        return (
            <div>
                <h1>Enter Your Phone Number</h1>
                <p style={{fontSize:12,lineHeight:0}}>By Playing UNO</p>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <div className={"inputRow"}>
                        {numbersArray.map((number,key) => <NumberInput key={key} number={number} shadowColor={this.state.currentColor} focus={ key===this.state.numbers.indexOf(null)} past={this.state.numbers.indexOf(null)>key}/>)}
                    </div>
                </div>
                <div className={"colors"}>
                    <div className={color==='#FF5555'||color===null?"colorBox active":"colorBox"} style={{backgroundColor:'#FF5555'}}>{color==='#FF5555'?currentCard.value:null}</div>
                    <div className={color==='#00AA00'||color===null?"colorBox active":"colorBox"} style={{backgroundColor:'#00AA00'}}>{color==='#00AA00'?currentCard.value:null}</div>
                    <div className={color==='#5555FF'||color===null?"colorBox active":"colorBox"} style={{backgroundColor:'#5555FF'}}>{color==='#5555FF'?currentCard.value:null}</div>
                    <div className={color==='#FFAA00'||color===null?"colorBox active":"colorBox"} style={{backgroundColor:'#FFAA00'}}>{color==='#FFAA00'?currentCard.value:null}</div>
                </div>
                <div style={{display:done || fail?"none":"block"}}>
                    <div style={{fontSize:18,marginBottom:10}}>
                        <span>{this.state.errorMessage}</span>
                    </div>
                    <div className={"cardsRow"}>
                        {hand.map((card,key) => <RandomCard key={key} id={card.id} color={card.color} callback={()=>this.cardClick(card,key)}/>)}
                    </div>
                    <div style={{fontSize:18,marginBottom:10}}>
                        <span>Cards Left On Deck: {this.state.deck.length}</span>
                    </div>
                    <button onClick={()=>this.resetHand()}>Discard Hand</button>
                    <p style={{fontSize:16,lineHeight:0,marginBottom:75}}>Your phone isn't sent anywhere, it's just a game</p>
                    <div className={"instructionCol"}>
                        <Instruction
                            image={card0} title={"Cards 0 to 9"}
                            description={"Adds the corresponding number to the phone number. Abides by and sets current color."}
                        />
                        <Instruction
                            image={cardReverse} title={"Reverses Card"}
                            description={"Resets previous number added to the phone number. Abides by and sets current color."}
                        />
                        <Instruction
                            image={cardBlock} title={"Block Card"}
                            description={"Removes card from current hand. Abides by and sets current color."}
                        />
                        <Instruction
                            image={cardWild2} title={"2 Wild Cards"}
                            description={"Adds 2 random numbers to Phone Number. Abides by and sets current color."}
                        />
                        <Instruction
                            image={cardWild4} title={"4 Wild Cards"}
                            description={"Adds 4 random numbers to Phone Number. Resets current color."}
                        />
                        <Instruction
                            image={cardChangeColor} title={"Change Color Card"}
                            description={"Resets current color."}
                        />
                    </div>
                </div>
                <div style={{display:done?"block":"none"}}>
                    {done?<Confetti width={window.innerWidth} height={window.innerHeight}/>:null}
                    <h1>Congratulations, you persistent bastard!</h1>
                    <p style={{marginBottom:0}}>Is this really your phone number?</p>
                    <h2 style={{marginTop:10}}>I don't fucking care!</h2>
                    <h3>But you did it! You played along and you deserve some confetti.</h3>
                </div>
                <div style={{display:fail?"block":"none"}}>
                    {done?<Confetti width={window.innerWidth} height={window.innerHeight}/>:null}
                    <h1>You failed.</h1>
                    <p style={{marginBottom:0}}>I gave you everything you needed.</p>
                    <h2 style={{marginTop:10}}>And you failed.</h2>
                </div>
            </div>
        )
    }
}

export default UnoInput;
