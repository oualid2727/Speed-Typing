import { Link } from "react-router-dom";
import GlobalContext from "../components/Context/GlobalContext"
import React, { useContext } from "react";

const Menu = () => {


    const { updateIsMultiplayer } = useContext(GlobalContext);

    const handleNewGameClick = () => {
      // Set isMultiplayer to false when New Game is clicked
      updateIsMultiplayer(false);
    };
  
    const handleMultiplayerClick = () => {
      // Set isMultiplayer to true when Multiplayer is clicked
      updateIsMultiplayer(true);
    };

    return (  
        <>
       <div class="bg-blue-300 h-screen flex flex-col items-center justify-center relative">

       <img src="/images/unnamed.png" alt="Image1" class="absolute top-10 left-10 w-40 h-40 object-cover"/>
 <img src="/images/gentleman.svg" alt="Image1" class="absolute bottom-40 left-20 ml-20 w-60 h-60 object-cover"/>
 <img src="/images/lady.svg" alt="Image2" class="absolute top-40 right-20 mr-20  w-20 h-30 object-cover"/>
 
 <img src="/images/jpk.png" alt="Image2" class="absolute bottom-10 right-10 w-40 h-40 object-cover"/>


<h1 class="text-white text-5xl font-bold mb-8 shadow-lg  ">SPEED TIMING GAME</h1>




    <Link
        to="levels"
        onClick={handleNewGameClick}
        className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:text-xl  hover:text-blue-300"
      >
        New Game
      </Link>

      <Link
        to="levels"
        onClick={handleMultiplayerClick}
        className="bg-blue-500 text-white px-5 py-2 rounded shadow-md mt-10 hover:text-xl hover:text-blue-300"
      >
        Multijoueur
      </Link>


    <Link to="score" class="bg-blue-500 text-white px-10 py-2 rounded shadow-md mt-10 hover:text-xl  hover:text-blue-300">Score</Link>
    <h1 class="text-blue-600 text-5xl font-bold mt-20 shadow-lg  "> Check your typing skills</h1>

</div>
        </>
    );
}
 
export default Menu;