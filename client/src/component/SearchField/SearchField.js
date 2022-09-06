import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import { setFilterCandidate } from "../../redux/dataSlice";

const SearchField = () => {
    const { initCandidate } = useSelector((state) => state.dataReducer)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;

        const searchingResults = [...initCandidate].filter(({ nameUser }) => nameUser.toLowerCase().includes(value.toLowerCase()))
        dispatch(setFilterCandidate({search:searchingResults}))
    }

    return (
        <Paper component="form" styled='SearchInput'>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by name"
                onChange={handleChange}
            />
            <IconButton type="button" sx={{ p: '10px' }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchField;