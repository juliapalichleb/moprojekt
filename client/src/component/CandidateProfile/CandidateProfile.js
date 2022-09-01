import { Box, Grid, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";

const CandidateProfile = () => {
    const { selectedCandidate: { nameUser, email, age, tel, date} } = useSelector((state) => state.dataReducer)
    // const { nameUser, email, age, tel, date} = selectedCandidate;

    return (
    <>
        <Grid item sx={{ display:"flex" }}>
            <Avatar sx={{ width: 100, height:100, mr: 3 }}/>
            <Box>
                <Typography variant="h4">{nameUser}</Typography>
                <Typography variant="h8" sx={{ color:"text.secondary" }}>E-mail: {email}</Typography>
                <Typography variant="body2" sx={{ color:"text.secondary" }}>Age: {age}</Typography>
                <Typography variant="body2" sx={{ color:"text.secondary" }}>tel: {tel}</Typography>
            </Box>
        </Grid>
        <Grid item>
            <Typography variant="h4">Last Update</Typography>
            <Typography variant="h5" sx={{ color:"text.secondary" }}>{date.slice(0, 10)}</Typography>
        </Grid>
    </>
    )
}

export default CandidateProfile;