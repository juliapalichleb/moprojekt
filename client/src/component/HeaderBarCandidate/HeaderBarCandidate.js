import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import FilterStatus from "../FilterStatus/FilterStatus";
import SortDate from "../SortDate/SortDate";
import SearchField from "../SearchField/SearchField";

const HeaderBarCandidate = () =>
        <Box sx={{ height:"80px" }}>
            <AppBar position="static" sx={{ background:"#082038"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Candidate
                    </Typography>
                    <SearchField/>
                    <SortDate/>
                    <FilterStatus/>
                </Toolbar>
            </AppBar>
        </Box>

export default HeaderBarCandidate;