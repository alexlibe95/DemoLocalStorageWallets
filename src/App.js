import React, { useState } from "react";
import './App.css';

function App() {

  const [walletArray, setWalletArray] = useState(localStorage.getItem('walletArray'));
  const [wallet, setWallet] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setWallet(event.target.value)
  }

  const handleChangeSelection = (event) => {
    setSelectedOption(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('New wallet address added: ' + wallet);

    if(!JSON.parse(localStorage.getItem('walletArray'))) {
      let walletArrayTemp = []
      walletArrayTemp.push(wallet)
      console.log(walletArrayTemp)
      localStorage.setItem('walletArray', JSON.stringify(walletArrayTemp))
      setWalletArray(JSON.stringify(walletArrayTemp))
    } else {
      let walletArrayTemp = JSON.parse(localStorage.getItem('walletArray'));
      walletArrayTemp.push(wallet)
      console.log(walletArrayTemp)
      localStorage.setItem('walletArray', JSON.stringify(walletArrayTemp))
      setWalletArray(JSON.stringify(walletArrayTemp))
    }
    event.preventDefault();
  }
  
  return (
    <div style={{marginLeft: '50px'}}>
      <pre>
        <h2>Setting Cookie Array for HotDogeTracker</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <span>Add Wallet Address: </span>
          <br /><br />
          <input type="text" onChange={(e) => handleChange(e)}></input>
          <input type="submit" value="Save Wallet Address"  style={{marginLeft: '20px'}}/>
          <br /><br />
          <span style={{fontWeight: 'bold',color: 'blue'}}>{walletArray}</span>
        </form>
        <br /><br />
        <span>Select Wallet Address: </span>
        <br /><br />
        {walletArray 
          ? <select value={selectedOption} onChange={(e) => handleChangeSelection(e)}>
            {JSON.parse(walletArray).map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
          : <span>first you have to insert one:)</span>
        }
      </pre>
    </div>
  );
}

export default App;
