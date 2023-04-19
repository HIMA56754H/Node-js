import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkdin from '../../img/linkdin.png';
import Instagram from '../../img/instagram.png';
import vector from '../../img/vector.png';
import tubs from '../../img/thubs.png';
import cartoon from '../../img/cartoon.png';
import king from '../../img/king.png';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello I'am</span>
          <span>Himanshu Pal</span>
          <span>I am designning in frontend webside with css, and development these work.</span>
        </div>
        <button className=" button i-button">Hire me</button>
        <div className="i-icons">
           <a href='http://www.Github.com'>
           <img src={Github} alt=''></img>  
           </a>
           <a href='http://www.Linkdin.com'>
           <img src={Linkdin} alt=''></img> 
           </a>
           <a href='http://www.Instagram.com'> 
           <img src={Instagram} alt=''></img>  
           </a>

        </div>
      </div>
      <div className="i-right">
           <img src={vector} alt=''></img> 
           <img src={tubs} alt=''></img> 
           <img src={cartoon} alt=''></img>  
           <div>
             <floating image={king} txt1='Web' txt2='Developer' />
           </div>
           <div className='blur' style={{background: 'rgb(236 210 255 )'}}></div>
       </div>
    </div>
  )
}

export default Intro