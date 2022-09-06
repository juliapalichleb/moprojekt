import { Select, MenuItem, Checkbox, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { isEmpty } from "lodash";

import { setFilterCandidate } from "../../redux/dataSlice";

 function FilterStatus() {
     const { statusData, initCandidate } = useSelector((state) => state.dataReducer)
     const [statusName, setStatusName] = useState([]);
     const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target

        if(!isEmpty(value)) {
            const filteredResults = [...initCandidate].filter(({ status: { name } }) => value.includes(name))
                .map((filterData) => filterData);
            dispatch(setFilterCandidate({filter:filteredResults}))
        } else {
            dispatch(setFilterCandidate({filter:initCandidate}))
        }
        setStatusName(value)
    }

    return (
        <Select
            styled='SearchInput'
            displayEmpty
            multiple
            value={statusName}
            onChange={handleChange}
            renderValue={(selected) => isEmpty(selected) ? 'Filter status' : selected.join(', ')}
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