import React, {useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css" 


const Navbar= () => {

  const[click, setClick] = useState(false);
  const handleClick =() => setClick(!click);

  const [color, setcolor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=21){
      setcolor(true);
    }else{
      setcolor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <> 
     <div className={color ? "header header-bg" : "header"}>
        <Link to="#home" smooth>
          <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="#home" smooth>Home</Link>
          </li>
          <li>
            <Link to="#about" smooth>About</Link>
          </li>
          <li>
            <Link to="#skills" smooth>Skills</Link>
          </li>
          <li>
            <Link to="#contact" smooth>Contact</Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
        </div>
      </div>
    </>
  )
}

export default Navbar
