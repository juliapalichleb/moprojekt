import { useSelector } from "react-redux";
import {Box, Card, CardContent, Typography} from "@mui/material";
import axios from "axios";

const ThirdPage = () => {
    const { selectedCandidate, statusData } = useSelector((state) => state.dataReducer)

    const handleClick = (number) => {
        axios.patch('http://localhost:5000/users/'+`${selectedCandidate._id}`,{status:number})

    }
    return (
    <Box sx={{ width:"100%", height:"100%", background:'#525252', display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <Card sx={{ width:"50%", margin:"5px" }}>
            <CardContent>
                <Box>
                    <Typography variant="h5">{selectedCandidate.nameUser}</Typography>
                    <Typography variant="h8" sx={{ color:"text.secondary" }}>E-mail: {selectedCandidate.email}</Typography>
                    <Typography variant="body2" sx={{ color:"text.secondary" }}>Age: {selectedCandidate.age}</Typography>
                    <Typography variant="body2" sx={{ color:"text.secondary" }}>tel: {selectedCandidate.tel}</Typography>
                </Box>
                <Box>

                </Box>
                <Box>
                        {statusData && statusData.map((statusData, i) =>
                            <button onClick={() => handleClick(statusData._id)} key={i}>{statusData.name}</button>)}
                </Box>
            </CardContent>
        </Card>
    </Box>
    )
}
export default ThirdPage;