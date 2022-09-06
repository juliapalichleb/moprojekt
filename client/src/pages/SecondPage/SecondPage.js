import { Grid } from "@mui/material";

import { HeaderBarJob, JobOffer }  from "../../component/index";

const SecondPage = () =>
    <>
        <Grid item xs={12}>
            <HeaderBarJob/>
        </Grid>
        <Grid container>
            <JobOffer/>
        </Grid>
    </>

export default SecondPage;