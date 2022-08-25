import {Box, Card, CardContent, ListItemButton, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {setSelectedCandidate} from "../../redux/dataSlice";
import { useDispatch } from "react-redux";

const CandidateInfo = ({ candidate }) => {
    console.log(candidate.status.step)
    const { nameUser, email, age, tel, status } = candidate;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedCandidate(candidate))
        navigate('/CandidateProfile')
    }

    return (
        <Card sx={{ width:"50%", margin:"5px" }}>
                <ListItemButton onClick={handleClick}>
                    <CardContent sx={{display:"flex"}}>
                        <Box sx={{marginRight:"50px"}}>
                            <Typography variant="h5">{nameUser}</Typography>
                            <Typography variant="h8" sx={{ color:"text.secondary" }}>E-mail: {email}</Typography>
                            <Typography variant="body2" sx={{ color:"text.secondary" }}>Age: {age}</Typography>
                            <Typography variant="body2" sx={{ color:"text.secondary" }}>tel: {tel}</Typography>
                        </Box>
                        <Box>
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
                        </Box>
                        <Box sx={{marginLeft:"50px"}}>
                            <Typography variant="h5">Last Update</Typography>
                            <Typography variant="h8" sx={{ color:"text.secondary" }}>Date: 26.08.2022</Typography>
                        </Box>
                    </CardContent>
                </ListItemButton>
        </Card>
    )
}
export default CandidateInfo;