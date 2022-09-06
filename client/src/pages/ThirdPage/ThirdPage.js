import { Card, CardContent, Grid } from "@mui/material";

import { CandidateProfile, StatusStepper, DeletingCandidate }  from "../../component/index";
import styled from "styled-components";

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
                        <Grid container spacing={3} variant='gridContainer3'>
                            <CandidateProfile/>
                        </Grid>

                        <Grid container variant='gridContainer2'>
                            <StatusStepper/>
                        </Grid>

                        <Grid container variant='gridContainer1'>
                            <DeletingCandidate/>
                        </Grid>
                </CardContent>
            </Card>
        </CandidatePageContainer>

export default ThirdPage;