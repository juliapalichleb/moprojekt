import { createSlice } from "@reduxjs/toolkit";
import { intersectionWith, isEmpty, isUndefined, orderBy } from "lodash";
import axios from "axios";

export const dataSlice = createSlice({
    name: 'dataReducer',
    initialState: {
        initCandidate:[],
        allCandidate:[],
        filterResults: {"searchState": undefined, "filterState": []},
        selectedCandidate:[],
        statusData:[],
        NewUserDialog:false,
    },
    reducers: {
        setAllCandidate: (state, action) => {
            state.initCandidate = action.payload
            state.allCandidate = action.payload
        },
        setFilterCandidate: (state, action) => {
            const { search, filter, sort } = action.payload

            state.filterResults.searchState  = !isUndefined(search) ? search : state.filterResults.searchState
            state.filterResults.filterState  =!isUndefined(filter) ? filter : state.filterResults.filterState

            const { searchState, filterState} = state.filterResults

            state.allCandidate = (isUndefined(search) &&  isUndefined(filter)) ? state.initCandidate:
                                 (isUndefined(searchState) && !isEmpty(filterState)) ? filterState :
                                 intersectionWith(searchState,filterState, (x,y) => x._id === y._id )

            if(!isUndefined(sort))
            state.allCandidate = orderBy(state.allCandidate, ['date'],[sort])

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
            axios.post('http://localhost:5000/users',newUserData)

        }
    },
})

export const {
    setSelectedCandidate,
    setStatusData,
    setNewUserDialog,
    createNewCandidate,
    setAllCandidate,
    setFilterCandidate,
} = dataSlice.actions

export default dataSlice.reducer