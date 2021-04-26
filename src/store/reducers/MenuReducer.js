import * as actionType from "../actions/types";

const INITIAL_STATE = {
  menu: {
    homeActive: "active",
    layananActive: "inactive",
    profilActive: "inactive",
    opacActive: "inactive",
    laporanActive: "inactive",
    aktivitasActive: "inactive",
  },
};

const resetMenu = {
  menu: {
    homeActive: "inactive",
    layananActive: "inactive",
    profilActive: "inactive",
    opacActive: "inactive",
    laporanActive: "inactive",
    aktivitasActive: "inactive",
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.MENU_ACTIVE:
      return {
        ...state,
        ...resetMenu,
        menu: {
          [action.menuName]: action.payload,
        },
      };
    default:
      return state;
  }
};
