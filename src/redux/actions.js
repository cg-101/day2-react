export const incrementAction = () => {
  return { type: "INC" };
};

export const decrementAction = () => {
  return { type: "DEC" };
};

export const incAction = () => {
  return { type: "INC2" };
};
export const decAction = () => {
  return { type: "DEC2" };
};

export const asyncAction = () => {
  return async (dispatch) => {
    console.log("Async Action");

    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    const response = await fetch(url);
    const results = await response.json();

    dispatch({ type: "LIST", data: results });
    console.log(results);
  };
};
