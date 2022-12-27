import React from 'react'
import globe from "../Assets/globe.png"
const HeroBanner = () => {
  return (
     <div className='home'>
<div className='container'>
<div className='box'>
<div className='content'>
<h1>we fill your gap </h1>
<p>We are ready to bring you all your needs anywhere at any time through our useful mobile application. No need to waste time you are one click away.</p>
<button>install now</button>

</div>
<div className='globe-image'>
<img src={globe} alt="globe" />

</div>
</div>

</div>
</div>


  )
}

export default HeroBanner