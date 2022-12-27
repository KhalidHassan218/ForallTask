import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import OurProducts from './pages/OurProducts/OurProducts';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home'
import Footer from './components/Footer/Footer';
import React,{useState} from 'react';
import amazon from './Assets/amazon.png'
import aramex from './Assets/aramex.png'
import Hitachi from './Assets/Hitachi-Logo.png'
import {useParams} from 'react-router-dom'


function App() {
const {id} =useParams()
  const providers = [

    {
   img:amazon,
   name:'amazon'

    },
    {
   img:aramex,
   name:'aramex'

    },
    {
   img:Hitachi,
   name:'hitachi'

    },
]






  const [apiData, setapiData] = useState([])
  const [clickedProvider, setclickedProvider] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
<Route path="/" element={<Home apiData={apiData} setapiData={setapiData}  clickedProvider={clickedProvider} setclickedProvider={setclickedProvider}    providers={providers}   />} ></Route>


<Route path={`/our-products/:id`}   element={<OurProducts apiData={apiData} setapiData={setapiData} clickedProvider={clickedProvider} setclickedProvider={setclickedProvider} providers={providers}  />}></Route>


      </Routes>


<Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
