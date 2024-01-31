import { Link } from "react-router-dom";



const Diff = () => {
    return ( 
        <>
            <div className="bg-gradient-to-b from-blue-300 to-blue-500 h-full min-h-screen">
<div className="flex flex-row   w-full">
       <img src="/images/unnamed.png" alt="Image1" class="flex  w-40 h-40 "/>
 <img src="/images/gentleman.svg" alt="Image1" class="flex  w-60 h-60 ml-auto "/>
 </div>
 <div className="flex flex-col items-center  justify-center   ">
 <h1 class="text-blue-600 text-4xl font-bold mt-10 mb-20 "> Choose your difficulty</h1>

     <Link to="play/easy" class="bg-blue-500 text-white px-10 py-2 rounded shadow-md hover:text-xl  hover:text-blue-300">Easy</Link>
     <Link to="play/medium" class="bg-blue-500 text-white px-6 py-2 rounded shadow-md mt-20 hover:text-xl hover:text-blue-300">Medium</Link>
     <Link to="play/hard" class="bg-blue-500 text-white px-8 py-2 rounded shadow-md mt-20 hover:text-xl  hover:text-blue-300">Hard</Link>

 
     </div>
<div className="flex flex-row w-full mt-40">
 <img src="/images/lady.svg" alt="Image2" class="flex  mr-20  w-20 h-30 "/>
 
 <img src="/images/jpk.png" alt="Image2" class="flex  w-40 h-40 ml-auto  "/>
</div>

</div>
        </>
     );
}
 
export default Diff;