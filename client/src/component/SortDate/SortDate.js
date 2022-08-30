import { Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useDispatch} from "react-redux";
import {sortingCandidate} from "../../redux/dataSlice";
import {useState} from "react";
import {isEmpty} from "lodash";

const SortDate = () => {
    const dispatch = useDispatch();
    const [sortType, setSortType] = useState('');

    const handleChange = (event) => {
        const value = event.target.value

        setSortType(value)
        dispatch(sortingCandidate(value))
    }

    return (
            <Select sx={{minWidth:"200px", color:"#ffffff", mr:2}}
                    onChange={handleChange}
                    value={sortType}
                    renderValue={(selected) => isEmpty(selected) ? 'Sort date' : selected}
                    displayEmpty
            >
                <MenuItem value={'Desc'}>Desc</MenuItem>
                <MenuItem value={'Acs'}>Acs</MenuItem>
            </Select>
    )
}

export default SortDate;