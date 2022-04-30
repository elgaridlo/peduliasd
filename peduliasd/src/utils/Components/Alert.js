import React from 'react'

const AlertStyle = ({ variant = 'danger', children='tolong diisi pesannya', show = false, icons = 'uil-check-circle' }) => {
    return (
        // <div className={`alert alert-${variant} alert-icon`} role="alert" hidden={!show}>
        //     <i className={`uil uil-check-circle`}></i> {children}
        // </div>
        <div className={`alert alert-${variant} alert-icon alert-dismissible fade ${show ? 'show': ''}`} role="alert" style={{zIndex: '1500'}}>
            <i className={`uil ${icons}`}></i> {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> 
    )
}

export default AlertStyle
