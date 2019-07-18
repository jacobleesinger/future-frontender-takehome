import React, { Component } from 'react';

import './ExerciseFilter.css';

class ExerciseFilter extends Component {
  state = { value: '' };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
    this.props.filterExercises(value);
  };
  render() {
    return (
      <div className='exercise-filter'>
        <input
          onChange={this.handleChange}
          value={this.state.value}
          placeholder='Search exercises'
        />
      </div>
    );
  }
}

export default ExerciseFilter;
