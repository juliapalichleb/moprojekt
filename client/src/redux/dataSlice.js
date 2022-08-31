import { createSlice } from "@reduxjs/toolkit";
import _, { isEmpty } from "lodash";
import axios from "axios";

export const dataSlice = createSlice({
    name: 'dataReducer',
    initialState: {
        initCandidate:[],
        allCandidate:[],
        filterResults: [],
        searchResults: [],
        sortResults:[],
        selectedCandidate:[],
        statusData:[],
        NewUserDialog:false,
    },
    reducers: {
        setAllCandidate: (state, action) => {
            state.initCandidate = action.payload
            state.allCandidate = action.payload
            state.filterResults = action.payload
            state.searchResults = action.payload
            state.sortResults = action.payload
        },
        searchingByName: (state, action) => {
            const searchingText = action.payload.toLowerCase();

            state.searchResults = [...state.sortResults].filter(({ nameUser }) => nameUser.toLowerCase().includes(searchingText))
            state.allCandidate = _.intersectionWith(state.filterResults,state.searchResults, (x,y) => x._id === y._id )

        },
        filterCandidate: (state, action) => {
            const filterData = action.payload;

            if(!isEmpty(filterData)) {
                state.filterResults = [...state.sortResults].filter(({ status }) => filterData.includes(status.name))
                    .map((filterData) => {return filterData});
            } else {
                state.filterResults = [...state.sortResults];
            }

            state.allCandidate = _.intersectionWith(state.searchResults,state.filterResults, (x,y) => x._id === y._id )

        },
        sortingCandidate: (state, action) => {
            const sortingType = action.payload

            if( sortingType === 'Acs' )
                state.sortResults = [...state.initCandidate].sort((a,b) => a.date < b.date ? 1 : -1)
            if ( sortingType === 'Desc' )
                state.sortResults = [...state.initCandidate].sort((a,b) => a.date > b.date ? 1 : -1)
            if( sortingType === 'Unsorted')
                state.sortResults = [...state.initCandidate]

            state.allCandidate = state.sortResults
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

export const { setSelectedCandidate, setStatusData, setNewUserDialog, createNewCandidate,
                setAllCandidate,searchingByName, filterCandidate, sortingCandidate } = dataSlice.actions

export default dataSlice.reducer