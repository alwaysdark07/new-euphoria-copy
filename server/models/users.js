import mongoose from 'mongoose'

const schema = mongoose.Schema

const usersSchema = new schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    agreeToTerms: {
        type: String,
        required: true
    },
    subscribeToNewsletter: {
        type: String,
        required: false
    },
})

export const users = mongoose.model('users', usersSchema)