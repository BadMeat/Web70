import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { NavLink } from "react-router-dom";
import SubMenuMobile from "../SubMenuMobile";

const menuItemOpac = (props) => {
  return (
    <div>
      {/* Menu Layanan */}
      <div
        style={{ paddingTop: "10px", fontSize: '15px' }}
        onClick={() => props.menu()}
        aria-expanded={props.menuIsOpen}
      >
        OPAC
      </div>
      {/* Sub Menu Layanan */}
      <Collapse in={props.menuIsOpen}>
        <div style={{ paddingLeft: "40px" }}>
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/opac"}
            title="Visitor Counter"
          />
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/opac"}
            title="Sistem Perpustakaan"
          />
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
              <div style={{ height: "10px" }} />
            </NavLink>
          </div>
        </div>
      </Collapse>
      {/* End Sub Menu Layanan */}
    </div>
  );
};
export default menuItemOpac;
