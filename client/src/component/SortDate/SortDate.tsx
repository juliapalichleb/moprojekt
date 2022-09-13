import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState}  from "react";
import { isEmpty } from "lodash";
import React from "react";

import { useAppDispatch } from "../../Hooks/Hooks";
import { setFilterCandidate } from "../../redux/dataSlice";

const styles = {
    minWidth:"150px",
    color:"#fff",
    flexGrow:2,
    margin: "0 5px 0 5px"
}

const SortDate = () => {
    const dispatch = useAppDispatch();
    const [sortType, setSortType] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        const { value } = event.target
        setSortType(value)
        dispatch(setFilterCandidate({data:value, type:'sort'}))
    }

    return (
        <Select
            sx={styles}
            onChange={handleChange}
            value={sortType}
            renderValue={(selected) => isEmpty(selected) ? 'Sort date' : selected}
            displayEmpty
        >
            <MenuItem value={'desc'}>Desc</MenuItem>
            <MenuItem value={'acs'}>Acs</MenuItem>
        </Select>
    )
}

export default SortDate;