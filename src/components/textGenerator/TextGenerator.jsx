import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const EndpointAPI = "https://api.quotable.io/random"

function TextGenerator({getParagraph, textImported, setTextImported}) {
    const difficulty = useParams();
    const [displayText,setDisplayText] =  useState("");



    const shuffleString = (str) => {
      const array = str.split('');
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array.join('');
    };

  //Easy DIFFICULTY

    const getTexteasy = async() => {

        let paragraph = ""
      
        for (let i = 0; i< 6; i++){
          const response = await axios.get(EndpointAPI)
          let new_paragraph = response.data.content
          paragraph = paragraph +  " " + new_paragraph
      
        }
        setDisplayText(paragraph)

        return paragraph
      }



      // MEDIUM DIFFICULTY

      const getTextMedium = async() => {

        let paragraph = '';

        for (let i = 0; i < 6; i++) {
          const response = await axios.get(EndpointAPI);
          let newParagraph = response.data.content;
          
        
          newParagraph = newParagraph
            .split('')
            .map((char, charIndex) =>
              charIndex % 2 === 1 ? char.toUpperCase() : char
            )
            .join('');
    
          paragraph = paragraph + ' ' + newParagraph;
        
        }
        setDisplayText(paragraph);
    
        return paragraph;

        
      }

      //HARD DIFFICULTY

      const getTexthard = async () => {
        let paragraph = '';
    
        for (let i = 0; i < 6; i++) {
          const response = await axios.get(EndpointAPI);
          let newParagraph = response.data.content;
    
          // Convert every other character to uppercase
          newParagraph = newParagraph
            .split('')
            .map((char, charIndex) =>
              charIndex % 2 === 1 ? char.toUpperCase() : char
            )
            .join('');
    
          // Shuffle the content of newParagraph
          newParagraph = shuffleString(newParagraph);
    
          paragraph = paragraph + ' ' + newParagraph;
      
        }
        setDisplayText(paragraph);
    
        return paragraph;
      };



      const sendDataUp = async () =>{
        let value = ""
        if (difficulty.difficulty == 'easy'){
          value = await getTexteasy()
        }else if (difficulty.difficulty == 'medium'){
          value = await getTextMedium()
        }else if (difficulty.difficulty == 'hard'){
          value = await getTexthard()
        }
      
        getParagraph(value)
        setTextImported(true)
      }


  return (
    <div className={textImported && "hidden"}>
    <button onClick={sendDataUp} className="text-black">GENERATE</button>
    </div>
  )
}

export default TextGenerator