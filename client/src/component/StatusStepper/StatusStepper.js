import { Button, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const StatusStepper = () => {
    const { selectedCandidate: { _id, status }, statusData } = useSelector((state) => state.dataReducer)
    const navigate = useNavigate();

    const handleClick = (number) => {
        const date = `${new Date().toISOString()}`;
        axios.patch('http://localhost:5000/users/'+ _id,{status:number, date:date})
        navigate("/")
    }

    return (
        <>
            <Grid item variant='gridContainer1'>
                <Typography variant="h4">Current Status</Typography>
            </Grid>

            <Grid item>
                <Stepper activeStep={status.step} alternativeLabel>
                    {statusData && statusData.map(({ _id, name }, i) => (
                        <Step key={i}>
                            <StepLabel key={i}>
                                <Button variant="text" onClick={() => handleClick(_id)}>
                                    {name}
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