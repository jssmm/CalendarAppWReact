import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbare navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                Jessen Alejandro
            </span>

            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>

        </div>
    )
}
