import React from 'react';
// import ReactDOM from 'react-dom';
import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/Styles';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function createData(name, calories, fat, carbs, protein) {
	const crypto = require('crypto');
	const hash = crypto.createHash('sha1').update(name).digest('hex');
  return { name, calories, fat, carbs, protein, hash };
}

export default function FoodForm(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  function isValidTextField() {
  	if (isNaN(calories) || isNaN(protein) || isNaN(carbs) || isNaN(fat)) {
  		alert("Nutrients must be numerical");
  		return false;
  	}
  	else {
  		return true;
  	}
  }
  function handleClick() {
  	if (isValidTextField()) {
  		props.addItem(createData(name, calories, protein, carbs, fat))
  	}
  }




  return (
    <form className={classes.root} noValidate auto-complete="off">
      <TextField id="name" label="Name" onChange={ e => setName(e.target.value) }/>
      <TextField id="calories" label="Calories" onChange={ e => setCalories(e.target.value) }/>
      <TextField id="protein" label="Protein" onChange={ e => setProtein(e.target.value) }/>
      <TextField id="carbs" label="Carbs" onChange={ e => setCarbs(e.target.value) }/>
      <TextField id="fat" label="Fat" onChange={ e => setFat(e.target.value) }/>
      <Button
      	variant="contained"
      	type="reset"
      	color="primary"
      	onClick={ handleClick }
      	>
      	Add
      </Button>
    </form>
  );
}