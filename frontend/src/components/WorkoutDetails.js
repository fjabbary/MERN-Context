import React from 'react'

function WorkoutDetails({ workout }) {
    return (
        <div className="workout-card">
            <h2>{workout.title}</h2>
            <p><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails