import React from 'react';
import { Link } from 'react-router';
import { PageHeader, Form, FormGroup, Button, FormControl, Col, Row, Grid, HelpBlock } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { sendEmailForgetPassword } from './../../../actions/user';

class SetNewPassword extends React.Component {
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
                            <PageHeader>Set New Password</PageHeader>
                            <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
                                <Field name="password" component={SetNewPassword.renderPassword} />
                                <Field name="confirm_password" component={SetNewPassword.renderConfirmPassword} />
                                <FormGroup>
                                    <Button type="submit" disabled={this.props.invalid || this.props.submitting}>Submit</Button>
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
        alert("new password="+values.password+" and confirm password="+values.confirm_password)

    }
    static renderPassword(props){
        return(
            <FormGroup validationState={!props.meta.touched ? null : (props.meta.error ? 'error' : 'success')}>
                Password
                {' '}
                <FormControl {...props.input} id="password" type="password" placeholder="password" />
                <FormControl.Feedback />
                <HelpBlock>
                    {props.meta.touched && props.meta.error ? props.meta.error : null }
                </HelpBlock>
            </FormGroup>
        )
    }
    static renderConfirmPassword(props){
        return(
            <FormGroup validationState={!props.meta.touched ? null : (props.meta.error ? 'error' : 'success')}>
                Confirm Password
                {' '}
                <FormControl {...props.input} id="confirm_password" type="password" placeholder="confirm password" />
                <FormControl.Feedback />
                <HelpBlock>
                    {props.meta.touched && props.meta.error ? props.meta.error : null }
                </HelpBlock>
            </FormGroup>
        )
    }

}

SetNewPassword = reduxForm({
    form: 'user_signin',
    validate: function(values){
        var regex_username = /^[A-Za-z]+$/;
        var regex_password = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

        const errors ={ }
        if(!regex_password.test(values.password)){
            errors.password = 'password must be included characters and numeric';
        }
        if(values.password != values.confirm_password){
            errors.confirm_password = 'password and confirm password are not match'
        }
        return errors
    }
})(SetNewPassword)

//function mapDispatchToProps(dispatch){
//    return bindActionCreators({sendEmailForgetPassword},dispatch)
//}
function mapStateToProps(state, own_props){
    let form_data={
        id: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        job: ''
    }
    return {
        initialValues: form_data
    }
}
export default connect(mapStateToProps)(SetNewPassword)
