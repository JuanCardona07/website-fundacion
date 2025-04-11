import React from 'react';
import styles from './DonateButton.module.css';

const DonateButton = () => {
    return (
        <a
        href='/donas'
        className={styles['donate-button']}
        aria-label='Donar a la fundación'
        >
            <span className='pulse-effect'>❤️🙏</span>Donar ahora! 
        </a>
    )
}

export default DonateButton;