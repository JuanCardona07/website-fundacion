import React from 'react';
import '../styles/DonateButton.css';

const DonateButton = () => {
    return (
        <a
        href='/donas'
        className='donate-button'
        aria-label='Donar a la fundación'
        >
            <span className='pulse-effect'>❤️🙏</span>Donar ahora 
        </a>
    )
}

export default DonateButton;