import { combineReducers } from "redux";
import MenuReducer from "./MenuReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  menuList: ["menu"],
};

const rootReducer = combineReducers({
  menu: MenuReducer,
});

export default persistReducer(persistConfig, rootReducer);
