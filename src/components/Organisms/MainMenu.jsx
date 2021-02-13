import React from 'react'
import {NavLink} from 'react-router-dom'

const MainMenu = () =>(
    <header className="ed-header s-bg-grey s-py-2">
        <div className="ed-grid lg-grid-5">
            {/* <!-- Logo  --> */}
            <div className="s-cross-center s-main-center lg-main-start">
                <img className="logo" src="https://ed.team/static/images/logo.svg"/>
            </div>
            <nav className="nav lg-cols-4 s-cross-center ed-grid full">
            {/* <!--  Menú de navegación    --> */}
            <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
                {/* <!--   Item de menú. Contiene link e ícono     --> */}
                <li className="lg-mr-3">
                <NavLink className="link s-column s-cross-center active" exact to="/" activeClassName="activo">
                    {/* <!--  El ícono sólo se mostrará en la versión móvil  --> */}
                    <svg className="icon to-lg s-mb-0">
                    <use href="#home"></use>
                    </svg>
                    <span>Inicio</span>
                </NavLink>
                </li>
                <li className="lg-mr-3">
                <NavLink className="link s-column s-cross-center" to="/cursos" activeClassName="activo">
                    <svg className="icon to-lg s-mb-0">
                    <use href="#studies"></use>
                    </svg>
                    <span>Cursos</span>
                </NavLink>
                </li>
                <li className="lg-mr-3">
                <NavLink className="link s-column s-cross-center" to="/formulario" activeClassName="activo">
                    <svg className="icon to-lg s-mb-0">
                    <use href="#courses"></use>
                    </svg>
                    <span>Formulario</span>
                </NavLink>
                </li>
                <li>
                <NavLink className="link s-column s-cross-center" to="/usuarios">
                    <svg className="icon to-lg s-mb-0">
                    <use href="#notes"></use>
                    </svg>
                    <span>Usuarios</span>
                </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    </header>
)

export default MainMenu