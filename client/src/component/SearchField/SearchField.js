import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from "@mui/material";
import { useDispatch } from "react-redux";

import {searchingByName} from "../../redux/dataSlice";

const SearchField = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const value = event.target.value
        dispatch(searchingByName(value))
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mr:30 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by name"
                onChange={handleChange}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchField;