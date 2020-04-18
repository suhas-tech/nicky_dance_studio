const initialState = {
 
  loginInfo : {
    data : null,
    loading: true,
    counter : 0
  }
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ADMIN_RESULT":
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          data: action.data,
          counter: state.loginInfo.counter + 1,
          loading: false
        }
      };
     
    default:
      return state;
  }
};

export default commonReducer;
