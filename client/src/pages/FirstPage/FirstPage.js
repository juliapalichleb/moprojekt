import { Grid } from "@mui/material";

import { Candidate, HeaderBarCandidate }  from "../../component/index";

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