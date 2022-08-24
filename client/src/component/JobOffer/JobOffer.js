import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";

import JobInfo from "../JobInfo/JobInfo";

const JobOffer = () => {
    const [dataGet, setDataGet] = useState();

    useEffect( () => {
        axios.get('http://localhost:5000/jobs')
            .then(({ data }) => setDataGet(data))
    },[])

    return (
        <Box sx={{ width:"100%", height:"100%", background:'#525252', display:"flex", alignItems:"center", flexDirection:"column" }}>
            {dataGet && dataGet.map((job, i) => <JobInfo job={job} key={i} />)}
        </Box>
    )
}
export default JobOffer;