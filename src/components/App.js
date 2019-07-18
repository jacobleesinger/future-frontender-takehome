import React, { Component } from 'react';

import ExerciseList from './ExerciseList';
import ExerciseFilter from './ExerciseFilter';
import ExerciseDetail from './ExerciseDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='left-pane'>
          <ExerciseFilter />
          <ExerciseList />
        </div>
        <div className='right-pane'>
          <ExerciseDetail />
        </div>
      </div>
    );
  }
}

export default App;
