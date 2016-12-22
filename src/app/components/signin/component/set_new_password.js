import React from 'React';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Navigation from './../../home/navigation';

class SetNewPassword extends React.Component {
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
                                <h3>Reset Your Password</h3>
                                <Divider />
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
                                    <label htmlFor="lastName">New Password</label>
                                    {' '}
                                    <Field name="lastName" component="input" type="text"/>
                                </div>
                                <div>
                                    <label htmlFor="lastName">Confirm Password</label>
                                    {' '}
                                    <Field name="lastName" component="input" type="text"/>
                                </div>
                                <br/>
                                <button type="submit">Submit</button>
                            </form>
                        </Col>
                        <Col xs={12} sm={12} md={1} lg={1}></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

// Decorate the form component
SetNewPassword = reduxForm({
    form: 'newpassword' // a unique name for this form
})(SetNewPassword);

export default SetNewPassword;