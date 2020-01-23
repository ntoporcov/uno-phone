import React from 'react';
import './App.css';
import UnoInput from "./UnoInput";
import MetaTags from 'react-meta-tags';


function App() {
  return (
    <div className="App">
        <MetaTags>
            <title>Phone Entry By Uno</title>
            <meta name="description" content="Enter your phone number by playing Uno" />
            <meta property="og:title" content="Phone Entry By Uno" />
        </MetaTags>
      <UnoInput/>
    </div>
  );
}

export default App;
