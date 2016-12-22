import React from 'React';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Navigation from './../../home/navigation';

class ForgetPassword extends React.Component {
    render(){
        const { handleSubmit } = this.props;
        return(
            <div>
                <Navigation />
                <Grid>
                    <MuiThemeProvider>
                    <Row>
                        <Col xs={12} sm={12} md={1} lg={1}></Col>
                        <Col xs={12} sm={12} md={10} lg={10}>
                            <h3>Reset Your Password or <a href="#">Sign Up</a></h3>
                            <Divider />
                            <h5>Enter your email address and we'll email you a link to reset your password.</h5>
                        </Col>
                        <Col xs={12} sm={12} md={1} lg={1}></Col>
                    </Row>
                    </MuiThemeProvider>
                    <Row>
                        <Col xs={12} sm={12} md={1} lg={1}></Col>
                        <Col xs={12} sm={12} md={10} lg={10}>
                            <br/>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    {' '}
                                    <Field name="email" component="input" type="email"/>
                                </div>
                                <br/>
                                <button type="submit">Submit</button>
                            </form>
                        </Col>
                        <Col xs={12} sm={12} md={1} lg={1}></Col>
                    </Row>
                    <Link to="/set-new-password">Set New Password</Link>
                </Grid>
            </div>
        )
    }
}

// Decorate the form component
ForgetPassword = reduxForm({
    form: 'password' // a unique name for this form
})(ForgetPassword);

export default ForgetPassword;