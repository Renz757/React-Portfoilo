import { Grid } from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Textfield from './FormUI';
import Button from './FormButton';

function Contact() {


    const INITIAL_FORM_STATE = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    };

    const FORM_VALIDATION = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().required("Required").email("Invalid Email"),
        message: Yup.string()
    });

    return (
        <>
            <div className='contactForm'>
                <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE
                    }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={(values, {resetForm}) => {
                        console.log(values);
                        resetForm({ values: ''});
                    }}
                >
                    <Form>
                        <Grid container spacing={4}>
                            <Grid item xs={6}>
                                <Textfield
                                    name="firstName"
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Textfield
                                    name="lastName"
                                    label="Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Textfield
                                    name="email"
                                    label="Email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Textfield
                                    name="message"
                                    label="Contact"
                                    multiline={true}
                                    rows={4}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default Contact;