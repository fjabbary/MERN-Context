import { useState } from 'react';
import Axios from 'axios'

function WorkoutForm() {

    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newWorkout = { title, load, reps };
        await Axios.post('/api/workout/', newWorkout);

        setTitle("")
        setLoad("")
        setReps("")
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
                <button className="submit" type="submit">Add Workout</button>
            </form>
        </div>
    )
}

export default WorkoutForm