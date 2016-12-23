import React from 'react';
import { Link } from 'react-router';
import { PageHeader, Form, FormGroup, Button, FormControl, Col, Row, Grid, HelpBlock } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ForgetPassword extends React.Component {
    constructor(props){
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
    }
    render(){
        return(
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={2} lg={2}></Col>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <PageHeader>Forget Password</PageHeader>
                            <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
                                <Field name="email" component={ForgetPassword.renderEmail} />
                                <FormGroup>
                                    <Button type="submit" disabled={this.props.invalid || this.props.submitting}>Send</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xs={12} sm={12} md={2} lg={2}></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
    formSubmit(values){
        alert("email="+values.email)
    }

    static renderEmail(props){
        return(
            <FormGroup validationState={!props.meta.touched ? null : (props.meta.error ? 'error' : 'success')}>
                Email
                {' '}
                <FormControl {...props.input} id="email" type="text" placeholder="email" />
                <FormControl.Feedback />
                <HelpBlock>
                    {props.meta.touched && props.meta.error ? props.meta.error : null }
                </HelpBlock>
            </FormGroup>
        )
    }
}

ForgetPassword = reduxForm({
    form: 'user_signin',
    validate: function(values){
        var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const errors ={ }
        if(!regex_email.test(values.email)){
            errors.email = 'Email is invalid'
        }
        return errors
    }
})(ForgetPassword)

//function mapDispatchToProps(dispatch){
//    return bindActionCreators({sendEmailForgetPassword},dispatch)
//}
function mapStateToProps(state, own_props){
    let form_data={
        email: ''
    }
    return {
        initialValues: form_data
    }
}
export default connect(mapStateToProps)(ForgetPassword)
