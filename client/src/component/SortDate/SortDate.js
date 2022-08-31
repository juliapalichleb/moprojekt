import { MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState}  from "react";
import { isEmpty } from "lodash";

import {sortingCandidate} from "../../redux/dataSlice";

const SortDate = () => {
    const dispatch = useDispatch();
    const [sortType, setSortType] = useState('');

    const handleChange = (event) => {
        const value = event.target.value
        setSortType(value)
        dispatch(sortingCandidate(value))
    }

    return (
            <Select sx={{ minWidth:"200px", color:"#ffffff", mr:2 }}
                    onChange={handleChange}
                    value={sortType}
                    renderValue={(selected) => isEmpty(selected) ? 'Sort date' : selected}
                    displayEmpty
            >
                <MenuItem value={'Unsorted'}>Unsorted</MenuItem>
                <MenuItem value={'Desc'}>Desc</MenuItem>
                <MenuItem value={'Acs'}>Acs</MenuItem>
            </Select>
    )
}

export default SortDate;