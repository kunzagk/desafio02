import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

function Alert({message, status}) {
    return (
        <BootstrapAlert variant={status}>
            {message}
        </BootstrapAlert>
    );
}

export default Alert;