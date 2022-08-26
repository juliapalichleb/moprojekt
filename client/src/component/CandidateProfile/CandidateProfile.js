import {useSelector} from "react-redux";
import {Box, Grid, Typography} from "@mui/material";
import Avatar from '@mui/material/Avatar';

const CandidateProfile = () => {
    const { selectedCandidate } = useSelector((state) => state.dataReducer)

    return (
    <>
            <Grid item sx={{display:"flex"}}>
                <Avatar sx={{ width: 100, height:100, mr: 3}}/>
                <Box>
                    <Typography variant="h4">{selectedCandidate.nameUser}</Typography>
                    <Typography variant="h8" sx={{ color:"text.secondary" }}>E-mail: {selectedCandidate.email}</Typography>
                    <Typography variant="body2" sx={{ color:"text.secondary" }}>Age: {selectedCandidate.age}</Typography>
                    <Typography variant="body2" sx={{ color:"text.secondary" }}>tel: {selectedCandidate.tel}</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Typography variant="h4">Last Update</Typography>
                <Typography variant="h5" sx={{ color:"text.secondary" }}>{selectedCandidate.date}</Typography>
            </Grid>
    </>
    )
}
export default CandidateProfile;