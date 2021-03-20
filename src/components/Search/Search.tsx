import React, { useState } from "react";
import { searchinput, completed, fetchjson } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const TodoSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
    dispatch(searchinput(e.currentTarget.value));
  };
  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.currentTarget.value == "yes") {
      dispatch(completed(true));
    } else if (e.currentTarget.value == "no") {
      dispatch(completed(false));
    } else dispatch(fetchjson());
  };

  return (
    <>
      <p className="search">
        <div>
          Search
          <input
            className="filter"
            value={inputValue}
            onChange={onChangeHandler}
            placeholder="keyword..."
          />
        </div>
        <div>
          Completed:
          <select className="filter" onChange={onSelectHandler}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="-" selected>
              -
            </option>
          </select>
        </div>
      </p>
    </>
  );
};
