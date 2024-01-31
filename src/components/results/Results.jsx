import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'; 
import { useParams } from "react-router-dom";


import GlobalContext from '../Context/GlobalContext'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',  // Adjusted width
  maxWidth: '600px',  // Added maxWidth
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Results = ({input, text, finished}) => {
  const difficulty = useParams();

  const { isMultiplayer, updateIsMultiplayer,totalWordsP1, correctWordsP1, updateTotalWordsP1, updateCorrectWordsP1, num,
    updateNum, } = useContext(GlobalContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);}

  const [winner,setWinner] = useState("")

console.log(typeof(difficulty.difficulty));

  const textArray = text.split(" ").slice (1)
  const inputArray = input.split (" ")


  const [totalWordsP2, setTotalWordsP2] = useState(0)
  const [correctWordsP2, setCorrectWordsP2] = useState(0)

  const accuracy1 = Math.round ( (correctWordsP1/totalWordsP1) * 100)
  
  const accuracy2 = Math.round ( (correctWordsP2/totalWordsP2) * 100)


  const sendDataToServer = async () => {
    const difficultyValue = difficulty.difficulty
    console.log('Sending data:', { score: correctWordsP1, difficulty:difficultyValue  });
  
    try {
      const response = await axios.post('http://localhost:3001/api/data', { score : correctWordsP1, difficulty: difficultyValue });
      
      console.log(response.data);
    } catch (error) {
      console.error('Error sending data:', error);
      
    }
  };

 
  //CALCULATE THE SCORE 

  useEffect (() =>{

    //First player SCORE 

    if (num == 0){

    updateTotalWordsP1 (inputArray.length)
   
   

      let correctWordsCounter = 0;
      inputArray.forEach((element, index) => {
        if (inputArray[index] === textArray[index]) {
          correctWordsCounter += 1;
        }
      });
      updateCorrectWordsP1(correctWordsCounter);

    if(finished){
      handleOpen();
    }

  }

  //SECONDS PLAYER SCORE

  if (num == 2){
    setTotalWordsP2 (inputArray.length)
   
      let correctWordsCounter = 0;
      inputArray.forEach((element, index) => {
        if (inputArray[index] === textArray[index]) {
          correctWordsCounter += 1;
        }
      });
      setCorrectWordsP2(correctWordsCounter);
 

    if(finished){
      handleWinner();
      handleOpen();
    }
  }



  },[finished])



  const handleNewGame =  () => 
  {
    sendDataToServer();
    window.location.reload(false)
  }


  const handleSecondPlayer = () =>{
   setOpen(false)
   updateNum(2)

  }

  const handleWinner = ()=>{
    if (correctWordsP1 > correctWordsP2){
      setWinner("PLAYER 1")
    } else if (correctWordsP2 > correctWordsP1){
      setWinner("PLAYER 2")
    }else {
      setWinner("There is no winner we have a DRAW")
    }
  }





  return (

    <>
   
   <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* PLAYER 1 RESULTS */}
          <div style={{ marginBottom: '20px' }}>
            <Typography
              id="modal-modal-title"
              className='text-black'
              variant="h5"
              component="h2"
              sx={{ fontFamily: 'system-ui', mt: 2, fontSize: '18px', fontWeight: 'bold' }}
            >
              RESULTS Player 1
            </Typography>
            <Typography
              id="modal-modal-description"
              className='text-black'
              sx={{ mt: 2, fontSize: '18px', fontFamily: 'system-ui' }}
            >
              Total: {totalWordsP1} WPM
            </Typography>
            <Typography
              id="modal-modal-description"
              className='text-black'
              sx={{ mt: 2, fontSize: '18px', fontFamily: 'system-ui' }}
            >
              Correct: {correctWordsP1} WPM
            </Typography>
            <Typography
              id="modal-modal-description"
              className='text-black'
              sx={{ mt: 2, fontSize: '18px', fontFamily: 'system-ui' }}
            >
              Accuracy: {accuracy1} %
            </Typography>
          </div>

          {/* VS */}
          {num === 2 && (
            <Typography
              className='text-black'
              variant="h4"
              sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '24px', marginBottom: '20px' }}
            >
              VS
            </Typography>
          )}

          {/* PLAYER 2 RESULTS */}
          {num === 2 ? (
            <div style={{ marginBottom: '20px' }}>
              <Typography
                id="modal-modal-title"
                className='text-black'
                variant="h5"
                component="h2"
                sx={{ fontFamily: 'system-ui', mt: 2, fontSize: '18px', fontWeight: 'bold' }}
              >
                RESULTS Player 2
              </Typography>
              <Typography
                id="modal-modal-description"
                className='text-black'
                sx={{ mt: 2, fontSize: '18px', fontFamily: 'system-ui' }}
              >
                Total: {totalWordsP2} WPM
              </Typography>
              <Typography
                id="modal-modal-description"
                className='text-black'
                sx={{ mt: 2, fontSize: '18px', fontFamily: 'system-ui' }}
              >
                Correct: {correctWordsP2} WPM
              </Typography>
              <Typography
                id="modal-modal-description"
                className='text-black'
                sx={{ mt: 2, fontSize: '18px', fontFamily: 'system-ui' }}
              >
                Accuracy: {accuracy2} %
              </Typography>
              
              <Typography
                id="modal-modal-title"
                className='text-black'
                variant="h5"
                component="h2"
                sx={{ marginTop: '20px', fontFamily: 'system-ui', fontWeight: 'bold' }}
              >
                The Winner IS
              </Typography>
              <Typography
                id="modal-modal-description"
                className='text-black'
                sx={{
                  mt: 2,
                  fontSize: '18px',
                  fontFamily: 'system-ui',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  fontWeight: 'bold',
                }}
              >
                {winner}
              </Typography>
            </div>
          ) : null}

          {/* "Play Again" Button */}
          <Button
            onClick={isMultiplayer ? num === 2 ? handleNewGame : num === 0 ? handleSecondPlayer : () => {} : handleNewGame}
            variant="contained"
            color="primary"
            sx={{ mt: 2, mr: 2, fontFamily: 'system-ui' }}
          >
            {isMultiplayer ? num === 2 ? "Play Again" : num === 0 ? "Player 2 Turn" : "Default Multiplayer Message" : "Play Again"}
          </Button>

          {/* "Go to Main Menu" Button */}
          <Button
            onClick={() => { sendDataToServer(); window.location.href = 'http://localhost:5173/' }}
            variant="contained"
            color="secondary"
            sx={{ mt: 2, fontFamily: 'system-ui' }}
          >
            Go to Main menu
          </Button>
        </div>
      </Box>
    </Modal>

  </>
  )
}

export default Results