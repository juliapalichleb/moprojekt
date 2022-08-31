import { Box, Card, CardContent, Grid } from "@mui/material";

import CandidateProfile from "../../component/CandidateProfile/CandidateProfile";
import StatusStepper from "../../component/StatusStepper/StatusStepper";
import DeletingCandidate from "../../component/DeletingCandidate/DeletingCandidate";

const ThirdPage = () =>
        <Box sx={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
            <Card sx={{ width:"60%", margin:"100px" }}>
                <CardContent>
                    <Grid container my={2}>
                        <Grid container spacing={40}  item xs={12} sx={{ display:"flex" }}>
                            <CandidateProfile/>
                        </Grid>

                        <Grid container item xs={12} mt={2} spacing={3} sx={{ display:"flex", flexDirection:"column" }}>
                            <StatusStepper/>
                        </Grid>

                        <Grid container item xs={12} mt={2} sx={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <DeletingCandidate sx={{ margin:"50px" }}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>

export default ThirdPage;