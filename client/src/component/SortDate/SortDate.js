import { MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState}  from "react";
import { isEmpty } from "lodash";

import { setFilterCandidate } from "../../redux/dataSlice";

const SortDate = () => {
    const dispatch = useDispatch();
    const [sortType, setSortType] = useState('');

    const handleChange = (event) => {
        const { value } = event.target
        setSortType(value)
        dispatch(setFilterCandidate({sort:value}))
    }

    return (
        <Select
            styled='SearchInput'
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