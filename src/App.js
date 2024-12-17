import "./App.css";
import Users from "./components/users";
import Main from "./pages/main";
import ModalContextProvider from "./store/modalContext";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";

// 1. createStore(), 모든 전역상태가 관리되는 가장 큰 저장소
// 2. rootReducer() reducer들을 하나로 합쳐주는 역할
// 3. userReducer와 같은 각각의 reducer들을 생성 ===useReducer
// 4. Provider로 사용할 범위 정하고 store에 값 전달

function ReduxComponent() {
  //root REducer에서 등록한 key를 바탕으로 user state select 해온다
  //user가 변경이 되면 selector를 통해서 구독하는 컴포넌트만 리랜더링
  const users = useSelector((state) => state.user); //state 불러오기
  const dispatch = useDispatch(); //dispatch 불러오기(useReducer와 같은 역할)

  const handleClickAddUser = (e) => {
    e.preventDefault();
    const userName = e.target.form.userName.value;
    dispatch({
      type: "add_user",
      payload: { id: Date.now(), name: userName },
    });
  };
  const handleRemoveUserName = (user) => {
    dispatch({
      type: "delete_user",
      payload: user,
    });
  };
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.name}
            <button onClick={() => handleRemoveUserName(user)}>삭제</button>
          </div>
        );
      })}
      <form id="userName">
        <input type="text" name="userName" />
        <button form="userName" onClick={handleClickAddUser}>
          입력
        </button>
      </form>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ReduxComponent />
    </Provider>
    // <ModalContextProvider>
    //   <Users />
    // </ModalContextProvider>
  );
}

export default App;
