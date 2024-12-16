import { useReducer, useRef } from "react";
import userReducer from "../reducer/userReducer";

const Users = () => {
  //const [state, dispatch] = useReducer(reducer, defaultValue)
  //dispatch : reducer(업데이트 저장소)에 값을 전달하는 매게
  //(분기를 판단할 수 있는 기준 값, payload 필요한값)

  //상태를 useReducer
  const [state, dispatch] = useReducer(userReducer, [{ id: 1, name: "경주" }]);
  const userNameInputRef = useRef();
  const handleClickAddUser = () => {
    dispatch({
      type: "add_user",
      payload: {
        id: Date.now(),
        name: userNameInputRef.current.value,
      },
    });
  };
  const handleDeleteUser = (user) => {
    dispatch({
      type: "delete_user",
      payload: {
        id: user.id,
        name: user.name,
      },
    });
  };
  return (
    <>
      {state.map((user) => (
        <div>
          {user.name}
          <button onClick={() => handleDeleteUser(user)}>삭제</button>
        </div>
      ))}
      <input type="text" ref={userNameInputRef} />
      <button onClick={handleClickAddUser}>추가</button>
    </>
  );
};
export default Users;
