import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {isEmpty} from "lodash";

export const dataSlice = createSlice({
    name: 'dataReducer',
    initialState: {
        initCandidate:[],
        allCandidate:[],
        selectedCandidate:[],
        statusData:[],
        NewUserDialog:false,
    },
    reducers: {
        setAllCandidate: (state, action) => {
            state.initCandidate = action.payload
            state.allCandidate =action.payload
        },
        filterCandidate: (state, action) => {
            const allResults =  state.initCandidate;
            const filterData = action.payload;

            if(!isEmpty(filterData)) {
                state.allCandidate = allResults.filter((data) => filterData.includes(data.status.name))
                    .map((filterData) => {return filterData});
            } else {
                state.allCandidate = state.initCandidate;
            }

        },
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

export const { setSelectedCandidate, setStatusData, setNewUserDialog, createNewCandidate, setAllCandidate, filterCandidate } = dataSlice.actions

export default dataSlice.reducer