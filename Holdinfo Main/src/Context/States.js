import React from 'react'
import tickerContext from "./context";
import { useState } from "react";


const States = (props) => {

const [ticker, setticker] = useState([]);

    const getTickers = async() => {
        try {
          const result = await fetch('http://localhost:5000/fetchticker', {
            method: "GET",
          });
      const tickers = await result.json(); 
        setticker(tickers)
    } catch (error) {
      console.error("Error:", error);
    }
    }

  

  return (
    <div>
    <tickerContext.Provider value={{getTickers,ticker}}>
      {props.children}
    </tickerContext.Provider>
    </div>
  )
}

export default States;