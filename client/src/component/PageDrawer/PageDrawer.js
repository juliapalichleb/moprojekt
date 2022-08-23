import {Drawer, List, ListItemButton, ListItemText} from "@mui/material";
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import {useNavigate} from "react-router-dom";

const PageDrawer = () =>{
const navigate = useNavigate();
    return (
    <>
        <Drawer variant="permanent" anchor="left" PaperProps={{sx: { width: 240,  bgcolor: '#E8E8E8' }}}>
            <List>
                <ListItemButton onClick={() => navigate('/')}>
                    <FaceRoundedIcon></FaceRoundedIcon>
                    <ListItemText>Candidate</ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => navigate('/Job')}>
                    <DescriptionRoundedIcon></DescriptionRoundedIcon>
                    <ListItemText>Job Offers</ListItemText>
                </ListItemButton>
            </List>
        </Drawer>
    </>
    )
}

export default PageDrawer;