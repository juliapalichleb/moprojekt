import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

import { setAllCandidate, setNewUserDialog, setStatusData } from "../../redux/dataSlice";
import CandidateInfo from "../CandidateInfo/CandidateInfo";
import NewCandidate from "../NewCandidate/NewCandidate";

const Candidate = () => {
    const { allCandidate } = useSelector( (state) => state.dataReducer)

    const dispatch = useDispatch();

    useEffect( () => {

             axios.get('http://localhost:5000/users')
                .then(({ data }) => dispatch(setAllCandidate(data)))

            axios.get('http://localhost:5000/status')
                .then(({ data }) => dispatch(setStatusData(data)))

    },[dispatch])

    return (
        <>
            <Button variant="contained" onClick={() => dispatch(setNewUserDialog(true))} sx={{ ml:3, bgcolor:"#1976d2" }}>
                Add Candidate
            </Button>

            {/*<CandidateList {...props} /> */}
            <Box sx={{ width:"100%", height:"100%", display:"flex", alignItems:"center", flexDirection:"column" }}>
                {allCandidate && allCandidate.map((user, i) => <CandidateInfo candidate={user} key={i} />)}
            </Box>

            <NewCandidate sx={{ width:"100%" }} />
        </>
    )
}
export default Candidate;