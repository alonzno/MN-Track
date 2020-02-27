import React from 'react';
import ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import FoodTable from './FoodTable.js';
import FoodForm from './FoodForm.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <FoodTable />
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={3}>
            <FoodForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
//ReactDOM.render(<App />, document.getElementById('root'));