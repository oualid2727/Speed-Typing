import { useEffect, useState } from "react";
import axios from 'axios';

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
      setScores(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(scores);
  fetchData();
},[])





    return ( 
        <>
        <body className="bg-blue-300 h-screen flex flex-col items-center justify-center relative">
        <img src="/images/unnamed.png" alt="Image1" className="absolute top-10 left-10 w-40 h-40 object-cover"/>
 <img src="/images/gentleman.svg" alt="Image1" className="absolute bottom-40 left-20 ml-20 w-60 h-60 object-cover"/>
 <img src="/images/lady.svg" alt="Image2" className="absolute top-40 right-20 mr-20  w-20 h-30 object-cover"/>
 
 <img src="/images/jpk.png" alt="Image2" className="absolute bottom-10 right-10 w-40 h-40 object-cover"/>

        <div className="flex h-screen items-center justify-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">Tableau des Scores</h2>
        <table className="border-collapse border-2  border-black">
          <thead>
            <tr>
              <th className="border-2  border-black  p-2">Score</th>
              <th className="border-2  border-black p-2">Date</th>
            </tr>
          </thead>
          <tbody>
         
         {scores.map((scores) => (
          <tr>
            <td key={scores.id} className="border-2 border-black p-2 ">{scores.score}</td>
           <td key={scores.id} className="border-2  border-black p-2">{new Date(scores.date).toLocaleString()}</td>
        </tr>
         ))
             


}
          </tbody>
        </table>
    


      </div>
    </div>
    </body>
        </>
     );
}
 
export default Score;