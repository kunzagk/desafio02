import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialButton() {
    const style = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100px',
            margin: '20px auto',
        },
        icon: {
            cursor: 'pointer',
            borderRadius: '50%',
            backgroundColor: 'white',
            padding: '5px',
            border: '2px solid black',
        },
    }

    return (
        <div style={style.container}>
            <FontAwesomeIcon icon={faFacebook} style={style.icon} />
            <FontAwesomeIcon icon={faTwitter} style={style.icon} />
            <FontAwesomeIcon icon={faInstagram} style={style.icon} />
        </div>
    );
}

export default SocialButton;

