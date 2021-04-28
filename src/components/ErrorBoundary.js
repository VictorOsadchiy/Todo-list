import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

const styles = () => ({
  root: {
    height: '100vh',
    display: 'flex'
  }
});

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error, info) {
    console.error('Console Error', error, info, this.props);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { classes } = this.props;

    if (error) {
      return (
        <Container maxWidth="sm" classes={{ root: classes.root }}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Typography variant="h6">Something went wrong, try later.</Typography>
            <IconButton color="inherit" title="Refresh" onClick={() => window.location.reload()}>
              <RefreshIcon />
            </IconButton>
          </Grid>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default withStyles(styles)(ErrorBoundary);
