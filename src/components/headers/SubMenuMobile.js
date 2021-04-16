import React from "react";
import { NavLink } from "react-router-dom";

const subMenuMobile = (props) => {
  const onClick = () => {
    if (props.navToScroolBot) {
      props.navToScroolBot(props.scrollTo);
    }
    props.setMenuCollapse();
  };

  return (
    <div>
      {/* <NavLink style={{ color: "black" }} to={"/layanan"} onClick={onClick}></NavLink> */}
      <NavLink style={{ color: "black" }} to={props.to} onClick={onClick}>
        <div style={{ height: "10px" }} />
        {props.title}
      </NavLink>
    </div>
  );
};
export default subMenuMobile;
