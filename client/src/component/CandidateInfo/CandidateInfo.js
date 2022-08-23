import {Card, CardContent, Typography} from "@mui/material";

const CandidateInfo = () => {
    return (
        <Card>
            <CardContent>
                    <Typography variant="h5">Julia Palichleb</Typography>
                    <Typography variant="h8" sx={{color:"text.secondary"}}>E-mail: @mail.pl</Typography>
                    <Typography variant="body2" sx={{color:"text.secondary"}}>Wiek: 22</Typography>
                    <Typography variant="body2" sx={{color:"text.secondary"}}>tel: 123456789</Typography>
            </CardContent>
        </Card>
    )
}
export default CandidateInfo;