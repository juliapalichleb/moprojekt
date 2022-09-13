import { Grid } from "@mui/material";
import React from "react";

import { HeaderBarJob, JobOffer }  from "../../component";

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