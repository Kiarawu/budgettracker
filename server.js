const express = require("express")
const mongoose = require("mongoose")
const morgan = require ("morgan")

const PORT = 3000

const app = express ()

app.use(compression())
app.use(express.urlencoded({ extended:true}))
app.use(mongoose)