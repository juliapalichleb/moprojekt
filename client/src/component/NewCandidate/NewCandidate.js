import { Dialog, DialogTitle } from "@mui/material";
import { useSelector } from "react-redux";

import NewCandidateForm from "../NewCandidateForm/NewCandidateForm";

const NewCandidate = () => {
    const { NewUserDialog } = useSelector((state) => state.dataReducer)

    return (
            <Dialog open={NewUserDialog} >
                <DialogTitle>Adding new candidate form</DialogTitle>
                    <NewCandidateForm/>
            </Dialog>
    )
}

export default NewCandidate;