import React from 'react';

// class SingleTodo extends Component {
//     constuctor() {       
//     }
//     render() {
//         return(
//             <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//         )
//     }
// }

// refactored to functional component

const SingleTodo = (props) => {
    return (
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    );
}

export default SingleTodo;