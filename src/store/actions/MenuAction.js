import * as actionType from "./types";

export const setMenuActive = (menuName) => {
  return {
    type: actionType.MENU_ACTIVE,
    menuName: menuName,
    payload: "active",
  };
};
