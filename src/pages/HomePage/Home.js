import React,{useState} from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'
import HeroBanner from '../../components/HeroBanner'
import OurServices from '../../components/OurServices'
import OurProvider from '../../components/OurProvider'


const Home = ({apiData, setapiData , clickedProvider, setclickedProvider ,providers}) => {
const navigate = useNavigate()

const handleProvider =(provider)=>{

setclickedProvider(provider)
navigate(`/our-products/${provider.name}`)

}




const [currentPage, setcurrentPage] = useState(1)
  const providersperPage = 1
  
  const indexOfLastProvider = currentPage * providersperPage
  const indexOfFirstProvider = indexOfLastProvider - providersperPage
  
  const paginate = (e,value) => {
  
    setcurrentPage(value)
   
  
  }
  const currentProviders = providers.slice(indexOfFirstProvider , indexOfLastProvider)



  return (
    <>

<HeroBanner/>
<OurServices/>
<OurProvider handleProvider={handleProvider} currentPage={currentPage}  providersperPage={providersperPage} indexOfLastProvider={indexOfLastProvider}  paginate={paginate} currentProviders={currentProviders} providers={providers}  />

</>
    
  )
}

export default Home
