import React from 'react'
import './service.css'
import Card from '../card/Card';
import HtmlTag from '../../images/html.png';
import HtmlCss from '../../images/html-css.png';
import Net from '../../images/dot-net.png';
import { ThemeContext } from '../../Context'
import { useContext } from 'react';
import Resume from './NesibeCetinCv.pdf';

function Service() {
  const theme = useContext(ThemeContext);
  const dark = theme.state.darkMode

  return (
    <div className="services" id="Services" style={{
      background: dark ? 'var(--bg-color)' : '',
      color: dark ? 'var(--white)' : ''
    }}>
      <div className="awesome">
        <span style={{ color: dark ? 'var(--primary-color)' : '' }}>Hakkımda</span>
        <span></span>
        <span style={{ color: dark ? 'var(--white)' : '' }}><p>Merhaba, <br />
          ben Nesibe. Manisa Celal Bayar Üniversitesi Yazılım 
          Mühendisliği bölümünden 2020 yılında mezun oldum. Ardından girdiğim firmalarda 
          Full Stack Developer olarak çalıştım. Ağırlık olarak .Net Core Mvc ile geliştirmeler yaptım.
          .Net frameworkü yanı sıra bu günlerde  Html , Css , Javascript , React.js ve Angular.js teknolojileri ile ilgilenmekteyim.
          </p></span>
        <a href={Resume} download>
          <button className="button s-button">Download Cv</button>
        </a>
      </div>
      <div className="cards">
        <div className='card-3'>
          <Card
            emoji={Net}
            heading={'Backend Development'}
            detail={".Net, .Net Core, Mvc, Jwt, Entity Framework, Linq"} />
        </div>
        {/**<div className='card-1'>
          <Card
            emoji={HtmlTag}
            heading={'Database'}
            detail={"MsSql, MySql, PostgreSql"} />
        </div> */}
        <div className='card-1'>
          <Card
            emoji={HtmlCss}
            heading={'Frontend Development'}
            detail={"Html, Css, Js, React.js, Angular.js"} />
        </div>

      </div>
    </div>
  )
}

export default Service