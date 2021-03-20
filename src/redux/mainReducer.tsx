import { FETCH_JSON, FILTER_INPUT, SELECT_COMPLITED } from "./types";
let initialState: any = {};

export const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_JSON:
      return {
        ...state,
        todos: action.payload,
        flagFilter: false,
        flagSelect: false,
        selected: null,
      };
    case FILTER_INPUT:
      let filter = [
        ...state.todos.filter((el) => el.title.includes(action.payload)),
      ];
      if (state.selected === true || !state.selected === false) {
        filter = filter.filter((el) => el.completed === state.selected);
      }
      return {
        ...state,
        todosfilter: filter,
        flagFilter: true,
      };

    case SELECT_COMPLITED:
      return {
        ...state,
        complitedfilter: [
          ...state.todos.filter((el) => el.completed === action.payload),
        ],
        flagFilter: false,
        flagSelect: true,
        selected: action.payload,
      };
    default:
      return state;
  }
};
