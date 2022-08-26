import {Form, Formik} from "formik";
import {Box, Button, DialogActions, DialogContent, TextField} from "@mui/material";
import FormInput from "../FormInput/FormInput";
import {createNewCandidate, setNewUserDialog, setStatusData} from "../../redux/dataSlice";
import {useDispatch, useSelector} from "react-redux";

const NewCandidateForm = () => {
    const { statusData } = useSelector((state) => state.dataReducer)
    const idStatus = statusData[0]._id;
    const dispatch = useDispatch();

    return (
        <>
            <Formik
                initialValues={{nameUser:"",email:"",age:"",tel:"",status:idStatus}}
            onSubmit={(values) => {
                dispatch(createNewCandidate(values))
            }}>
                {() => (
                    <Form>
                        <DialogContent dividers sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}>
                            <FormInput
                                name="nameUser"
                                type="text"
                                label="Candidate name"
                            />
                            <FormInput
                                name="email"
                                type="email"
                                label="E-mail"
                            />
                            <FormInput
                                name="age"
                                type="text"
                                label="Age"
                            />
                            <FormInput
                                name="tel"
                                type="text"
                                label="Telephone"
                            />
                        </DialogContent>
                        <DialogActions >
                            <Button onClick={ () => dispatch(setNewUserDialog(false))}  color="error"  variant="contained">
                                Cancel
                            </Button>
                            <Button onClick={ () => dispatch(setNewUserDialog(false))} type="submit" color="success" variant="contained">
                                Confirmed
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </>
    )
}


export default NewCandidateForm;