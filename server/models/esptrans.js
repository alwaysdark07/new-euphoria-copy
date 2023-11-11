import mongoose from 'mongoose'

const schema = mongoose.Schema

const esptransSchema = new schema({}, { strict: false })

export const esptrans = mongoose.model('esptrans', esptransSchema)