import {IconButton, InputBase, Paper, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, {ChangeEvent} from 'react';

import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import { setFilterCandidate } from "../../redux/dataSlice";

const SearchInputPaper = styled(Paper)({
    padding: '2px 4px',
    minWidth:"170px",
    display: 'flex',
    alignItems: 'center',
    width: 400,
    flexGrow:4,
    margin: "0 5px 0 5px"
}) as typeof Paper ;

const SearchField = () => {
    const { initCandidate } = useAppSelector((state) => state.dataReducer)
    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;

        const searchingResults = [...initCandidate].filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
        dispatch(setFilterCandidate({data:searchingResults, type:'search'}))
    }

    return (
        <SearchInputPaper component="form">
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by name"
                onChange={handleChange}
            />
            <IconButton type="button" sx={{ p: '10px' }}>
                <SearchIcon />
            </IconButton>
        </SearchInputPaper>
    )
}

export default SearchField;