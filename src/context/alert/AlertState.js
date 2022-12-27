import React, { useState } from 'react'
import AlertContext from './AlertContext'

function AlertState(props) {

    const [isVisible, setisVisible] = useState(false);
    const [message, setmessage] = useState("");
    const [type, settype] = useState("");

    const showAlert = (type, message) => {
        settype(type);
        setmessage(message);
        setisVisible(true);

        setTimeout(() => {
            setisVisible(false);
            settype("");
            setmessage("");
        }, 3000);
    }
    return (
        <AlertContext.Provider value={{ isVisible, type, message, showAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState