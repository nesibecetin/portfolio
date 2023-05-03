import React from 'react'
import Data from './Data'
import './experience.css'
import { ThemeContext } from '../../Context'
import { useContext } from 'react';
import { MdWorkOutline } from 'react-icons/md';
import { Row, Col, Grid, Container } from 'react-bootstrap';
const Experience = () => {
  const theme = useContext(ThemeContext);
  const dark = theme.state.darkMode
  return (
    <div className="experience" id='Experiences' style={{
      background: dark ? 'var(--bg-color)' : '',
      color: dark ? 'var(--white)' : ''
    }}>
      <div className="title">
        <span style={{ color: dark ? 'var(--primary-color)' : '' }}>Deneyimler</span>
      </div>
      <div className="container_grid">
        <div className="timeline_grid">
          {Data.map((val, id) => {
            return (
              <div className="item" key={id}>
                <span><MdWorkOutline /></span>
                <span style={{ color: dark ? 'var(--border-color)' : '' }}>{val.time}</span>
                <span style={{ color: dark ? 'var(--white)' : '' }}>{val.job}</span>
                <span style={{ color: dark ? 'var(--border-color)' : '' }}>{val.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}
export default Experience