import axios from "axios";
import { fetchjsonAC, inputsearchAC, completedAC } from "./actionCreators";
import { Dispatch } from "redux";

export function fetchjson() {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch(fetchjsonAC(response.data));
  };
}

export function searchinput(data: string) {
  return (dispatch: Dispatch) => {
    dispatch(inputsearchAC(data));
  };
}

export function completed(data: boolean) {
  return (dispatch: Dispatch) => {
    dispatch(completedAC(data));
  };
}
