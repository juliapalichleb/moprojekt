import { Card, CardContent, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setSelectedCandidate } from "../../redux/dataSlice";
import dateFormat from "dateformat";

const CandidateInfo = ({ candidate }) => {
    const { name, email, age, tel, status, date } = candidate;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedCandidate(candidate))
        navigate('/CandidateProfile')
    }

    return (
        <Card variant="ClickableCard" onClick={handleClick}>
                <CardContent sx={{ display:"flex"}}>
                        <Grid sx={{flexGrow: 10}} >
                            <Typography variant="h5">{name}</Typography>
                            <Typography variant="h8" color="text.secondary">E-mail: {email}</Typography>
                            <Typography variant="body2" color="text.secondary">Age: {age}</Typography>
                            <Typography variant="body2" color="text.secondary">tel: {tel}</Typography>
                        </Grid>
                        <Grid sx={{flexGrow: 3}}>
                            <Stepper activeStep={status.step} alternativeLabel>
                                <Step>
                                    <StepLabel>Telephone</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Interview</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Human Resources</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Decision</StepLabel>
                                </Step>
                            </Stepper>
                        </Grid>
                        <Grid>
                            <Typography variant="h5">Last Update</Typography>
                            <Typography variant="h8" color="text.secondary">Date: {dateFormat(date, "paddedShortDate")}</Typography>
                        </Grid>
                </CardContent>
        </Card>
    )
}

export default CandidateInfo;