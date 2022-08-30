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
            state.allCandidate = action.payload

        },
        searchingByName: (state, action) => {
            const searchingText = action.payload;

            state.allCandidate = [...state.initCandidate].filter((data) => data.nameUser.toLowerCase().includes(searchingText.toLowerCase()))

        },
        filterCandidate: (state, action) => {
            const filterData = action.payload;

            if(!isEmpty(filterData)) {
                state.allCandidate = [...state.initCandidate].filter((data) => filterData.includes(data.status.name))
                    .map((filterData) => {return filterData});
            } else {
                state.allCandidate = [...state.initCandidate];
            }

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
                setAllCandidate,searchingByName, filterCandidate, sortingCandidate} = dataSlice.actions

export default dataSlice.reducer