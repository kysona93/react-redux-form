import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default class Search extends React.Component {
    render(){
        return(
            <Form inline>
                <br />
                <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder="product name" />
                </FormGroup>
                {' '}
                <FormGroup controlId="formInlineEmail">
                {' '}
                <FormControl type="text" placeholder="location" />
                </FormGroup>
                {' '}
                <Button>Go</Button>
            </Form>
        )
    }
}