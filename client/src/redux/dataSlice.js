import {createSlice, current} from "@reduxjs/toolkit";
import axios from "axios";

export const dataSlice = createSlice({
    name: 'dataReducer',
    initialState: {
        selectedCandidate:[],
        statusData:[],
        NewUserDialog:false
    },
    reducers: {
        setSelectedCandidate: (state, action) => {
            state.selectedCandidate = action.payload
        },
        setStatusData: (state, action) => {
            state.statusData = action.payload
        },
        setNewUserDialog: (state, action) => {
            state.NewUserDialog = action.payload
        },
        createNewCandidate: (state, action) => {
            const newUserData = action.payload;
            console.log(newUserData)
            axios.post('http://localhost:5000/users',newUserData)

        }
    },
})

export const { setSelectedCandidate, setStatusData, setNewUserDialog, createNewCandidate } = dataSlice.actions

export default dataSlice.reducer