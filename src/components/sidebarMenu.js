import React, { useState, useEffect } from 'react'
import { Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SidebarMenu = ({ route, isOpen, setIsOpen, key }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsOpen(true)
    }

    useEffect(() => {
        if (!isOpen) {
            setIsMenuOpen(false);
        }
    }, [isOpen])

    return (
        <>
            <div className="menu" key={key} onClick={toggleMenu}>
                <div className="menu_items">
                    <Icon className="icon" size="large" name={route.icon} title={route.name}></Icon>
                    <div className="link_text" style={{ display: isOpen ? "block" : "none", }}>
                        {route.name}
                    </div>
                </div>
                <div style={{ display: isOpen ? "block" : "none", }}>
                    {
                        isMenuOpen ? <Icon name="angle down"></Icon>
                            : <Icon name="angle right"></Icon>
                    }

                </div>
            </div>
            <div className='menu_transition'>
                {
                    isMenuOpen ?
                        <div className='menu_container'>
                            {
                                route.subRoutes.map((subRoute, index) => {
                                    return (
                                        <NavLink
                                            to={subRoute.path}
                                            key={index}
                                            className="link"
                                            activeClassName="active"
                                        >
                                            <Icon className="icon"  name={subRoute.icon} title={subRoute.name}></Icon>
                                            <div className="link_menu_text" style={{ display: isOpen ? "block" : "none" }}>
                                                {subRoute.name}
                                            </div>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                        : null
                }
            </div>

        </>
    )
}

export default SidebarMenu