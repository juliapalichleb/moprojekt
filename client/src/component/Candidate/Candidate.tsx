import { Button, styled } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

import { useAppDispatch, useAppSelector } from "../../Hooks/Hooks";
import { setInitData, setStatusData } from "../../redux/dataSlice";
import { CandidateList, NewCandidateForm } from "../index"

const AddButton = styled(Button)({
        margin: '10px 0 0 10px',
        backgroundColor:"#1976d2",
}) as typeof Button;

const Candidate = () => {
    const [isOpenCandidateForm, setIsOpenCandidateForm] = useState<boolean>(false);
    const { allCandidate } = useAppSelector( (state) => state.dataReducer)
    const dispatch = useAppDispatch();

    useEffect( () => {
       const fetchData = () => {
             axios.get('http://localhost:5000/users')
                 .then(({ data }) => dispatch(setInitData(data)));

             axios.get('http://localhost:5000/status')
                 .then(({ data }) => dispatch(setStatusData(data)));
       }
        return () => fetchData();
    },[dispatch])

    return (
        <>
            <AddButton  onClick={() => setIsOpenCandidateForm(true)}>
                Add Candidate
            </AddButton>

            {allCandidate && <CandidateList allCandidate={allCandidate}/>}

            {isOpenCandidateForm && <NewCandidateForm setIsOpenCandidateForm={setIsOpenCandidateForm} isOpenCandidateForm={isOpenCandidateForm}/>}
        </>
    )
}
export default Candidate;