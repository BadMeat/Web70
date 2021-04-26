import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { NavLink } from "react-router-dom";
import InformationModal from "../../modals/InformationModal";
import NotificationModal from "../../modals/NotificationModal";

const MenuItemOpac = (props) => {
  const [addIsOpen, setAddOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [notifIsOpen, setNotifOpen] = useState(false);

  const modalIsClick = (bool) => {
    setAddOpen(bool);
  };

  return (
    <div>
      {/* Menu Layanan */}
      <InformationModal
        show={addIsOpen}
        onHide={() => modalIsClick(false)}
        localUrl={url}
      />
      <NotificationModal
        show={notifIsOpen}
        onHide={() => setNotifOpen(false)}
      />
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
          <NavLink style={{ color: "black" }} to={"/opac"}>
            <div style={{ height: "10px" }} />
            <a
              id="collasible-nav-dropdown"
              href="/#"
              onClick={() => {
                modalIsClick(true);
                setUrl("?p=visitor");
              }}
            >
              Visitor Counter
            </a>
          </NavLink>
          <NavLink style={{ color: "black" }} to={"/opac"}>
            <div style={{ height: "10px" }} />
            <a
              id="collasible-nav-dropdown"
              href="/#"
              onClick={() => {
                modalIsClick(true);
                setUrl("");
              }}
            >
              Sistem PERPUSTAKAAN
            </a>
          </NavLink>
          <NavLink style={{ color: "black" }} to={"/opac"}>
            <div style={{ height: "10px" }} />
            <a
              id="collasible-nav-dropdown"
              href="/#"
              onClick={() => {
                setNotifOpen(true);
              }}
            >
              E-DTS
            </a>
          </NavLink>
          <NavLink style={{ color: "black" }} to={"/opac"}>
            <div style={{ height: "10px" }} />
            <a
              id="collasible-nav-dropdown"
              href="/#"
              onClick={() => {
                setNotifOpen(true);
              }}
            >
              E-DCC
            </a>
          </NavLink>
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
export default MenuItemOpac;
