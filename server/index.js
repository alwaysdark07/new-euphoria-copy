import 'dotenv/config'
// const express = require("express")
// const connectDB = require("./connectDB")
// const users = require("./models/users")
// const mongoose = require("mongoose")
import express from 'express'
import { connectDB } from "./connectDB.js"
import { users } from "./models/users.js"
import mongoose from "mongoose"
import { I18n } from 'i18n'
import * as path from 'path'
import zlib from 'zlib'
import { engtrans } from './models/engtrans.js'
import { esptrans } from './models/esptrans.js'
import { hintrans } from './models/hintrans.js'
import engLangLocal from './translations/en.json' assert {type: "json"}
import espLangLocal from './translations/es.json' assert {type: "json"}
import hinLangLocal from './translations/Hindi.json' assert {type: "json"}

const i18n = new I18n({
    locales: ['en', 'Hindi', 'es'],
    // directory: path.dirname('./translations'),
    directory: path.join('./', 'translations'),
    defaultLocale: 'en'
})

connectDB()
const app = express()
const port = process.env.PORT || 8000

app.use(i18n.init)

// app.get('/api/translate', (req, res) => {
//     res.header('Access-Control-Allow-Origin', "*")
//     console.log(req.headers['accept-language'])
//     const translations = i18n?.getCatalog(req.headers['accept-language'])
//     res.send(translations)
// })

app.get('/', (req, res) => {
    res.send('just yesterday.')
})

app.get('/api/users', async (req, res) => {
    try {

        // const users = await mongoose.connection.db.collection("users").find();
        // console.log(users);

        // const data = await users.findOne({email:"fdas"})
        const data = await users.insert({})

        if (!data) {
            throw new Error('Error occured while fetching data')
        }

        console.log(typeof data)

        res.header('Access-Control-Allow-Origin', "*")

        res.status(200).json({ statusCode: 200, data })

    } catch (error) {
        console.log(error)
        res.header('Access-Control-Allow-Origin', "*")
        res.status(500).json({ error: 'Error occured while fetching ' })
    }
})

// insert langauge translation into mongodb collectioin 'engtrans'
app.post('/engtransInsert', async (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', "*")

        console.log(engLangLocal)

        const deleteAll = await engtrans.deleteMany({})
        console.log(deleteAll)
        const insertDocument = await engtrans.create(engLangLocal)

        console.log(insertDocument)
        res.send(insertDocument)

    } catch (error) {
        console.log(error)
        res.header('Access-Control-Allow-Origin', "*")
    }
})

// insert langauge translation into mongodb collectioin 'esptrans'
app.post('/esptransInsert', async (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', "*")

        console.log(engLangLocal)

        const deleteAll = await esptrans.deleteMany({})
        console.log(deleteAll)
        const insertDocument = await esptrans.create(espLangLocal)

        console.log(insertDocument)
        res.send(insertDocument)

    } catch (error) {
        console.log(error)
        res.header('Access-Control-Allow-Origin', "*")
    }
})

// insert langauge translation into mongodb collectioin 'hintrans'
app.post('/hintransInsert', async (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', "*")

        console.log(engLangLocal)

        const deleteAll = await hintrans.deleteMany({})
        console.log(deleteAll)
        const insertDocument = await hintrans.create(hinLangLocal)

        console.log(insertDocument)
        res.send(insertDocument)

    } catch (error) {
        console.log(error)
        res.header('Access-Control-Allow-Origin', "*")
    }
})

// translation api for frontend
app.get('/api/translate', async (req, res) => {
    res.header('Access-Control-Allow-Origin', "*")
    console.log(req.headers['accept-language'])

    if (req.headers['accept-language'] == "Hindi") {
        const resp = await hintrans.find({})
        res.send(resp)
    }
    else if (req.headers['accept-language'] == "English") {
        const resp = await engtrans.find({})
        res.send(resp)
    }
    else if (req.headers['accept-language'] == "Spanish") {
        const resp = await esptrans.find({})
        res.send(resp)
    }

})

// function to sync trans files with DB
async function updateMongoTrans() {
    await engtrans.deleteMany({}).then(e => engtrans.create(engLangLocal))
    await esptrans.deleteMany({}).then(e => esptrans.create(espLangLocal))
    await hintrans.deleteMany({}).then(e => hintrans.create(hinLangLocal))
}

updateMongoTrans()

app.listen(port, () => console.log(`app started on port ${port}`))