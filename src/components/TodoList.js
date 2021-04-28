import Filter from 'components/Filter';
import TodoItem from 'components/TodoItem';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteAllCompletedAction,
  deleteTodoAction,
  editTodoAction,
  markAllAsDoneAction,
  markTodoAsCompleteAction,
  markTodoAsIncompleteAction
} from 'redux/actions';

export const TodoList = () => {
  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [todoData, setTodoData] = useState(todos);

  const handleDeleteTodo = id => {
    if (id) {
      dispatch(deleteTodoAction(id));
    }
  };
  const handleEditTodo = (todoId, newText) => {
    dispatch(editTodoAction(todoId, newText));
  };
  const handleChangeTodoStatus = (event, todoId) => {
    if (!todoId) {
      return;
    }
    if (event.target.checked) {
      dispatch(markTodoAsCompleteAction(todoId));
    } else {
      dispatch(markTodoAsIncompleteAction(todoId));
    }
  };
  const handleDeleteCompleted = () => {
    const completedTodos = todos.filter(todo => todo.completed).map(todo => todo.id);
    dispatch(deleteAllCompletedAction(completedTodos));
  };
  const handleMarkAllAsDone = () => {
    const incompletedTodos = todos.filter(todo => !todo.completed).map(todo => todo.id);
    dispatch(markAllAsDoneAction(incompletedTodos));
  };

  return (
    <div>
      <Filter
        todos={todos}
        setTodoData={setTodoData}
        deleteCompleted={handleDeleteCompleted}
        markAllAsDone={handleMarkAllAsDone}
      />
      {todoData.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          deleteTodo={() => handleDeleteTodo(todo.id)}
          editTodo={handleEditTodo}
          changeTodoStatus={e => handleChangeTodoStatus(e, todo.id)}
        />
      ))}
    </div>
  );
};
