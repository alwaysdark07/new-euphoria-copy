import mongoose from 'mongoose'

const schema = mongoose.Schema

const engtransSchema = new schema({
    
    // name: {
    //     type: String,
    //     required: false
    // }
    
},{ strict: false })

export const engtrans = mongoose.model('engtrans', engtransSchema)