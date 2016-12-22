import React from 'react';

const styles ={
    backgroundColor:'white',
    marginLeft: '155px',
    width: '330px'
}
export default class Box extends React.Component {
    render(){
        return(
            <ul style={styles}>
                <li><a href="#">product 1</a></li>
                <li><a href="#">product 2</a></li>
                <li><a href="#">product 3</a></li>
                <li><a href="#">product 4</a></li>
                <li><a href="#">product 5</a></li>
                <li><a href="#">product 6</a></li>
                <li><a href="#">product 7</a></li>
                <li><a href="#">product 8</a></li>
                <li><a href="#">product 9</a></li>
                <li><a href="#">product 10</a></li>
            </ul>
        )
    }
}