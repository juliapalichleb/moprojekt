import { Button, DialogActions, DialogContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";

import { createNewCandidate, setNewUserDialog } from "../../redux/dataSlice";
import FormInput from "../FormInput/FormInput";

const NewCandidateForm = () => {
    const { statusData } = useSelector((state) => state.dataReducer)
    const idStatus = statusData[4]._id;  //prosi się o błąd
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
            <Formik
                initialValues={{ nameUser:"",email:"",age:"",tel:"", status:idStatus }}
                 onSubmit={(values) => {
                     console.log(values)
                     dispatch(createNewCandidate(values))
                     navigate(0);
                 }}
            >
                {() => (
                    <Form>
                        <DialogContent dividers sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center" }}>
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
                                type="number"
                                label="Age"
                            />
                            <FormInput
                                name="tel"
                                type="number"
                                label="Telephone"
                            />
                        </DialogContent>
                        <DialogActions sx={{ display:"flex", alignContent:"center", justifyContent:"center" }} >
                            <Button onClick={() => dispatch(setNewUserDialog(false))} color="error" variant="contained">
                                Cancel
                            </Button>
                            <Button onClick={() => dispatch(setNewUserDialog(false))} type="submit" color="success" variant="contained">
                                Confirmed
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
    )
}

export default NewCandidateForm;