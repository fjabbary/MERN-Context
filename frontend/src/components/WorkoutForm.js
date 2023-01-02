import { useState, useContext } from 'react';
import Axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';
import { HomeContext } from '../pages/Home';

function WorkoutForm() {
    const { workouts, setWorkouts } = useContext(HomeContext);

    const mongoObjectId = function () {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };

    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("");
    const [errMsg, setErrMsg] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newWorkout = { _id: mongoObjectId(), title, load, reps };

        if (title && load && reps) {
            await Axios.post('/api/workout/', newWorkout);
            setWorkouts([newWorkout, ...workouts]);

            setTitle("")
            setLoad("")
            setReps("")
            setErrMsg("")
        } else {
            setErrMsg('All fields are required')
        }
    }


    return (
        <div>
            <h3>Add a New Workout</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Exercise Title:</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div className="form-group">
                    <label>Load (in kg):</label>
                    <input type="number" onChange={e => setLoad(e.target.value)} value={load} />
                </div>
                <div className="form-group">
                    <label>Reps:</label>
                    <input type="text" onChange={e => setReps(e.target.value)} value={reps} />
                </div>
                <p className="error-message"><small>{errMsg}</small></p>
                <button className="submit" type="submit">Add Workout</button>
            </form>
        </div>
    )
}

export default WorkoutForm