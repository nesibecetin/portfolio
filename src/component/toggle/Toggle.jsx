import React, { useContext } from 'react'
import { FiMoon } from 'react-icons/fi';
import { BiSun } from 'react-icons/bi';
import './toggle.css'
import { ThemeContext } from '../../Context';


const Toggle = () => {
    const theme = useContext(ThemeContext);
    const dark = theme.state.darkMode;

    const handleClick=()=>{
        theme.dispatch({type :'toggle'});
    }

  return (
    <div className="toggle" onClick={handleClick}>
        <FiMoon/>
        <BiSun/>
        <div className="t-button" style={dark? { left:'2px'} : {right:'2px'}}>

        </div>
    </div>
  )
}

export default Toggle