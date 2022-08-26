import {Box, Button, Grid, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import axios from "axios";

const StatusStepper = () => {
    const { selectedCandidate, statusData } = useSelector((state) => state.dataReducer)
    const handleClick = (number) => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        axios.patch('http://localhost:5000/users/'+`${selectedCandidate._id}`,{status:number, date:date})}

    return (
        <>
            <Grid item sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Typography variant="h4">Current Status</Typography>
            </Grid>
            <Grid item>
                <Stepper activeStep={selectedCandidate.status.step} alternativeLabel>
                    {statusData && statusData.map((statusData, i) => (
                        <Step key={i}>
                            <StepLabel key={i}>
                                <Button variant="text"  onClick={() => handleClick(statusData._id)}>
                                    {statusData.name}
                                </Button>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid>
            <Grid item sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Button variant="contained">Next Stage</Button>
            </Grid>
        </>
    )
}
export default StatusStepper;