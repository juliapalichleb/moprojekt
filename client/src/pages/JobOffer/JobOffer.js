import {Box, Grid} from "@mui/material";

const JobOffer = () => {

    return (
        <Grid container direction="column-reverse" justify="center" alignItems="center">
            <Grid item>
                <Box sx={{width:"800px", height:"300px", background:'#525252'}}></Box>
            </Grid>
            <Grid item>
                <Box sx={{width:"800px", height:"100px", background:"#325351"}}>Job Offer</Box>
            </Grid>
        </Grid>
    )
}
export default JobOffer;