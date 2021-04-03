export const initialState = { counter: 10 };

export function MyReducer1(state = initialState, action) {
  switch (action.type) {
    case "INC":
      state = { ...state, counter: state.counter + 1 };
      return state;
    case "DEC":
      state = { ...state, counter: state.counter - 1 };
      return state;
    default:
      return state;
  }
}
