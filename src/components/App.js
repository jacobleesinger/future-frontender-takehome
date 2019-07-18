import React, { Component } from 'react';

import ExerciseList from './ExerciseList';
import ExerciseFilter from './ExerciseFilter';
import ExerciseDetail from './ExerciseDetail';
import { getExercises } from '../api';

import './App.css';

class App extends Component {
  state = {
    exercises: [],
    filteredExercises: [],
    selectedExercise: undefined
  };

  async componentDidMount() {
    const exercises = await getExercises();
    this.setState({ exercises, filteredExercises: exercises });
  }

  selectExercise = exercise => {
    this.setState({ selectedExercise: exercise });
  };

  filterExercises = term => {
    if (!term) {
      this.setState({ filteredExercises: this.state.exercises });
    }
    this.setState({
      filteredExercises: this.state.exercises.filter(
        exercise =>
          matchesName(exercise, term) ||
          matchesEquipment(exercise, term) ||
          matchesMuscleGroups(exercise, term) ||
          matchesMovements(exercise, term)
      )
    });
  };

  render() {
    return (
      <div className='app'>
        <div className='left-pane'>
          <ExerciseFilter filterExercises={this.filterExercises} />
          <ExerciseList
            exercises={this.state.filteredExercises}
            selectExercise={this.selectExercise}
          />
        </div>
        <div className='right-pane'>
          <ExerciseDetail exercise={this.state.selectedExercise} />
        </div>
      </div>
    );
  }
}

const matchesName = (exercise, term) =>
  exercise.name.toLowerCase().includes(term.toLowerCase());

const matchesMuscleGroups = (exercise, term) =>
  exercise.muscle_groups &&
  exercise.muscle_groups.toLowerCase().includes(term.toLowerCase());

const matchesEquipment = (exercise, term) =>
  exercise.equipment_required &&
  exercise.equipment_required.toLowerCase().includes(term.toLowerCase());

const matchesMovements = (exercise, term) =>
  exercise.movement_patterns &&
  exercise.movement_patterns.toLowerCase().includes(term.toLowerCase());

export default App;
