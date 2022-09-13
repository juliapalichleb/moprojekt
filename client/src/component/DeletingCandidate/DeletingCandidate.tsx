import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Hooks/Hooks";
import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

const DeletingCandidate = () => {
    const { selectedCandidate: {_id } } = useAppSelector((state) => state.dataReducer)
    const navigate = useNavigate();

    const handleClick = () => {
        axios.delete('http://localhost:5000/users/'+ _id)
        navigate("/")
    }

    return (
        <Button onClick={handleClick} color="error" variant="contained">
            Delete candidate
        </Button>
    )
}
export default DeletingCandidate;