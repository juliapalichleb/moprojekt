import { Drawer, List, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import { useNavigate } from "react-router-dom";

const PageDrawer = () => {
const navigate = useNavigate();
    return (
        <Drawer variant="permanent" anchor="left" PaperProps={{sx: { width: 200,  bgcolor: '#E8E8E8' }}}>
            <List
            subheader={<ListSubheader sx={{ bgcolor: '#E8E8E8' }}>Menu</ListSubheader>}>
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