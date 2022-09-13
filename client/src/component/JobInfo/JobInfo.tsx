import { Card, CardContent, ListItemButton, Typography } from "@mui/material";
import React, { FC } from "react";

import { Jobs } from "../../interfaces/Jobs";

const JobInfo: FC<Jobs> = ( {name} ) =>
    <Card sx={{ width:"80%", margin:"5px" }}>
        <ListItemButton>
            <CardContent>
                <Typography variant="h5">{name}</Typography>
            </CardContent>
        </ListItemButton>
    </Card>

export default JobInfo;