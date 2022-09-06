import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

import { setAllCandidate, setStatusData } from "../../redux/dataSlice";
import { CandidateList, NewCandidateForm } from "../index"

const Candidate = () => {
    const [isOpenCandidateForm, setIsOpenCandidateForm] = useState(false);
    const { allCandidate } = useSelector( (state) => state.dataReducer)
    const dispatch = useDispatch();

    useEffect( () => {

             axios.get('http://localhost:5000/users')
                .then(({ data }) => dispatch(setAllCandidate(data)))

            axios.get('http://localhost:5000/status')
                .then(({ data }) => dispatch(setStatusData(data)))

    },[dispatch])

    return (
        <>
            <Button variant="contained" styled="AddButton" onClick={() => setIsOpenCandidateForm(true)}>
                Add Candidate
            </Button>

            {allCandidate && <CandidateList allCandidate={allCandidate} />}

            {isOpenCandidateForm && <NewCandidateForm setIsOpenCandidateForm={setIsOpenCandidateForm} isOpenCandidateForm={isOpenCandidateForm} sx={{ width:"100%" }} />}
        </>
    )
}
export default Candidate;