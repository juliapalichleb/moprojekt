import { Select, MenuItem, Checkbox, ListItemText, SelectChangeEvent } from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import { useState } from "react";
import { isEmpty } from "lodash";

import { setFilterCandidate } from "../../redux/dataSlice";
import React from "react";

const styles = {
    minWidth:"150px",
    color:"#fff",
    flexGrow:2,
    margin: "0 5px 0 5px"
}

 function FilterStatus() {
     const { statusData, initCandidate } = useAppSelector((state) => state.dataReducer)
     const [statusName, setStatusName] = useState<string[]>([]);
     const dispatch = useAppDispatch();

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const { value } = event.target

        if(!isEmpty(value)) {
            const filteredResults = [...initCandidate].filter(({ status: { name } }) => value.includes(name))
                .map((filterData) => filterData);
            dispatch(setFilterCandidate({data:filteredResults, type:'filter'}))
        } else {
            dispatch(setFilterCandidate({data:initCandidate, type:'filter'}))
        }

        setStatusName( typeof value === 'string' ? [] : value)
    }

    return (
        <Select
            sx={styles}
            displayEmpty
            multiple
            value={statusName}
            onChange={handleChange}
            renderValue={(selected) => isEmpty(selected) ? 'Filter status' : statusName.join(',') }
        >
            {statusData.map(({ name }) => (
                <MenuItem key={name} value={name}>
                    <Checkbox checked={statusName.indexOf(name) !== -1} />
                    <ListItemText primary={name} />
                </MenuItem>
            ))}
        </Select>
    );
}

export default FilterStatus;