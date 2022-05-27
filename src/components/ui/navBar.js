import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './navBar.css'
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Navbar = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookies.get("username")) {
            navigate('/logIn')
        }

    }, [navigate])

    const handleLogout = () => {
        cookies.remove("id", { path: "/" });
        cookies.remove("apellido_paterno", { path: "/" });
        cookies.remove("apellido_materno", { path: "/" });
        cookies.remove("nombre", { path: "/" });
        cookies.remove("username", { path: "/" });
        window.location.href = "./";
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        // 
                        className="nav-item nav-link"
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        // 
                        className="nav-item nav-link"
                        to="/recipes"
                    >
                        Recipes
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/createRecipes"

                    >
                        Create
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>{cookies.get('nombre')}</span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}