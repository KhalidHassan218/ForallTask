import React from 'react'
import { meetingImage } from '../pages/HomePage/ImageSvg'


const OurServices = () => {
  return (
    <div className='box'>

<div className='meeting-image'>
{meetingImage}
</div>
<div className='content'>
<h1>What We Offer </h1>
<p>We Offer you different kinds of services that will help you save your time and be more comfortable. </p>
<button>Our Services</button>

</div>

</div>

  )
}

export default OurServices