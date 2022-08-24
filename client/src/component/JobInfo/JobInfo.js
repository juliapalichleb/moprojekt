import { Card, CardContent, Typography } from "@mui/material";

const JobInfo = ({ job }) => {
    const { name } = job;
    return (
        <Card sx={{ width:"80%", margin:"5px" }}>
            <CardContent>
                <Typography variant="h5">{name}</Typography>
            </CardContent>
        </Card>
    )
}
export default JobInfo;