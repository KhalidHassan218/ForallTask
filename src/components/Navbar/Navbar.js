import React from 'react'
import "./navbar.css"
import logo from '../../Assets/logo.jpg'
const Navbar = () => {
  return (
    <div className='navbar' >
<div className='container'>
    <div className='box'>
<svg xmlns="http://www.w3.org/2000/svg" width="46.589" height="51.166" viewBox="0 0 46.589 51.166">
  <g id="Group_2" data-name="Group 2" transform="translate(-20.588 -9.731)">
    <path id="Path_4" data-name="Path 4" d="M4.5,18h35" transform="translate(26.178 21.71)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
    <path id="Path_5" data-name="Path 5" d="M4.5,9h35L26.956-10.193" transform="translate(26.178 22)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
    <path id="Path_6" data-name="Path 6" d="M40.178,27H4.617L-2.822,37.611" transform="translate(25.5 21.197)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
  </g>
</svg>
<div className='options'>
    <span>our services</span>
    <span>about us</span>
    <span>join us</span>
</div>



</div>
<div className='logo'>

 <img src={logo} alt="logo" />


</div>
</div>
</div>

  
  )
}

export default Navbar