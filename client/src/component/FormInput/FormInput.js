import { TextField, Typography } from "@mui/material";
import { useField } from "formik";

const FormInput = ({ ...props }) => {
    const [field] = useField(props)

    return (
        <>
            <Typography>{props.label}</Typography>
            <TextField {...field} {...props} variant="outlined" />
        </>
    )
}

export default FormInput;