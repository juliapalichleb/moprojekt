import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import axios from "axios";

const DeletingCandidate = () => {
    const { selectedCandidate } = useSelector((state) => state.dataReducer)
    const navigate = useNavigate();

    const handleClick = () => {
        axios.delete('http://localhost:5000/users/'+ selectedCandidate._id)
        navigate("/")
    }

    return (
        <Button onClick={() => handleClick()} color="error" variant="contained" >
            Delete candidate
        </Button>
    )
}
export default DeletingCandidate;