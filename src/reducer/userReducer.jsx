//dispatch reducer(업데이트 저장소)에 값을 전달하는 매게(분기를 판단할 수 있는 기준 값, payload 필요한값)

//reducer은 callback function, 함수
//매개변수로 지정된 값이 들어온다
//state : 상태
//action : dispatch가 전달한 값(객체, 배열, 함수... type을 많이 분류해야 하기 때문에 주로 객체로 전달)

const userReducer = (state, action) => {
  //분기를 생성하고 해당 userReducer 함수가 반환하는 값으로 다음 상태 업데이트 (setState)

  console.log(state);
  console.log(action);

  switch (action.type) {
    case "add_user":
      return [...state, action.payload];
    case "delete_user":
      return state.filter((el) => el.id !== action.payload.id);
    default:
      return state;
  }
};
export default userReducer;
