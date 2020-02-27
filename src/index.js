import React from 'react';
import ReactDOM from 'react-dom';
import FoodTable from './FoodTable.js';
import FoodForm from './FoodForm.js';

function App() {
  return (
    <div>
      <FoodTable />
      <FoodForm />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
//ReactDOM.render(<App />, document.getElementById('root'));