import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {Todo} from "./TypeTodo";

export const ListDataFilter: React.FC = () => {
  const todo = useSelector((state) => state);
  const [finalTodo, setFinalTodo]: any = useState(todo);
  useEffect(() => {
    setFinalTodo(todo);
  }, [todo]);

  return (
    <>
      {finalTodo.todosfilter.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {finalTodo &&
              finalTodo.todosfilter?.map((el: Todo) => (
                <tr key={uuidv4()}>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  {el.completed && <td>yes</td>}
                  {!el.completed && <td>no</td>}
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <p className="red">No results for the given search parameters</p>
      )}
    </>
  );
};
