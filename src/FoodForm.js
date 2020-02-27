import React from 'react';
import ReactDOM from 'react-dom';
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

export default function FoodForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate auto-complete="off">
      <Input defaultValue="Name"/>
      <Input defaultValue="Calories"/>
      <Input defaultValue="Protein"/>
      <Input defaultValue="Carbs"/>
      <Input defaultValue="Fat"/>
      <Button
      	variant="contained"
      	color="primary">
      	Add
      </Button>
    </form>
  );
}