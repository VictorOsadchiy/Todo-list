import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { DEFAULT_TODO_SATUS, TODO_STATUSES } from 'utils/constant';

const Filter = ({ todos, setTodoData, deleteCompleted, markAllAsDone }) => {
  const [todoStatus, setTodoStatus] = useState(DEFAULT_TODO_SATUS);

  useEffect(() => {
    const filteredTodos = todos.filter(todo => {
      if (todoStatus.id === 0) {
        return true;
      }
      if (todoStatus.id === 1) {
        return todo.completed;
      } else {
        return !todo.completed;
      }
    });
    setTodoData(filteredTodos);
  }, [todos, todoStatus, setTodoData]);
  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">Todo status</InputLabel>
      <Select
        autoWidth
        value={todoStatus.name}
        onChange={e => setTodoStatus(TODO_STATUSES.find(status => status.name === e.target.value))}
        label="Todo status"
        style={{ width: 200 }}
      >
        {TODO_STATUSES.map(({ id, name }) => (
          <MenuItem key={id} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <Grid container alignItems="center" spacing={2} style={{ padding: '20px 0' }}>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={markAllAsDone}>
            Mark all
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" onClick={deleteCompleted}>
            delete completed
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};
export default Filter;
