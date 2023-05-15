import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { routes } from "./sidebarRoutes";



const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <>
      <div className="main-container">
        <div style={{ width: isOpen ? "16vw" : "45px", }} className={`sidebar`}>
          <div className="top_section" >
            <div className="link_text" style={{ display: isOpen ? "block" : "none", }}> {" Nasted Sidebar"}</div>
            <div className="bars" style={{ marginLeft: isOpen ? "60px" : "0px" }}>
              <Icon className="icon" size="large" name="bars" onClick={toggle}></Icon>
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <div className="menu">
                    <div className="menu_items">
                      <Icon className="icon" size="large" name={route.icon} title={route.name}></Icon>
                      <div className="link_text" style={{ display: isOpen ? "block" : "none", }}>
                        {route.name}
                      </div>
                    </div>
                    <div>
                      <Icon name="angle down"></Icon>
                    </div>
                  </div>
                )
              }
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <Icon className="icon" size="large" name={route.icon} title={route.name}></Icon>
                  <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>
                    {route.name}
                  </div>
                </NavLink>
              );
            })}
          </section>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
