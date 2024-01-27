import { Link } from "react-router-dom";



const Diff = () => {
    return ( 
        <>
        <body class="bg-blue-300 h-screen flex flex-col items-center justify-center relative">
 
 
 <img src="/images/unnamed.png" alt="Image1" class="absolute top-10 left-10 w-40 h-40 object-cover"/>
 <img src="/images/gentleman.svg" alt="Image1" class="absolute bottom-40 left-20 ml-20 w-60 h-60 object-cover"/>
 <img src="/images/lady.svg" alt="Image2" class="absolute top-40 right-20 mr-20  w-20 h-30 object-cover"/>
 
 <img src="/images/jpk.png" alt="Image2" class="absolute bottom-10 right-10 w-40 h-40 object-cover"/>
 

     <Link to="play/easy" class="bg-blue-500 text-white px-10 py-2 rounded shadow-md hover:text-xl  hover:text-blue-300">Easy</Link>
     <Link to="play/medium" class="bg-blue-500 text-white px-6 py-2 rounded shadow-md mt-20 hover:text-xl hover:text-blue-300">Medium</Link>
     <Link to="play/hard" class="bg-blue-500 text-white px-8 py-2 rounded shadow-md mt-20 hover:text-xl  hover:text-blue-300">Hard</Link>

 
 
 </body>
         </>
     );
}
 
export default Diff;