import React, { Component } from 'react';

import ExerciseList from './ExerciseList';
import ExerciseFilter from './ExerciseFilter';
import ExerciseDetail from './ExerciseDetail';
import { getExercises } from '../api';

import './App.css';

class App extends Component {
  state = {
    exercises: [],
    filteredExercises: []
  };

  async componentDidMount() {
    const exercises = await getExercises();
    this.setState({ exercises, filteredExercises: exercises });
  }

  filterExercises = name => {
    if (!name) {
      this.setState({ filteredExercises: this.state.exercises });
    }
    this.setState({
      filteredExercises: this.state.exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(name.toLowerCase())
      )
    });
  };

  render() {
    return (
      <div className='app'>
        <div className='left-pane'>
          <ExerciseFilter filterExercises={this.filterExercises} />
          <ExerciseList exercises={this.state.filteredExercises} />
        </div>
        <div className='right-pane'>
          <ExerciseDetail />
        </div>
      </div>
    );
  }
}

export default App;
