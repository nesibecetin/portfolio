import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Example from '../../images/exampl.jpg'
import Project1 from '../../images/download.png'
import Project2 from '../../images/download (1).png'
import 'swiper/css'
import './portfolio.css'
import { ThemeContext } from '../../Context'
import { useContext } from 'react';
import {BiLinkExternal} from 'react-icons/bi'
import { AiOutlineLink } from 'react-icons/ai';



const Portfolio = () => {
    const theme = useContext(ThemeContext);
    const dark = theme.state.darkMode
    return (
        <div className="portfolio" id='Portfolio' style={{
            background: dark ? 'var(--bg-color)' : '',
            color: dark ? 'var(--white)' : ''
        }}>
            <span style={{ color: dark ? 'var(--primary-color)' : '' }}>Projelerim</span>
            <span></span>

            <Swiper className='portfolio-slider'
                spaceBetween={10}
                grabCursor={true}
                slidesPerView={3}>
                <SwiperSlide>
                    <a href="https://github.com/nesibecetin/ReCapProject-Frontend">
                        <img src={Project1} alt="" /><br />
                        <span>Rent a Car Project</span><span><AiOutlineLink/></span>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/nesibecetin/JsonFileImport/tree/master">
                        <img src={Project2} alt="" /><br />
                        <span>Json File Import </span><span><AiOutlineLink/></span>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/nesibecetin/hrms-frontend">
                        <img src={Project1} alt="" /><br />
                        <span>HRMS </span><span><AiOutlineLink/></span>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/nesibecetin/ScrumBoard">
                        <img src={Project2} alt="" /><br />
                        <span>Scrum Board </span><span><AiOutlineLink/></span>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio