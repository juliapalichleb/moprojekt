import {Box, Grid} from "@mui/material";
import axios from "axios";
import CandidateInfo from "../../component/CandidateInfo/CandidateInfo";

const Candidate = () => {

    const handleOnClick2 = () => {
        axios.post('http://localhost:5000/users',{
            email: "Marek",
            nameUser: "Julia",
            name: "Julia",
            age: "10",
            tel: "123456789"
        })
    }

    return (
        <Grid container direction="column-reverse" justify="center" alignItems="center">
            <Grid item>
                <Box sx={{width:"800px", height:"300px", background:'#525252'}}>
                    <CandidateInfo></CandidateInfo>
                </Box>
            </Grid>
            <Grid item>
                <Box sx={{width:"800px", height:"100px", background:"#325351"}}>Candidate
                    <button onClick={handleOnClick2}>2KlIK2</button>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Candidate;