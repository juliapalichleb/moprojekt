import { Card, CardContent, Grid, Step, StepLabel, Stepper, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";
import React, { FC } from "react";

import { setSelectedCandidate } from "../../redux/dataSlice";
import { Candidate } from "../../interfaces/Candidate";
import { useAppDispatch } from "../../Hooks/Hooks";

const ClickableCard = styled(Card)({
    width:"50%",
    margin:"5px",
    padding:"5px",

    '&:hover': {
        opacity:'0.9',
        cursor: 'pointer'
    },
    '&:active': {
        background: "",
        transform: 'translateY(4px)',
        cursor: 'pointer'
    }
}) as typeof Card;

interface ICandidateInfo {
    candidate: Candidate,
}

const CandidateInfo: FC<ICandidateInfo> = ({ candidate }) => {
    const { name, email, age, tel, status, date } = candidate;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setSelectedCandidate(candidate))
        navigate('/CandidateProfile')
    }

    return (
        <ClickableCard onClick={handleClick}>
                <CardContent sx={{ display:"flex"}}>
                        <Grid sx={{ flexGrow: 10 }} >
                            <Typography variant="h5">{name}</Typography>
                            <Typography variant="body2" color="text.secondary">E-mail: {email}</Typography>
                            <Typography variant="body2" color="text.secondary">Age: {age}</Typography>
                            <Typography variant="body2" color="text.secondary">tel: {tel}</Typography>
                        </Grid>
                        <Grid sx={{ flexGrow: 3 }}>
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
                            <Typography variant="body2" color="text.secondary">Date: {dateFormat(date, "paddedShortDate")}</Typography>
                        </Grid>
                </CardContent>
        </ClickableCard>
    )
}

export default CandidateInfo;