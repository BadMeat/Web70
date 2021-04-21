import React from "react";
import Collapse from "react-bootstrap/Collapse";
import SubMenuMobile from "../SubMenuMobile";

const menuAktivitas = (props) => {
  return (
    <div>
      <div
        style={{ paddingTop: "10px", fontSize: "15px" }}
        onClick={() => props.menu()}
        aria-expanded={props.menuIsOpen}
      >
        Aktivitas
      </div>
      <Collapse in={props.menuIsOpen}>
        <div style={{ paddingLeft: "40px" }}>
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/aktivitasProgram"}
            title="PROGRAM UNGGULAN"
          />
          <SubMenuMobile
            setMenuCollapse={props.setMenuCollapse}
            to={"/aktivitasPrestasi"}
            title="PRESTASI"
          />
        </div>
      </Collapse>
    </div>
  );
};
export default menuAktivitas;
