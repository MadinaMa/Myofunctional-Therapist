import { useState } from 'react';
import { data } from './Data';
import { useTranslation } from 'react-i18next';

function Pictures() {

    const { t} = useTranslation();

    const [picture, setPicture] = useState(0);
    const {image} = data[picture];

    const previosPicture = () => {
        setPicture ((picture => {
            picture --;
            if (picture < 0) {
                return data.length -1;
            }
            return picture;
        }))
    }  

    const nextPicture = () => {
        setPicture ((picture => {
            picture ++;
            if (picture > data.length -1) {
                picture = 0;
            }
            return picture;
        }))
    }
  return (<div>

    <div className='buttons-image'>
        <button className='btn' onClick={previosPicture}>  { t ('Back') }
        </button>
        <img src={image} width="600px" height='600px' alt='pic'/>
        <button className='btn' onClick={nextPicture}> { t ('Front') } 
        </button>
    </div>

 </div>
  
  );
}

export default Pictures;

