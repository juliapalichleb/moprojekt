import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'dataReducer',
    initialState: {
        selectedCandidate:[],
        statusData:[]
    },
    reducers: {
        setSelectedCandidate: (state, action) => {
            state.selectedCandidate = action.payload
        },
        setStatusData: (state, action) => {
            state.statusData = action.payload
        }
    },
})

export const { setSelectedCandidate, setStatusData } = dataSlice.actions

export default dataSlice.reducer