import React from 'react';
import insta from './IconsImages/insta.png';
import telega from './IconsImages/telega.png';
import vk from './IconsImages/vk.png';
import './App.css';
import wup from './IconsImages/wup.png';


function Icons() {
    return ( <div>
        <div className="socials">
        <a href='https://www.instagram.com/myo_orthomagic?igsh=aXFyNmloaDYyZmk4' target="_blank"> <img src={insta} alt='insta' width="40px" height="40px"/></a>
        </div>

       <div className='socials'>
       <a href="https://t.me/olik_tigra13" target="_blank"> <img src={telega} alt='telega' width="40px" height="40px"/></a>
        </div>

        <div className='socials'>
        <a href="tel:+7 (965) 078-72-13" target="_blank" rel=''> <img src={wup} alt='whatsup' width="40px" height="40px"/></a>
        </div>

        <div className='socials'>
        <a href='https://m.vk.com/clubortomagic' target="_blank"> <img src={vk} alt='vk' width="40px" height="40px"/></a>
        </div>

        </div>
      
    );
}

export default Icons;