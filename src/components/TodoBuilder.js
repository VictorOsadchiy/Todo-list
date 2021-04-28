import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from 'components/Input';
import React, { useCallback, useState } from 'react';

const useStyles = makeStyles({
  wrapper: {
    padding: '20px 0'
  },
  button: {
    height: 40
  }
});

const TodoBuilder = ({ createTodo }) => {
  const classes = useStyles();
  const [todo, setTodo] = useState('');

  const handleChangeTodo = e => {
    setTodo(e.target.value);
  };

  const handleSubmitTodo = useCallback(
    event => {
      event.preventDefault();
      if (todo) {
        createTodo(todo);
        setTodo('');
      }
    },
    [todo, createTodo]
  );

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmitTodo}>
      <Grid container alignItems="center" spacing={2} classes={{ root: classes.wrapper }}>
        <Grid item xs={8} sm={10}>
          <Input label="New todo" value={todo} onChange={handleChangeTodo} fullWidth />
        </Grid>
        <Grid item xs={4} sm={2}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            disabled={!todo}
            onClick={handleSubmitTodo}
            classes={{ root: classes.button }}
          >
            + add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoBuilder;
