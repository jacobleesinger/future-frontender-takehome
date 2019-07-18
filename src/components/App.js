import React, { Component } from 'react';

import ExerciseList from './ExerciseList';
import ExerciseFilter from './ExerciseFilter';
import ExerciseDetail from './ExerciseDetail';
import { getExercises } from '../api';

import './App.css';

class App extends Component {
  state = {
    exercises: []
  };

  async componentDidMount() {
    const exercises = await getExercises();
    this.setState({ exercises });
  }

  render() {
    console.log(this.state.exercises);
    return (
      <div className='app'>
        <div className='left-pane'>
          <ExerciseFilter />
          <ExerciseList exercises={this.state.exercises} />
        </div>
        <div className='right-pane'>
          <ExerciseDetail />
        </div>
      </div>
    );
  }
}

export default App;
