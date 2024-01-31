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
       <div className="bg-gradient-to-b from-blue-300 to-blue-500  min-h-screen ">
<div className="flex flex-row w-full">
       <img src="/images/unnamed.png" alt="Image1" class="flex  w-40 h-40 "/>
 <img src="/images/gentleman.svg" alt="Image1" class="flex  w-60 h-60 ml-auto "/>
 </div>
 <div className="flex flex-col items-center  justify-center ">
<h1 class="text-white text-4xl font-bold mb-8 shadow-lg  ">SPEED TIMING GAME</h1>




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
    <h1 class="text-blue-600 text-4xl font-bold mt-20 shadow-lg  "> Check your typing skills</h1>
</div>
<div className="flex flex-row w-full mt-40">
 <img src="/images/lady.svg" alt="Image2" class="flex  mr-20  w-20 h-30 "/>
 
 <img src="/images/jpk.png" alt="Image2" class="flex  w-40 h-40 ml-auto  "/>
</div>

</div>
        </>
    );
}
 
export default Menu;