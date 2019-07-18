import React from 'react';

import './ExerciseList.css';

const ExerciseList = ({ exercises }) => {
  const renderExercise = exercise => (
    <div className='exercise' key={exercise.id}>
      {exercise.name}
    </div>
  );
  return <div className='exercise-list'>{exercises.map(renderExercise)}</div>;
};

export default ExerciseList;
