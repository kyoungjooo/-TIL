import { createStore } from "redux";
import { rootReducer } from "../reducer/root";

const store = createStore(
  // rootReducer : 저장소(reducer)들을 하나로 합친 값
  rootReducer
  //option
  //loger, devtools 사용할 것인지
);
export default store;
