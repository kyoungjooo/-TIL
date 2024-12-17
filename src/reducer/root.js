//많아진 저장소(reducer)들을 하나로 합치는 역할
import { combineReducers } from "redux";
import userReducer from "./user";
import todoReducer from "./todo";

export const rootReducer = combineReducers({
  user: userReducer,
  //todo: todoReducer,
});

//과제 delete_user 구현
//todo state 관리를 redux로 만들어보기
