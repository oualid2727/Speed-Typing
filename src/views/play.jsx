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
       <div className={!textImported ? "bg-gradient-to-b from-blue-300 to-blue-500 min-h-screen": "bg-gradient-to-b from-blue-300 to-blue-500 min-h-screen"}>
<div className="flex flex-row w-full">
       <img src="/images/unnamed.png" alt="Image1" class="flex  w-40 h-40 "/>
 <img src="/images/gentleman.svg" alt="Image1" class="flex  w-60 h-60 ml-auto "/>
 </div>
 <div className="flex flex-col items-center  justify-center  ">


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
<div className={!textImported ? "flex flex-row w-full mt-40": "flex flex-row w-full mt-40"}>
 <img src="/images/lady.svg" alt="Image2" class="flex  mr-20  w-20 h-30 "/>
 
 <img src="/images/jpk.png" alt="Image2" class="flex  w-40 h-40 ml-auto  "/>
</div>

</div>
        </>
);
}
 
export default Play;