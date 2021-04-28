import { Container, Grid, Typography } from '@material-ui/core';
import TodoBuilder from 'components/TodoBuilder';
import { TodoList } from 'components/TodoList';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodoAction, getTodosAction } from 'redux/actions';

const Todo = () => {
  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const activeTodos = useMemo(() => {
    return todos.filter(todo => !todo.completed);
  }, [todos]);

  const completedTodos = useMemo(() => {
    return todos.filter(todo => todo.completed);
  }, [todos]);

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  const handleCreateTodo = text => {
    dispatch(createTodoAction(text));
  };

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h3">TODO LIST</Typography>
        <Grid container justify="space-evenly" alignItems="center">
          <Typography variant="body1">{`All todos: ${todos.length}`}</Typography>
          <Typography variant="body1">{`Active todos: ${activeTodos.length}`}</Typography>
          <Typography variant="body1">{`Completed todos: ${completedTodos.length}`}</Typography>
        </Grid>
      </Grid>
      <TodoBuilder createTodo={handleCreateTodo} />
      <TodoList />
    </Container>
  );
};

export default Todo;
