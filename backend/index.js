const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/ToDoRoute')
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected to mongodb")).catch((err)=> console.log(err))

app.use(routes)

app.listen(PORT, ()=> console.log(`server opened on ${PORT}`))
