import { Card, CardContent, Grid } from "@mui/material";
import styled from "styled-components";
import React from "react";

import { CandidateProfile, StatusStepper, DeletingCandidate }  from "../../component";

const styles = {
    gridContainer1: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px"
    },
    gridContainer2: {
        display: "flex",
        flexDirection: "column",
        marginTop: "10px"
    },
    gridContainer3: {
        display: "flex",
    }
}

const CandidatePageContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top:5%;
`

const ThirdPage = () =>
    <CandidatePageContainer>
        <Card sx={{ width:"60%"}}>
            <CardContent>
                <Grid sx={styles.gridContainer3} container spacing={3}>
                    <CandidateProfile/>
                </Grid>

                <Grid sx={styles.gridContainer2} container>
                    <StatusStepper/>
                </Grid>

                <Grid sx={styles.gridContainer1} container>
                    <DeletingCandidate/>
                </Grid>
            </CardContent>
        </Card>
    </CandidatePageContainer>

export default ThirdPage;
