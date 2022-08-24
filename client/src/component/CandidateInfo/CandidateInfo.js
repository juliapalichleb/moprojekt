import { Card, CardContent, Typography } from "@mui/material";

const CandidateInfo = ({ candidate }) => {
    const { nameUser, email, age, tel } = candidate;
    return (
        <Card sx={{ width:"80%", margin:"5px" }}>
            <CardContent>
                    <Typography variant="h5">{nameUser}</Typography>
                    <Typography variant="h8" sx={{ color:"text.secondary" }}>E-mail: {email}</Typography>
                    <Typography variant="body2" sx={{ color:"text.secondary" }}>Age: {age}</Typography>
                    <Typography variant="body2" sx={{ color:"text.secondary" }}>tel: {tel}</Typography>
            </CardContent>
        </Card>
    )
}
export default CandidateInfo;