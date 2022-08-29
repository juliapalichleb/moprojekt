import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "lodash";
import {filterCandidate} from "../../redux/dataSlice";

 function FilterStatus() {
     const { statusData } = useSelector((state) => state.dataReducer)
     const [statusName, setStatusName] = useState([]);
     const dispatch = useDispatch();

    const handleChange = (event) => {
        const {value} = event.target
        dispatch(filterCandidate(value))
        setStatusName(value)
    }

    return (
                <Select
                    displayEmpty
                    multiple
                    value={statusName}
                    onChange={handleChange}
                    renderValue={(selected) => isEmpty(selected) ? 'Filter status' : selected.join(', ')}
                    sx={{minWidth:"200px", color:"#ffffff"}}
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