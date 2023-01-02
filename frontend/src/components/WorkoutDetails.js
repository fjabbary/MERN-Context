import { useContext } from 'react';
import { HomeContext } from '../pages/Home';
import Axios from 'axios'

function WorkoutDetails({ workout }) {
    const { workouts, setWorkouts } = useContext(HomeContext);
    const { _id } = workout;

    const handleDelete = async () => {
        await Axios.delete('/api/workout/' + _id)
        setWorkouts(workouts.filter(workout => workout._id !== _id))
    }

    return (
        <div className="workout-card">
            <h2>{workout.title} <button className="btn-del" onClick={handleDelete}>Delete</button></h2>
            <p><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails