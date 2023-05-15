import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import SidebarMenu from "./sidebarMenu";
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
              {
                isOpen ? <Icon className="icon" size="large" name="close" title="Close" onClick={toggle}></Icon>
                  :
                  <Icon className="icon" size="large" name="bars" onClick={toggle}></Icon>
              }
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <>
                    <SidebarMenu route={route} isOpen={isOpen} key={route.name} setIsOpen={setIsOpen} />
                  </>
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
