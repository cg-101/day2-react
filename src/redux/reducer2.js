export const initialState = { count: 100, title: "reducer2", list: [] };

export function MyReducer2(state = initialState, action) {
  switch (action.type) {
    case "INC2":
      state = { ...state, count: state.count + 100 };
      return state;
    case "DEC2":
      state = { ...state, count: state.count - 100 };
      return state;
    case "LIST":
      state = { ...state, list: action.data };
      return state;
    default:
      return state;
  }
}
