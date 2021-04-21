import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { NavLink } from "react-router-dom";
import SubMenuMobile from "../SubMenuMobile";

const menuItemOpac = (props) => {
  return (
    <div>
      {/* Menu Layanan */}
      <div
        style={{ paddingTop: "10px", fontSize: "15px" }}
        onClick={() => props.menu()}
        aria-expanded={props.menuIsOpen}
      >
        OPAC
      </div>
      {/* Sub Menu Layanan */}
      <Collapse in={props.menuIsOpen}>
        <div style={{ paddingLeft: "40px" }}>
          {/* <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/opac"}
            title="Visitor Counter"
          /> */}
          <NavLink style={{ color: "black" }} to={"/opac"}>
            <div style={{ height: "10px" }} />
            <a
              id="collasible-nav-dropdown"
              href="/#"
              onClick={() =>
                window.open("http://localhost/lib70/?p=visitor", "_blank")
              }
            >
              Visitor Counter
            </a>
          </NavLink>
          {/* <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/opac"}
            onClick={newTab}
            title="Sistem Perpustakaan"
          /> */}
          <NavLink style={{ color: "black" }} to={"/opac"}>
            <div style={{ height: "10px" }} />
            <a
              id="collasible-nav-dropdown"
              href="/#"
              onClick={() => window.open("http://localhost/lib70/", "_blank")}
            >
              Sistem PERPUSTAKAAN
            </a>
          </NavLink>
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/opac"}
            title="E-DTS"
          />
          <div>
            <NavLink
              style={{ color: "black" }}
              to={"/opac"}
              onClick={props.setMenuCollapse}
            >
              <div style={{ height: "10px" }} />
              E-DCC
            </NavLink>
          </div>
          <NavLink style={{ color: "black" }} to={"/opac"}>
            <div style={{ height: "10px" }} />
            <a
              id="collasible-nav-dropdown"
              href="/#"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdU3ZoGW9g_KgYty8xmJgsRq0CTxVQl2AHQQd4MyDFjIG69sw/viewform",
                  "_blank"
                )
              }
            >
              Survey Kepuasan Pemustaka
              <div style={{ height: "10px" }} />
            </a>
          </NavLink>
        </div>
      </Collapse>
      {/* End Sub Menu Layanan */}
    </div>
  );
};
export default menuItemOpac;
