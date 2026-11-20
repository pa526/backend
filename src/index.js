// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'

import express from 'express';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err)
})

export {app}



// (async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI/DB_NAME}`)

//         //sometimes the express server not able to talk with the database so this is used to handle it. so there can be multiple reasons of this error.
//         app.on("error", () => {
//             console.log("ERR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch(error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()