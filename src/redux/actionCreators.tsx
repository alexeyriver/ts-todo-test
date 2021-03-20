import { FETCH_JSON, FILTER_INPUT, SELECT_COMPLITED } from "./types";

export const fetchjsonAC = (payload: any) => ({ type: FETCH_JSON, payload });
export const inputsearchAC = (payload: any) => ({
  type: FILTER_INPUT,
  payload,
});
export const completedAC = (payload: any) => ({
  type: SELECT_COMPLITED,
  payload,
});
