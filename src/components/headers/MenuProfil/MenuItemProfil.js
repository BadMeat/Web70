import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { NavLink } from "react-router-dom";
import SubMenuMobile from "../SubMenuMobile";

const menuItemProfil = (props) => {
  return (
    <div>
      {/* Menu Layanan */}
      <div
        style={{ paddingTop: "10px", fontSize: '15px' }}
        onClick={() => props.menu()}
        aria-expanded={props.menuIsOpen}
      >
        Profil
      </div>
      {/* Sub Menu Layanan */}
      <Collapse in={props.menuIsOpen}>
        <div style={{ paddingLeft: "40px" }}>
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/profile"}
            title="Visi Misi"
          />
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/profile"}
            title="Tujuan"
          />
          <div>
            <NavLink style={{ color: "black" }} to={"/profile"} onClick={props.setMenuCollapse}>
              <div style={{ height: "10px" }} />
              Struktur Organisasi Perpustakaan
              <div style={{ height: "10px" }} />
            </NavLink>
          </div>
        </div>
      </Collapse>
      {/* End Sub Menu Layanan */}
    </div>
  );
};
export default menuItemProfil;
