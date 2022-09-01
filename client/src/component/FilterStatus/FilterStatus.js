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
        const {value} = event.target

        const filteredResults = [...initCandidate].filter(({ status }) => value.includes(status.name))
                                .map((filterData) => filterData);
        dispatch(setFilterCandidate({filter:filteredResults}))

        setStatusName(value)
    }

    return (
        <Select
            displayEmpty
            multiple
            value={statusName}
            onChange={handleChange}
            renderValue={(selected) => isEmpty(selected) ? 'Filter status' : selected.join(', ')}
            sx={{ minWidth:"200px", color:"#fff" }}
        >
            {statusData.map((status) => (
                <MenuItem key={status.name} value={status.name}>
                    <Checkbox checked={statusName.indexOf(status.name) !== -1} />
                    <ListItemText primary={status.name} />
                </MenuItem>
            ))}
        </Select>
    );
}

export default FilterStatus;