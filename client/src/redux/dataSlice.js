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
        },
        searchingByName: (state, action) => {
            const searchingText = action.payload.toLowerCase();

            state.searchResults = [...state.initCandidate].filter(({ nameUser }) => nameUser.toLowerCase().includes(searchingText))
            state.allCandidate = _.intersectionWith(state.filterResults,state.searchResults, (x,y) => x._id === y._id )

        },
        filterCandidate: (state, action) => {
            const filterData = action.payload;

            if(!isEmpty(filterData)) {
                state.filterResults = [...state.initCandidate].filter(({ status }) => filterData.includes(status.name))
                    .map((filterData) => {return filterData});
            } else {
                state.filterResults = [...state.initCandidate];
            }

            state.allCandidate = _.intersectionWith(state.searchResults,state.filterResults, (x,y) => x._id === y._id )

        },
        sortingCandidate: (state, action) => {
            const sortingType = action.payload
            if( sortingType === 'Acs' )
                state.allCandidate = [...state.allCandidate].sort((a,b) => a.date < b.date ? 1 : -1)
            if ( sortingType === 'Desc' )
                state.allCandidate = [...state.allCandidate].sort((a,b) => a.date > b.date ? 1 : -1)

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