import React, { useEffect } from "react";
import { TodoSearch } from "./components/Search/Search";
import { TodoList } from "./components/TodoList/TodoList";
import { useDispatch } from "react-redux";
import { fetchjson } from "./redux/actions";
import "./style.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchjson());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Todos</h1>
      <TodoSearch />
      <TodoList />
    </div>
  );
};

export default App;
