import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const HeaderBarJob = () =>
    <Box sx={{ height:"80px", background:"#525252" }}>
        <AppBar position="static" sx={{ background:"#325351"}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Job Offer
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>

export default HeaderBarJob;