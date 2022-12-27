import React,{useState,useEffect} from 'react'
import { Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const OurProvider = ({handleProvider, currentPage,  providersperPage, indexOfLastProvider,  paginate, currentProviders ,providers}) => {
  return (
    <div className='our-provider'>
<h1>our providers</h1>
<div className='providers-area'>

{currentProviders?.map((provider,i) =>(

<div className='provider' key={i} onClick={(e)=>handleProvider(provider)}>
    <div className='provider-img'>
<img  src={provider.img} alt={provider.name} />
    </div>
<p>{provider.name}</p>

</div>



))}
<div style={{display:"flex",alignItems:'center',justifyContent:'center'}}>

<Pagination       

color="primary"
shape="rounded"
defaultPage={1}
count={Math.ceil(providers.length / providersperPage)}
page={currentPage}
onChange={paginate}
size="large"

/>
</div>




</div>



</div>
  )
}

export default OurProvider