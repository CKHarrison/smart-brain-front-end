import react from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilty className="tilty br2 shadow-2  " max={35} style={{height: 150, width: 150}}>
        <div className="inner pa3">
          <img style={{paddingTop: '28px'}} src={brain} alt='logo'/>
        </div>
      </Tilty>
    </div>
  )
};

export default Logo;