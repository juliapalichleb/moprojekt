import { Alert, TextField } from "@mui/material";
import { useField } from "formik";

const FormInput = ({ ...props }) => {
    const [field, meta] = useField(props)

    return (
        <>
            <TextField {...field} {...props} variant="outlined" sx={{my:1}} />
            {meta.touched && meta.error &&
                <Alert severity="error" sx={{marginBottom:'10px'}}>{meta.error}</Alert>}
        </>
    )
}

export default FormInput;