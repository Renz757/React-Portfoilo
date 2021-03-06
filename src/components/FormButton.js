import React from "react";
import { useFormikContext } from "formik";
import { Button } from "@mui/material";
import "../styles/_variables.scss";

const ButtonWrapper = ({
    children,
    ...otherProps
}) => {
     const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        variant: 'contained',
        fullWidth: true,
        onClick: handleSubmit
    }

    return( 
        <>
            <Button 
                {...configButton}
                className='form-btn'
            >
                {children} 
            </Button> 
        </>
    );
} 

export default ButtonWrapper;