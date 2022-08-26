import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setNewUserDialog} from "../../redux/dataSlice";
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