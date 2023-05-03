import React from 'react';
import './intro.css';
import git from '../../images/Artboard 2.png';
import In from '../../images/pngwing.com (1).png';
import ImageIntro from '../../images/Asset 2.png';
import ImageBottom from '../../images/Path 6.png';
import { ThemeContext } from '../../Context'
import { useContext } from 'react';
import {Link} from 'react-scroll'

function Intro() {
    const theme = useContext(ThemeContext);
    const dark = theme.state.darkMode
    return (
        <div>
            <div className="intro" style={{
                background: dark ? 'var(--bg-color)' : '',
                color: dark ? 'var(--white)' : ''
            }}>
                <div className="i-left">
                    <div className="i-name">
                        <span >Merhaba ! Ben</span>
                        <span>Nesibe Çetin</span>
                        <span style={{ color: dark ? 'var(--white)' : '' }}> </span>
                    </div>
                    <Link spy={true} to='Contact' smooth={true}  >
                        <button className='button i-button' >Bana Ulaş!</button>
                    </Link>

                    <div className="i-icon">
                        <a href='https://github.com/nesibecetin'><img src={git} alt="" /></a>
                        <a href='https://www.linkedin.com/in/nesibe-cetin/'>  <img src={In} alt="" /></a>

                    </div>
                </div>
                <div className="i-right">
                    <img src={ImageIntro} alt="" />
                </div>
            </div>
            { /*  <div className="bottom">
                <img src={ImageBottom} alt="" />
            </div> */}
        </div>
    )
}
export default Intro