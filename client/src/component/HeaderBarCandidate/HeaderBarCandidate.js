import {
    AppBar,
    Box,
    Toolbar,
    Typography
} from "@mui/material";
import FilterStatus from "../FilterStatus/FilterStatus";

const HeaderBarCandidate = () =>
        <Box sx={{ height:"80px", background:"#525252" }}>
            <AppBar position="static" sx={{ background:"#325351"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Candidate
                    </Typography>
                    <FilterStatus/>
                </Toolbar>
            </AppBar>
        </Box>

export default HeaderBarCandidate;