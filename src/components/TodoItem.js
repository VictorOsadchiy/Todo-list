import { Checkbox, ClickAwayListener, Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Input from 'components/Input';
import React, { useEffect, useState } from 'react';

const TodoItem = ({ todo, editTodo, deleteTodo, changeTodoStatus }) => {
  const [editing, setEditing] = useState(false);
  const [todoValue, setTodoValue] = useState(todo?.text || '');

  useEffect(() => {
    if (todo?.text !== todoValue) {
      setTodoValue(todo.text);
    }
  }, [todo]);

  const handleBlur = () => {
    if (todo.text !== todoValue && todoValue) {
      editTodo(todo.id, todoValue);
    }
    setEditing(false);
  };
  return (
    <ClickAwayListener onClickAway={handleBlur}>
      <Grid container alignItems="center">
        <Grid item xs={2} sm={1}>
          <Checkbox checked={todo.completed} onChange={changeTodoStatus} color="primary" />
        </Grid>
        <Grid item xs={10} sm={11}>
          {editing ? (
            <form noValidate autoComplete="off" onSubmit={handleBlur}>
              <Input
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
                onBlur={handleBlur}
                fullWidth
              />
            </form>
          ) : (
            <Grid container alignItems="center">
              <div style={{ flex: 1 }}>{todo.text}</div>
              <IconButton
                onClick={() => setEditing(true)}
                color="primary"
                component="span"
                size="small"
              >
                <EditIcon />
              </IconButton>
              <IconButton onClick={deleteTodo} color="secondary" component="span" size="small">
                <DeleteIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </ClickAwayListener>
  );
};

export default TodoItem;
