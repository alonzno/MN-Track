import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

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

function App(props) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

    // const rows = [
    //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //   createData('Eclair', 262, 16.0, 24, 6.0),
    //   createData('Cupcake', 305, 3.7, 67, 4.3),
    //   createData('Gingerbread', 356, 16.0, 49, 3.9),
    // ];

  function addNewItem(data) {
    setRows(rows.concat(data));
    alert(rows);
  }

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
          <FoodTable rows={rows}/>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={3}>
            <FoodForm addItem={addNewItem}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}



ReactDOM.render(<App />, document.querySelector('#app'));
//ReactDOM.render(<App />, document.getElementById('root'));