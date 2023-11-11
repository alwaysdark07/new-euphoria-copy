import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// careating async action for api call
export const fetchAllUsers = createAsyncThunk('createUser/fetchUsersAll', async (a, { rejectWithValue }, c) => {
    console.log(a, c)
    try {
        const res = await axios.get(`https://api-euphoria.onrender.com/api/users`)
        return res.data.data
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }

})

const createUserSlice = createSlice({
    name: 'createUser',
    initialState: {
        isLoading: false,
        users: [],
        isError: null
    },
    reducers: {
        createUser: (state, action) => {
            // sync code for learning
            console.log(action)
            const { email, password, agreeToTerms, subscribeToNewsletter } = action.payload

            state.users.push({ email, password, agreeToTerms, subscribeToNewsletter })
        }
    },
    extraReducers:
        (builder) => {
            // [fetchAllUsers.pending]: (state, action) => {
            //     state.isLoading = true
            //     state.isError = null
            // },
            // [fetchAllUsers.fulfilled]: (state, action) => {
            //     console.log(fetchAllUsers)
            //     state.isLoading = false
            //     state.users = action.payload
            //     state.isError = null
            // }

            builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
                console.log(fetchAllUsers)
                state.isLoading = false
                state.users = action.payload
                state.isError = null
            })

            // [fetchAllUsers.rejected]: (state, action) => {
            //     console.log(action)
            //     state.isLoading = false
            //     state.users = []
            //     state.isError = action.payload
            // }
        }
})

export const { createUser } = createUserSlice.actions
export default createUserSlice.reducer





