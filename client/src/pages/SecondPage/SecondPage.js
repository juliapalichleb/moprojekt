import { Grid } from "@mui/material";

import HeaderBarJob from "../../component/HeaderBarJob/HeaderBarJob";
import JobOffer from "../../component/JobOffer/JobOffer";

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