import {AppBar, Box, Typography} from "@mui/material";


const drawerWidth = 240;
const topDrawerHeight = 100;
const Layout = ({ children }) => {

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar sx={{ height: topDrawerHeight, width: `calc(100% - ${drawerWidth}px)` }}>
                <Typography component="div" >Responsive drawer</Typography>
            </AppBar>

            {/*<Drawer variant="permanent" anchor="left" PaperProps={{sx: { width: drawerWidth,  bgcolor: '#E8E8E8' }}}>*/}
            {/*    <List>*/}
            {/*        <ListItemButton>*/}
            {/*            <FaceRoundedIcon></FaceRoundedIcon>*/}
            {/*            <ListItemText>Kandydat</ListItemText>*/}
            {/*        </ListItemButton>*/}
            {/*        <ListItemButton>*/}
            {/*            <DescriptionRoundedIcon></DescriptionRoundedIcon>*/}
            {/*            <ListItemText>Oferty</ListItemText>*/}
            {/*        </ListItemButton>*/}
            {/*    </List>*/}
            {/*</Drawer>*/}
            <Box component="main" sx={{ backgroundColor: '#F4F4F2', sm: `calc(100% - ${topDrawerHeight}px)` }}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;