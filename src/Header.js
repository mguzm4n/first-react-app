import React from "react";
import './css/header.css';

const getDate = () => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril',
                    'Mayo', 'Junio', 'Julio', 'Agosto',
                    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                   ];

    let date = new Date();
    return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

export default function Header(){
    return(
    <div className="header">
        <div className="date">{ getDate() }</div>
        <div className="auth-header">
            <div className="auth-btn" style={{ backgroundColor: '#98DFAF' }}>Iniciar sesión</div>
            <div className="auth-btn" style={{ backgroundColor: '#5FB49C' }}>Registrarse</div>
        </div>
    </div>
    );
}