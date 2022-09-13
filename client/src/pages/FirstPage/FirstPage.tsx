import { Grid } from "@mui/material";
import React from "react";

import { Candidate, HeaderBarCandidate }  from "../../component";

const FirstPage = () =>
    <>
        <Grid item xs={12}>
            <HeaderBarCandidate/>
        </Grid>
        <Grid container>
           <Candidate/>
        </Grid>
    </>

export default FirstPage;