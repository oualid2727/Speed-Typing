import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const GlobalContextProvider = ({ children }) => {
    const [isMultiplayer, setIsMultiplayer] = useState(false);

    const [totalWordsP1, setTotalWordsP1] = useState(0);
    const [correctWordsP1, setCorrectWordsP1] = useState(0);
    const [num, setNum] = useState(0);

    const updateIsMultiplayer = (newValue) => {
        setIsMultiplayer(newValue);
      };
      

      const updateTotalWordsP1 = (newValue) => {
        setTotalWordsP1(newValue);
      };
    
      const updateCorrectWordsP1 = (newValue) => {
        setCorrectWordsP1(newValue);
      };

      const updateNum = (newValue) =>{
        setNum (newValue)
      }


      return (
        <GlobalContext.Provider
          value={{
            isMultiplayer,
            updateIsMultiplayer,
            totalWordsP1,
            updateTotalWordsP1,
            correctWordsP1,
            updateCorrectWordsP1,
            num,
            updateNum,
            
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
};

export default GlobalContextProvider;