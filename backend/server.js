require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

const app=express()

app.use(express.json())

//routes

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, function(req, res){
            console.log('Database Connected & Server Running.....')
        })
    }).catch((error)=>{
        console.log(error)
    })

