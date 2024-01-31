import { useEffect, useState } from "react";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { PrismaClient } from '@prisma/client'

const prisma= new PrismaClient()




const Score = () => {

const [scores,setScores]=useState([])





useEffect (() =>{
  const fetchData = async () => {
    try {
      // Replace 'http://localhost:3001/api/data' with the actual backend API endpoint
      const response = await axios.get('http://localhost:3001/api/data', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',  // Adjust this based on your security requirements
        },
      });
      const sortedScores = [...response.data].sort((a, b) => b.score - a.score);
      setScores(sortedScores);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  console.log(scores);

},[])



    return ( 
        <>
         <div className="bg-gradient-to-b from-blue-300 to-blue-500  min-h-screen">
<div className="flex flex-row ">
      <img src="/images/unnamed.png" alt="Image1" class="flex  w-40 h-40 "/>
<img src="/images/gentleman.svg" alt="Image1" class="flex  w-60 h-60 ml-auto "/>
</div>
<div className="flex flex-col items-center  justify-center  ">
       
      <div >
        <h2 className="text-2xl font-bold mb-4 text-center">Tableau des Scores</h2>
      
        <TableContainer component={Paper} sx={{ backgroundColor: '#B0E0E6' }} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Score</TableCell>
            <TableCell align="center">Difficulty</TableCell>
            <TableCell align="center">Date</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
        {scores.map((scores) => (
            <TableRow
            key={scores.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {scores.score}
              </TableCell>
              <TableCell align="center">easy</TableCell>
              <TableCell align="center">{new Date(scores.date).toLocaleString()}</TableCell>
    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
   </div>

   
<div className="flex flex-row bottom mt-40">
<img src="/images/lady.svg" alt="Image2" class="flex  mr-20  w-20 h-30 "/>

<img src="/images/jpk.png" alt="Image2" class="flex  w-40 h-40 ml-auto  "/>
</div>

</div>
        </>
     );
}
 
export default Score;