import React,{useEffect} from 'react'
import "./ourproducts.css"
import {useParams} from 'react-router-dom'



const OurProducts = ({apiData, setapiData , clickedProvider, setclickedProvider ,providers}) => {
    
    const {id} = useParams()
    
    
    useEffect(() => {
      

fetch('https://forall.sa/services/api/ads/companies?page_count=1')
.then((response) => response.json())
.then((data) =>{
setapiData(data.data[0])



})
.catch((err) => {
    console.log(err.message)
})


    let checking  = providers.find((provider) => {
  return  provider.name === id  })

setclickedProvider(checking)
window.scroll({top:"0" , behavior:'smooth'})


    }, [id])
    







  return (
    <div className='product'>
<div className='provider-image'>
<img loading='lazy' src={clickedProvider.img} alt={clickedProvider.name} />
<h1> {clickedProvider.name} </h1>

</div>
{apiData.agent &&
<div className='apifetched'>
    <h1>{clickedProvider.name}(portfolio)</h1>
<span> <span className='main'>name </span>      :{apiData.agent.name}</span>
<span> <span className='main'>gender</span>       :{apiData.agent.gender}</span>
<span> <span className='main'>nationality</span>     :{apiData.agent.nationality}</span>
<span> <span className='main'>email </span>   :{apiData.agent.email}</span>
<span> <span className='main'>id</span>     :{apiData.agent.id}</span>
<span> <span className='main'>birthday date</span>   :{apiData.agent.birthdate}</span>



</div>
}




<div className='container'>
<div className='holder'>
<div>
<h1> overview </h1>
<p>Our Leadership Principles aren't just a pretty inspirational wall hanging. These Principles work hard, just like we do. Amazonians use them, every day, whether they're discussing ideas for new projects, deciding on the best solution for a customer's problem, or interviewing candidates. It's just one of the things that makes Amazon peculiar.</p>
</div>
<div>
<h1> Features and Benefits  </h1>
<p>We aim to be Earth’s most customer centric company. Our mission is to continually raise the bar of the customer experience by using the internet and technology to help consumers find, discover and buy anything, and empower businesses and content creators to maximize their success.</p>
</div>


</div>


</div>






    </div>
  )
}

export default OurProducts