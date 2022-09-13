import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import React, {FC} from "react";

import { CandidateFormSchema } from "../../schemas/CandidateFormSchema";
import { createNewCandidate } from "../../redux/dataSlice";
import { useAppDispatch } from "../../Hooks/Hooks";
import { FormInput } from "../index";

interface NewCandidateFormProps {
    isOpenCandidateForm: boolean;
    setIsOpenCandidateForm: (val: boolean) => void;
}

interface MyFormValues {
    name: string,
    email: string,
    age: string,
    tel: string
}

const NewCandidateForm: FC<NewCandidateFormProps> = ({ setIsOpenCandidateForm, isOpenCandidateForm }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const initialValues: MyFormValues = { name:"", email:"", age:"", tel:"" };
    return (
        <Dialog open={isOpenCandidateForm}>
            <Formik
                initialValues={initialValues}
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
                        <DialogContent sx={{display:"flex", alignItems:"center", justifyContent:"center",
                            flexDirection:"column"}} dividers>
                            <FormInput
                                name="name"
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
                        <DialogActions sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
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
        </Dialog>
    )
}

export default NewCandidateForm;