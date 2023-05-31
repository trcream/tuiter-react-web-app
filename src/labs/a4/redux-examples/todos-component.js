import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";

const Todos = () => {
  // Access the todos state from the store
  const todos = useSelector((state) => state.todos);
  // Create a local state to hold the todo being typed
  const [todo, setTodo] = useState({ do: "" });

  // Access the dispatch function
  const dispatch = useDispatch();

  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo));
  };

  // dispatching the data to store where the delete reducer will update the state
  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index));
  };

  // Handle the click event for the create todo button
  const createTodoClickHandler = () => {
    // Dipatch the addtodo action to the store to update the state with the new todo
    dispatch(addTodo(todo));
    // Clearing the local state
    setTodo({ do: "" });
  };

  // Handle the change event for the todo input
  const todoChangeHandler = (event) => {
    // Get the value from the input
    const doValue = event.target.value;
    // Create a new todo object
    const newTodo = {
      do: doValue,
    };
    // Set the local state
    setTodo(newTodo);
  };

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={createTodoClickHandler}
            className="btn btn-primary w-25 
                          float-end"
          >
            Create
          </button>
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control  w-75"
          />
        </li>
        {todos.map((todo, index) => (
          <li key={todo._id} className="list-group-item">
            <button
              onClick={() => deleteTodoClickHandler(index)}
              className="btn btn-danger 
                      float-end ms-2"
            >
              Delete
            </button>
            <input
              type="checkbox"
              className="me-2"
              checked={todo.done}
              onChange={() => toggleTodoDone(todo)}
            />

            {todo.do}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todos;
