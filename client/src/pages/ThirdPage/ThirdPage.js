import { useSelector } from "react-redux";
import {Box, Card, CardContent, Typography} from "@mui/material";
import axios from "axios";

const ThirdPage = () => {
    const { selectedCandidate, statusData } = useSelector((state) => state.dataReducer)
    console.log(selectedCandidate._id)
    const handleClick = (number) => {
        axios.patch('http://localhost:5000/users/6304cbad0486f37004e851e2`',{status:"1"})

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
                    <button onClick={() => handleClick(1)}>1</button>
                    <button onClick={() => handleClick(2)}>2</button>
                    <button onClick={() => handleClick(3)}>3</button>
                    <button onClick={() => handleClick(4)}>4</button>
                </Box>
            </CardContent>
        </Card>
    </Box>
    )
}
export default ThirdPage;