import { Alert, TextField } from "@mui/material";
import { FieldHookConfig, useField } from "formik";
import React, { FC } from "react";

interface ICustomFieldProps {
    label: string;
    name: string;
    type: string;
}

const FormInput: FC<FieldHookConfig<string> & ICustomFieldProps> = ({ ...props }:ICustomFieldProps) => {
    const [field, meta] = useField(props)

    return (
        <>
            <TextField {...field} {...props} variant="outlined" sx={{ my:1 }}/>
            {meta.touched && meta.error &&
                <Alert severity="error" sx={{ marginBottom:'10px' }}>{meta.error}</Alert>}
        </>
    )
}

export default FormInput;