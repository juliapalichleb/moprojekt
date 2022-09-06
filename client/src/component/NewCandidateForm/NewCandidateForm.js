import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";

import { createNewCandidate } from "../../redux/dataSlice";
import { FormInput } from "../index";
import { CandidateFormSchema } from "../../schemas/CandidateFormSchema";

const NewCandidateForm = ({ setIsOpenCandidateForm, isOpenCandidateForm }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <Dialog open={isOpenCandidateForm} >
            <Formik
                initialValues={{ nameUser:"",email:"",age:"",tel:"" }}
                validationSchema={ CandidateFormSchema }
                onSubmit={(values) => {
                     dispatch(createNewCandidate(values))
                     setIsOpenCandidateForm(false)
                     navigate(0);
                 }}
            >
                {() => (
                    <Form>
                        <DialogTitle>Adding new candidate form</DialogTitle>
                        <DialogContent variant='DialogContent1' dividers>
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
                        <DialogActions variant='DialogActions1'>
                            <Button onClick={() => setIsOpenCandidateForm(false)} color="error" variant="contained">
                                Cancel
                            </Button>
                            <Button type="submit" color="success" variant="contained">
                                Confirmed
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        < /Dialog>
    )
}

export default NewCandidateForm;