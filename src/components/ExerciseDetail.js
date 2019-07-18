import React from 'react';

const ExerciseDetail = ({ exercise }) => {
  console.log(exercise);
  if (!exercise) {
    return (
      <div className='exercise-detail'>
        <h3 className='not-selected'>Select an exercise to view details</h3>
      </div>
    );
  }
  return <div className='exercise-detail'>{exercise.name}</div>;
};

export default ExerciseDetail;
