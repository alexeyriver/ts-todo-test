import React from "react";
import { ListData } from "../ListData/ListData";
import { useSelector } from "react-redux";
import { ListDataFilter } from "../ListData/ListDataFilter";
import { ListDataSelect } from "../ListData/ListDataSelect";

export const TodoList: React.FC = () => {
  const flag: any = useSelector((state) => state);

  if (flag.flagFilter) {
    return (
      <>
        <ListDataFilter />
      </>
    );
  } else if (flag.flagSelect) {
    return (
      <>
        <ListDataSelect />
      </>
    );
  } else {
    return (
      <>
        <ListData />
      </>
    );
  }
};
