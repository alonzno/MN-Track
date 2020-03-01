import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/Styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function FoodForm(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  function isValidInput() {
  	return true;
  }




  return (
    <form className={classes.root} noValidate auto-complete="off">
      <Input id="name" defaultValue="Name" onChange={ e => setName(e.target.value) }/>
      <Input id="calories" defaultValue="Calories" onChange={ e => setCalories(e.target.value) }/>
      <Input id="protein" defaultValue="Protein" onChange={ e => setProtein(e.target.value) }/>
      <Input id="carbs" defaultValue="Carbs" onChange={ e => setCarbs(e.target.value) }/>
      <Input id="fat" defaultValue="Fat" onChange={ e => setFat(e.target.value) }/>
      <Button
      	variant="contained"
      	color="primary"
      	onClick={ () => (props.addItem(createData(name, calories, protein, carbs, fat))) }
      	>
      	Add
      </Button>
    </form>
  );
}