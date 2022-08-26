import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import axios from "axios";

const DeletingCandidate = () => {
const { selectedCandidate } = useSelector((state) => state.dataReducer)

const handleClick = () => axios.delete('http://localhost:5000/users/'+`${selectedCandidate._id}`)

    return (
        <Button onClick={() => handleClick()} color="error" variant="contained" >
            Delete candidate
        </Button>
    )
}
export default DeletingCandidate;