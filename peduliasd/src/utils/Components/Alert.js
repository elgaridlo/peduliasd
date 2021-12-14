import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'

const AlertStyle = ({ variant = 'info', children='tolong diisi pesannya', show = false }) => {
    const [iconString, setIconString] = useState('')
    switch (variant) {
        case 'danger':
            setIconString('uil-times-circle')
            break;
        case 'success':
            setIconString('uil-check-circle')
        case 'warning':
            setIconString('uil-exclamation-triangle')
        case 'info':
            setIconString('uil-exclamation-circle')
        default:
            setIconString('uil-exclamation-circle')            
            break;
    }
    return (
        <div className={`alert alert-${variant} alert-icon`} role="alert" hidden={!show}>
            <i className={`uil ${iconString}`}></i> {children}
        </div>
    )
}

export default AlertStyle
