import { Grid, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useAppSelector } from "../../Hooks/Hooks";
import dateFormat from "dateformat";
import React from "react";

const CandidateProfile = () => {
    const { selectedCandidate: { name, email, age, tel, date }} = useAppSelector((state) => state.dataReducer)

    return (
    <>
        <Grid item>
            <Avatar sx={{ width: 100, height:100 }}/>
        </Grid>
        <Grid item sx={{ flexGrow: 6 }}>
                <Typography variant="h4">{name}</Typography>
                <Typography color="text.secondary">E-mail: {email}</Typography>
                <Typography color="text.secondary">Age: {age}</Typography>
                <Typography color="text.secondary">tel: {tel}</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h4">Last Update</Typography>
            <Typography variant="h5" color="text.secondary">{dateFormat(date, "paddedShortDate")}</Typography>
        </Grid>
    </>
    )
}

export default CandidateProfile;