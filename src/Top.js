import topPic  from './IconsImages/topPic.jpg';
import './App.css';
import { useTranslation } from 'react-i18next';



function Top() {
      
   const {t} = useTranslation();

    return( <div>
        <div className='topPic'> 
            <img src={topPic} alt='top' width='300px'/>
        </div>

        <div className="hello">

        <h1> { t ('Hello') } </h1>
            <h2> { t ('Iam')} </h2>
            <p> { t ('Text')} </p> 
        </div>
    </div>
    )
}

export default Top;

   
   



