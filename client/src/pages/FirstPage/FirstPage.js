import Candidate from "../../component/Candidate/Candidate";
import HeaderBarCandidate from "../../component/HeaderBarCandidate/HeaderBarCandidate";

import { Grid } from "@mui/material";

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