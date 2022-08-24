import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import CandidateInfo from "../CandidateInfo/CandidateInfo";

const Candidate = () => {
    const [dataGet, setDataGet] = useState();

     useEffect( () => {
        axios.get('http://localhost:5000/users')
            .then(({ data }) => setDataGet(data))
    },[])

    return (
            <Box sx={{ width:"100%", height:"100%", background:'#525252', display:"flex", alignItems:"center", flexDirection:"column" }}>
                {dataGet && dataGet.map((user, i) => <CandidateInfo candidate={user} key={i} />)}
            </Box>
    )
}
export default Candidate;