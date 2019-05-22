import React from 'react'
import { Navbar, NavbarBrand, NavLink } from 'reactstrap'
import NavCollapse from './NavCollapse'
import './NavbarContainer.css'
import Hamburger from '../assets/img/hamburger.png'
import Instagram from '../assets/img/instagram.png'
import Facebook from '../assets/img/facebook.png'
import Twitter from '../assets/img/twitter.png'
import Logo from '../assets/img/logo.png'

function NavbarContainer(props) {
    return (
        <div>
            <Navbar className="Navbar">
                <NavLink onClick={props.toggleNavbar}  className="mr-auto">
                    <img src={Hamburger} className="Hamburger" alt=""/>
                </NavLink>
                <NavbarBrand href="#" className="NavbarBrand">
                    <img src={Logo} alt="" className="NavbarLogo"/>
                </NavbarBrand>
                <NavLink className="ml-auto">
                    <img src={Instagram} alt="" className="SocialIcon"/>
                </NavLink>
                <NavLink>
                    <img src={Facebook} alt="" className="SocialIcon"/>
                </NavLink>
                <NavLink>
                    <img src={Twitter} alt="" className="SocialIcon"/>
                </NavLink>
            </Navbar>
            <NavCollapse toggleNavbar={props.toggleNavbar} nav_collapsed={props.nav_collapsed}/>
        </div>
        
    )
}

export default NavbarContainer