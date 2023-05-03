import React from 'react'
import './navbar.css';
import Toggle from '../toggle/Toggle';
import { ThemeContext } from '../../Context'
import { useContext } from 'react';
import {Link} from 'react-scroll'

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const dark = theme.state.darkMode
  return (
    <div className="n-wrapper" id='Navbar' style={{
      background: dark ? 'var(--bg-color)' : '',
      color: dark ? 'var(--white)' : ''
    }}>
      <div className="n-left">
        <div className="n-name">Nesibe</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }} >
            <Link  spy={true} to='Navbar' smooth={true} activeClass="activeClass" >
              <li>Anasayfa</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}  >
              <li>Hakkımda</li>
            </Link>
            <Link spy={true} to='Experiences' smooth={true}  >
              <li>Deneyimler</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}  >
              <li>Portfolyo</li>
            </Link>
            <Link spy={true} to='Contact' smooth={true}  >
              <li>İletişim</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar