import { Container, Grid, Typography } from '@material-ui/core';
import TodoBuilder from 'components/TodoBuilder';
import { TodoList } from 'components/TodoList';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodoAction, getTodosAction } from 'redux/actions';

const Todo = () => {
  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const activeTodos = useMemo(() => todos.filter(todo => !todo.completed).length, [todos]);
  const completedTodos = useMemo(() => todos.filter(todo => todo.completed).length, [todos]);

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  const handleCreateTodo = text => {
    dispatch(createTodoAction(text));
  };

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h4">TODO LIST</Typography>
        <Grid container justify="space-evenly" alignItems="center">
          <Typography variant="body1">{`All todos: ${todos.length || '-'}`}</Typography>
          <Typography variant="body1">{`Uncompleted todos: ${activeTodos || '-'}`}</Typography>
          <Typography variant="body1">{`Completed todos: ${completedTodos || '-'}`}</Typography>
        </Grid>
      </Grid>
      <TodoBuilder createTodo={handleCreateTodo} />
      <TodoList />
    </Container>
  );
};

export default Todo;
