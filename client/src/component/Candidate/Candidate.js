import {Box, Button} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import CandidateInfo from "../CandidateInfo/CandidateInfo";
import {useDispatch} from "react-redux";
import {setNewUserDialog, setStatusData} from "../../redux/dataSlice";
import NewCandidate from "../NewCandidate/NewCandidate";

const Candidate = () => {
    const [dataGet, setDataGet] = useState();
    const dispatch = useDispatch();

     useEffect( () => {
        axios.get('http://localhost:5000/users')
            .then(({ data }) => setDataGet(data))

         axios.get('http://localhost:5000/status')
             .then(({ data }) => dispatch(setStatusData(data)))
    },[])

    return (
        <>
            <Button variant="contained" onClick={() => dispatch(setNewUserDialog(true))} sx={{ml:3}}>Add Candidate</Button>

            <Box sx={{ width:"100%", height:"100%", background:'#525252', display:"flex", alignItems:"center", flexDirection:"column" }}>
                {dataGet && dataGet.map((user, i) => <CandidateInfo candidate={user} key={i} />)}
            </Box>

             <NewCandidate/>
        </>
    )
}
export default Candidate;