import { Grid } from "@mui/material";

import Candidate from "../../component/Candidate/Candidate";
import HeaderBarCandidate from "../../component/HeaderBarCandidate/HeaderBarCandidate";

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