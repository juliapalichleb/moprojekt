import { intersectionWith, orderBy } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { Candidate } from "../interfaces/Candidate";
import { Status } from "../interfaces/Status";

interface DataSlice {
    initCandidate: Candidate[],
    allCandidate:Candidate[],
    filterResults: {"searchState": Candidate[] , "filterState": Candidate[]},
    selectedCandidate: Candidate,
    statusData: Status[],
}

const initialState: DataSlice = {
    initCandidate: [],
    allCandidate:[],
    filterResults: {"searchState": [], "filterState": []},
    selectedCandidate: {
        _id: '',
        name:'',
        email:'',
        age: 0,
        tel: 0,
        date:'',
        status: {
            _id: '',
            name: '',
            step: 0
        }
    },
    statusData:[],
}

export const dataSlice = createSlice({
    name: 'dataReducer',
    initialState,
    reducers: {
        setInitData: (state, action) => {
            state.initCandidate = action.payload
            state.allCandidate = orderBy(action.payload, ['date'],['desc'])

            state.filterResults.filterState = action.payload
            state.filterResults.searchState = action.payload
        },
        setFilterCandidate: (state, action) => {
            const { data , type } = action.payload

            if (type === 'search')
            state.filterResults.searchState  = data

            if (type === 'filter')
            state.filterResults.filterState  = data

            const { searchState, filterState } = state.filterResults
            state.allCandidate = intersectionWith(searchState,filterState, (x,y) => x._id === y._id)

            if (type === 'sort')
            state.allCandidate = orderBy(state.allCandidate, ['date'],[data])
        },
        setSelectedCandidate: (state, action) => {
            state.selectedCandidate = action.payload
        },
        setStatusData: (state, action) => {
            state.statusData = action.payload
        },
        createNewCandidate: (state, action) => {
            const newUserData = action.payload;
            axios.post('http://localhost:5000/users',newUserData)
        }
    },
})

export const {
    setSelectedCandidate,
    setStatusData,
    createNewCandidate,
    setInitData,
    setFilterCandidate,
} = dataSlice.actions

export default dataSlice.reducer