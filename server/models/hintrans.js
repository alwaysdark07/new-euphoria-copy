import mongoose from 'mongoose'

const schema = mongoose.Schema

const hintransSchema = new schema({}, { strict: false })

export const hintrans = mongoose.model('hintrans', hintransSchema)