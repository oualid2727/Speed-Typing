import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './views/menu.jsx'
import Diff from './views/dificulties.jsx'
import Play from './views/play.jsx'
import Score from './views/score.jsx'
import GlobalContextProvider from './components/Context/GlobalContextProvider.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>
  },
  {
    path: "/levels/",
    element: <Diff/>
  },

  {
    path: "/levels/play/:difficulty",
    element: <Play/>
  },
  {
    path: "/score",
    element: <Score/>
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalContextProvider>
      <RouterProvider router={router} />
 
      </GlobalContextProvider>
  </React.StrictMode>,
)
