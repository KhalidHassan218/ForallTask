import React from 'react'
import "./footer.css"
import googleplay from "../../Assets/google.png"
import applestore from "../../Assets/apple.png"
import {FaFacebook ,FaInstagram,FaLinkedin,FaTwitter} from "react-icons/fa"
import { GoLocation } from "react-icons/go";

import footerlogo from "../../Assets/footer-logo.jpg"
const Footer = () => {
  return (
    <div className='footer'>
<div className='container'>
<div className='footer-content'>
<div className='about-us'>
<h2 > about us</h2>
<div>
<span>our history</span>
<span>how we work</span>
<span>resources</span>
</div>
<div>
    <span><img src={googleplay} width="100"  alt="googleplay"/></span>
    <span><img src={applestore} width="105" alt="applestore"/></span>
</div>
</div>
<div className='footer-logo'>
<img src={footerlogo} alt="forall"/>
<div className='icons'>
<span><FaFacebook size={20}/></span>
<span><FaInstagram size={20}/></span>
<span><FaLinkedin size={20} /></span>
<span><FaTwitter size={20}/></span>

</div>

</div>

<div className='footer-contact-info'>
<div className='location'>

    <div className='map'>
<GoLocation/>
<span>Saudi Arabia</span>
    </div>
<p>Jeddah, Sultan St., Lilyan Tower 2, 11th Floor</p>

</div>
<div className='email-office'>
<p><strong>  Email:     </strong> hello@foral.com   </p>
<p><strong>  Office:     </strong> +00 123 456 789   </p>




</div>



</div>











</div>

</div>


    </div>
  )
}

export default Footer