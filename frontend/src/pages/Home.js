import { useState, useEffect, createContext } from 'react';
import Axios from 'axios';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

export const HomeContext = createContext(null)

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
        <HomeContext.Provider value={{ workouts, setWorkouts }}>
            <div className="home">
                <div className="workouts">
                    {workouts.map(workout => <WorkoutDetails key={workout._id} workout={workout} />)}
                </div>
                <div className="add-workout">
                    <WorkoutForm />
                </div>
            </div>
        </HomeContext.Provider>
    )
}

export default Home