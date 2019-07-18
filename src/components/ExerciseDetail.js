import React from 'react';

import './ExerciseDetail.css';

const ExerciseDetail = ({ exercise }) => {
  if (!exercise) {
    return (
      <div className='exercise-detail'>
        <h3 className='not-selected'>Select an exercise to view details</h3>
      </div>
    );
  }

  const renderVideo = () => {
    const { video } = exercise;
    if (!video) {
      return (
        <div className='video not-available'>
          Video not available for this exercise
        </div>
      );
    }

    return (
      <video src={video.url} width='100%' controls>
        Your browser does not support the video tag
      </video>
    );
  };

  return (
    <div className='exercise-detail'>
      <h2>{exercise.name}</h2>
      <div className='video'>{renderVideo()}</div>
      <div className='description'>{exercise.description}</div>
    </div>
  );
};

export default ExerciseDetail;
