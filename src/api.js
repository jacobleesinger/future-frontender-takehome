import axios from 'axios';

export const getExercises = async () => {
  try {
    const response = await axios.get(
      'http://localhost:3000/Future_FE_exercises.json'
    );
    return response.data;
  } catch (e) {
    console.error('error fetching data', e);
  }
};
