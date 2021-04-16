import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { NavLink } from "react-router-dom";
import SubMenuMobile from "../SubMenuMobile";

const menuItemLaporan = (props) => {
  return (
    <div>
      {/* Menu Layanan */}
      <div
        style={{ paddingTop: "10px", fontSize: '15px' }}
        onClick={() => props.menu()}
        aria-expanded={props.menuIsOpen}
      >
        Laporan
      </div>
      {/* Sub Menu Layanan */}
      <Collapse in={props.menuIsOpen}>
        <div style={{ paddingLeft: "40px" }}>
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/laporanBulanan"}
            title="Bulanan"
          />
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/laporanTriwulan"}
            title="Triwulan"
          />
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/laporanSemester"}
            title="Semester"
          />
          <div>
            <NavLink
              style={{ color: "black" }}
              to={"/laporanTriwulan"}
              onClick={props.setMenuCollapse}
            >
              <div style={{ height: "10px" }} />
              Tahunan
              <div style={{ height: "10px" }} />
            </NavLink>
          </div>
        </div>
      </Collapse>
      {/* End Sub Menu Layanan */}
    </div>
  );
};
export default menuItemLaporan;
