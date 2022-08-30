import { Button, Grid, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import axios from "axios";

const StatusStepper = () => {
    const { selectedCandidate, statusData } = useSelector((state) => state.dataReducer)

    const handleClick = (number) => {
        const date = `${new Date().toISOString()}`;
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

        </>
    )
}
export default StatusStepper;