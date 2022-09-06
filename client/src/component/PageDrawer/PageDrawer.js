import { Divider, Drawer, List, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import { useNavigate } from "react-router-dom";

const PageDrawer = () => {
const navigate = useNavigate();

    return (
        <Drawer variant="permanent">
            <List subheader={
                <ListSubheader sx={{ bgcolor: '#082038',color:"white" }}>
                    Menu
                </ListSubheader>
            }>
                <Divider sx={{ borderColor:'#1e4976' }} />
                <ListItemButton onClick={() => navigate('/')}>
                    <FaceRoundedIcon/>
                    <ListItemText primary="Candidate"/>
                </ListItemButton>
                <ListItemButton onClick={() => navigate('/Job')}>
                    <DescriptionRoundedIcon/>
                    <ListItemText primary="Offers"/>
                </ListItemButton>
            </List>
        </Drawer>
    )
}

export default PageDrawer;