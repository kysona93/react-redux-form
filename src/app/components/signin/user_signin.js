import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

 class UserSignin extends React.Component {
    render(){
        const { handleSubmit } = this.props;
        return(
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" component="input" type="email"/>
                                </div>
                                <div>
                                    <label htmlFor="lastName">Password</label>
                                    <Field name="lastName" component="input" type="text"/>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </Col>
                    </Row>
                    <Link to="/forget-password">Forget Password?</Link>

                </Grid>
            </div>
        )
    }
}

// Decorate the form component
UserSignin = reduxForm({
    form: 'contact' // a unique name for this form
})(UserSignin);

export default UserSignin;