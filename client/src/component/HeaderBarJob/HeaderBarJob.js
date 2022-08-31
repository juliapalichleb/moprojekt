import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const HeaderBarJob = () =>
    <Box sx={{ height:"80px" }}>
        <AppBar position="static" sx={{ background:"#082038"}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Job Offer
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>

export default HeaderBarJob;