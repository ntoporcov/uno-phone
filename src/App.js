import React from 'react';
import './App.css';

class NumberInput extends React.Component{
  render() {
    return(
        <div className={"oneNumberInput"+(this.props.focus?" focus":"")}>{this.props.number}</div>
    )
  }
}

class UnoInput extends React.Component{

  constructor(props){
    super(props);
    this.state={
      numbers:[null,null,null,null,null,null,null,null,null,null,],
      currentIndex:0,
    }
  }

  render() {
    const numbersArray = this.state.numbers;

    return (
        <div>
          <h1>Please Enter Your Phone Number</h1>
          <p style={{fontSize:12,lineHeight:0}}>By Playing UNO</p>
          <div className={"inputRow"}>
            {
              numbersArray.map((number,key) => <NumberInput key={key} number={number} focus={ key===this.state.currentIndex}/>)
            }
          </div>
        </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <UnoInput/>
    </div>
  );
}

export default App;
