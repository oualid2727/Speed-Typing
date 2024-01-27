import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import FormInput from "../components/FormInput";
import Results from "../components/results/Results";
import TextGenerator from "../components/textGenerator/TextGenerator";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import GlobalContext from "../components/Context/GlobalContext"





const Play = () => {

  const {num, updateNum}= useContext(GlobalContext);
 
const [text,setText] = useState("")
const [input, setInput] = useState("")
const [textImported, setTextImported] = useState(false)

const [startTime, setStartTime] = useState(false)
const [finished, setFinished] = useState(false)

const getParagraph = (paragraph) =>{
  setText(paragraph)
}

useEffect(()=>{
  //console.log(num)
  if (num == 2){
    setTextImported(false)
    setStartTime(false)
    setFinished(false)
  }

},[num])



return (
  <>
    <div className="bg-gradient-to-b from-blue-300 to-blue-500 h-screen flex flex-col items-center justify-center relative">
      <img src="/images/unnamed.png" alt="Image1" className="absolute top-10 left-10 w-40 h-40 object-cover"/>
      <img src="/images/gentleman.svg" alt="Image1" className="absolute bottom-20 left-20 ml-20 w-60 h-60 object-cover"/>
      <img src="/images/lady.svg" alt="Image2" className="absolute top-40 right-20 mr-20 w-20 h-30 object-cover"/>
      <img src="/images/jpk.png" alt="Image2" className="absolute bottom-10 right-10 w-40 h-40 object-cover"/>
      <h1 className="">Check your typing skills</h1>
      <div className="flex h-screen items-center justify-center">

        <div className="bg-blue-600 border text-white border-blue-600 p-8 rounded-md max-w-3xl">
        


         <TextGenerator
         getParagraph = {getParagraph}
         textImported = {textImported}
         setTextImported = {setTextImported}
         />

         <CountdownTimer
         startTime = {startTime}
         setStartTime ={setStartTime}
         setFinished = {setFinished}
         />




        <FormInput
          text ={text}
          input = {input}
          setInput={setInput}
          textImported={textImported}
          startTime = {startTime}
        />

      <Results
          text ={text}
          input = {input}
          finished={finished}
          />

    <div className="text-black items-center">
      <button  className={!textImported && "hidden"} onClick={() => setStartTime(true)}>Start Typing</button>
    </div>
    
    

        </div>
      </div>
    </div>
  </>
);
}
 
export default Play;