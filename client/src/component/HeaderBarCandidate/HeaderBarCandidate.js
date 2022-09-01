import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import FilterSystem from "../FilterSystem/FilterSystem";

const HeaderBarCandidate = () =>
        <Box sx={{ height:"80px" }}>
            <AppBar position="static" sx={{ background:"#082038"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Candidate
                    </Typography>
                    <FilterSystem/>
                </Toolbar>
            </AppBar>
        </Box>

export default HeaderBarCandidate;