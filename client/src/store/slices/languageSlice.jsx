import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// careating async action for api call
export const fetchLanguageThunk = createAsyncThunk('fetchLanguage/getLanguageData', async (params, { rejectWithValue }, c) => {
    console.log(params, c)
    try {
        const res = await axios.get(`https://good-gray-fly-gown.cyclic.app/api/translate`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept-Language': params
            }
        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }

})

const fetchLanguageSlice = createSlice({
    name: 'fetchLanguage',
    initialState: {
        isLoading: false,
        languageData: [],
        isError: null
    },
    extraReducers:
        (builder) => {
            builder.addCase(fetchLanguageThunk.fulfilled, (state, action) => {
                console.log(action)
                state.isLoading = false
                state.languageData = action.payload
                state.isError = null
            })
        }
})

export const { createUser } = fetchLanguageSlice.actions
export default fetchLanguageSlice.reducer





