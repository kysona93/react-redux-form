import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Form, FormGroup, Button } from 'react-bootstrap';
import Search from './search';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const productname = {
  width: '100%',
  height: '30px',
  marginTop:'8px',
  backgroundColor: 'white',
  borderRadius: '2px'
};

const location = {
  width: '100%',
  height: '30px',
  marginTop: '8px',
  backgroundColor: 'white',
  borderRadius: '2px'
};
export default class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.handleUpdateInput = this.handleUpdateInput.bind(this)
        this.state = {
            dataSource:  [],
            msgErr: ''
        };
    }

    handleUpdateInput (value) {
        const regex = /[a-z]/g
        const match = regex.exec(value)
        if(!match){
            this.setState({
                msgErr: 'Accept only characters from a to z'
            })
        }else{
            this.setState({
                dataSource: [
                                'banana for sale', 
                                'book for sale', 
                                'boom for sale',
                                'brand for sale',
                                'bocoli for sale',
                                'big house for sale',
                                'blue shoes for sale',
                                'black cucumber for sale in this december',
                                'bucket for sale 50',
                                'banner for sale'
                ]
            })
        }
        
        
    };

    render(){
        return(
            <Navbar collapseOnSelect >
                <Navbar.Header>
                <Navbar.Brand >
                    <a href="#" style={{"color":"white", 'fontSize':'16pt'}}>Macrocoupon</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                <MuiThemeProvider>
                <Form inline>
                    <FormGroup style={{"width":"430px"}}>
                        <AutoComplete
                                style={productname}
                                hintText="  product name"
                                dataSource={this.state.dataSource}
                                onUpdateInput={this.handleUpdateInput}
                                underlineStyle={{display: 'none'}}
                                fullWidth={true}
                                textFieldStyle={{
                                    width:"100%",
                                    height: '100%',
                                    lineHeight: '5px',
                                }}      
                                errorText= {this.state.msgErr}    
                                errorStyle={{
                                    backgroundColor: '#E0E0E0',
                                    color: 'black',
                                    position: 'basolute',
                                    zIndex:'1'
                                }}                     
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                         <AutoComplete
                                style={location}
                                hintText="  location"
                                dataSource={this.state.dataSource}
                                onUpdateInput={this.handleUpdateInput}
                                underlineStyle={{display: 'none'}}
                                //fullWidth={true}
                                textFieldStyle={{
                                    width:'100%',
                                    height: '100%',
                                    lineHeight: '5px'
                                }}
                                listStyle={{
                                    width:'100%'
                                }}
                            />
                    </FormGroup>
                    {' '} 
                   <Button bsSize="small" style={{"marginTop":'10px',"width":'40px'}} >Go</Button>
                    </Form>
                    </MuiThemeProvider>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Cart [0]</NavItem>
                    <NavItem href=""><Link to="/signin">Sign in</Link></NavItem>
                    <NavItem eventKey={4} href="#">Sign up</NavItem>
                    <NavItem eventKey={2} href="#">En|Kh</NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}



