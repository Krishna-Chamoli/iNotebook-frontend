import React, { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'

function Alert() {

    const { isVisible, message, type } = useContext(AlertContext);

    return (
        <div style={{ "height": "50px" }}>
            {isVisible && <div className={`alert alert-${type === "success" ? "success" : "danger"} alert-dismissible fade show`} role="alert">
                <strong>{type}!</strong> {message}
            </div>}
        </div>
    )
}

export default Alert