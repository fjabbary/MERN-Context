import { useState, useEffect } from 'react';
import Axios from 'axios';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

function Home() {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const workouts = await Axios.get('/api/workout');
            setWorkouts(workouts.data);
        }
        fetchWorkouts();
    }, [])


    return (
        <div className="home">
            <div className="workouts">
                {workouts.map(workout => <WorkoutDetails key={workout._id} workout={workout} />)}
            </div>
            <div className="add-workout">
                <WorkoutForm />
            </div>
        </div>
    )
}

export default Home