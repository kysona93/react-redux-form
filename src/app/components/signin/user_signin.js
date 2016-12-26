import React from 'react';
import { Link } from 'react-router';
import { PageHeader, Form, FormGroup, Button, FormControl, Col, Row, Grid, HelpBlock, MenuItem, InputGroup } from 'react-bootstrap';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  Navigation  from './../home/navigation';

class UserSignin extends React.Component {
    constructor(props){
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
    }

    render() {
        return (
            <div style={{"backgroundImage":"url(http://localhost:8080/icon/bk_sigin.jpg)","width":"100%","heigth":"100%","backgroundSize":"cover"}}>
                <Navigation />
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}></Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <br/><br/><br/>
                                    <center><h3>Macrocoupon</h3></center>
                                    <MuiThemeProvider>
                                        <Divider/>
                                    </MuiThemeProvider>
                                    <h5>Need a Macrocoupon Account? <a href="#">Sign Up</a></h5>
                                    <br/>
                                    <Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
                                        <Field name="email" component={UserSignin.renderEmail} />
                                        <Field name="password" component={UserSignin.renderPassword} />
                                        <center>
                                            <Link to="/forget-password" style={{marginLeft:"-12px"}}>Forget Password?</Link>
                                            <br/><br/>
                                            <FormGroup>
                                                <Button type="submit" disabled={this.props.invalid || this.props.submitting}>Sign In</Button>
                                            </FormGroup>
                                        </center>
                                    </Form>
                                    <Row>
                                        <center>
                                            <h4>Or you can sign in vai</h4>
                                            <MuiThemeProvider>
                                                <Divider/>
                                            </MuiThemeProvider>
                                        </center>
                                        <br/>
                                        <Col xs={12} sm={12} md={6} lg={6}>
                                            <Button bsStyle="primary"><i className="fa fa-facebook" aria-hidden="true"></i>
                                                &nbsp;&nbsp;&nbsp;&nbsp;Login with Facebook
                                            </Button>
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6}>
                                            <Button bsStyle="danger"><i className="fa fa-google" aria-hidden="true"></i>
                                                &nbsp;&nbsp;&nbsp;&nbsp;Login with Google
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/*
                            <PageHeader>User Forget Password</PageHeader>
                            <br/><br/>
                            <Link to="/set-new-password">Set New Password</Link>
                            */}
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}></Col>
                    </Row>
                </Grid>
                <br/><br/>
            </div>
        )
    }

    formSubmit(values){
        alert("email="+values.email+" and password="+values.password)
    }

    static renderEmail(props){
        return(
            <FormGroup validationState={!props.meta.touched ? null : (props.meta.error ? 'error' : 'success')}>
                <InputGroup>
                    <InputGroup.Addon><i className="fa fa-envelope-o" aria-hidden="true"></i></InputGroup.Addon>
                <FormControl {...props.input} id="email" type="text" placeholder="email" />
                </InputGroup>
                <FormControl.Feedback />
                <HelpBlock>
                    {props.meta.touched && props.meta.error ? props.meta.error : null }
                </HelpBlock>
            </FormGroup>
        )
    }
    static renderPassword(props){
        return(
            <FormGroup validationState={!props.meta.touched ? null : (props.meta.error ? 'error' : 'success')}>
                <InputGroup><InputGroup.Addon><i className="fa fa-key" aria-hidden="true"></i></InputGroup.Addon>
                    <FormControl {...props.input} id="password" type="password" placeholder="password" />
                </InputGroup>
                <FormControl.Feedback />
                <HelpBlock>
                    {props.meta.touched && props.meta.error ? props.meta.error : null }
                </HelpBlock>
            </FormGroup>
        )
    }
}

UserSignin = reduxForm({
    form: 'user_signin',
    validate: function(values){
        var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regex_password = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

        const errors ={ }
        if(!regex_email.test(values.email)){
            errors.email = 'Email is invalid'
        }
        if(!regex_password.test(values.password)){
            errors.password = 'password must be included characters and numeric';
        }
        return errors
    }
})(UserSignin)

//function mapDispatchToProps(dispatch){
//    return bindActionCreators({sendEmailForgetPassword},dispatch)
//}
function mapStateToProps(state, own_props){
    let form_data={
        email: '',
        password: ''
    }
    return {
        initialValues: form_data
    }
}
export default connect(mapStateToProps)(UserSignin)

