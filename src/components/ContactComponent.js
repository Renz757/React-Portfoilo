import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Col, Button } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className='container contactForm'>
                    <div className='row'>
                        <div className='col'>
                            <Form>
                                <FormGroup row>
                                    <Label for="fname" sm={12}>First Name: </Label>
                                    <Col sm={12}>
                                        <Input type="text" name="fname" id="fname" placeholder="Enter Your First Name" className="form-control" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="lname" sm={12}>Last Name: </Label>
                                    <Col sm={12}>
                                        <Input type="text" name="lname" id="lname" placeholder="Enter Your Last Name" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={12}>Email: </Label>
                                    <Col sm={12}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={12}  for="exampleText"></Label>
                                    <Col sm={12} >
                                        <Input type="textarea" name="text" id="exampleText" rows="10"
                                             />
                                         <Button className='form-btn'>Submit</Button>
                                    </Col>
                                </FormGroup>
                                
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;