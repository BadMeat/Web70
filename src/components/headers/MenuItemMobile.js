import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { NavLink } from "react-router-dom";
import SubMenuMobile from "./SubMenuMobile";

const menuItemMobile = (props) => {
  const layananKerjasamaOnClick = () => {
    props.setMenuCollapse();
    props.navToScroolBot("kerjasama");
  };

  return (
    <div>
      {/* Menu Layanan */}
      <div
        style={{ paddingTop: "10px", fontSize: "15px" }}
        onClick={() => props.menu()}
        aria-expanded={props.menuIsOpen}
      >
        Layanan
      </div>
      {/* Sub Menu Layanan */}
      <Collapse in={props.menuIsOpen}>
        <div style={{ paddingLeft: "40px" }}>
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/layanan"}
            title="Layanan Anak"
            navToScroolBot={props.navToScroolBot}
            scrollTo="anak"
          />
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/layanan"}
            title="Layanan Sirkulasi"
            navToScroolBot={props.navToScroolBot}
            scrollTo="sirkulasi"
          />
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/layanan"}
            title="Layanan Referensi"
            navToScroolBot={props.navToScroolBot}
            scrollTo="referensi"
          />
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/layanan"}
            title="Layanan Bimbingan Pemustaka"
            navToScroolBot={props.navToScroolBot}
            scrollTo="bimbingan"
          />
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/layanan"}
            title="Layanan Keanggotaan"
            navToScroolBot={props.navToScroolBot}
            scrollTo="keanggotaan"
          />
          <div>
            <NavLink
              style={{ color: "black" }}
              to={"/layanan"}
              onClick={layananKerjasamaOnClick}
            >
              <div style={{ height: "10px" }} />
              Layanan Kerjasama
            </NavLink>
          </div>
        </div>
      </Collapse>
      {/* End Sub Menu Layanan */}
    </div>
  );
};
export default menuItemMobile;
