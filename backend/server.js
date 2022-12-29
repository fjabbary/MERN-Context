const express = require('express');
const app = express();
const workoutRouters = require('./routes/workouts.js');
const mongoose = require('mongoose');
require('dotenv').config();


app.use(express.json());
app.use('/api/workout', workoutRouters);

mongoose.set('strictQuery', false);

//connect to DB
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on PORT ${process.env.PORT}`);
    })
})
