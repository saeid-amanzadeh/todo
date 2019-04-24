import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.todo.completed ? "green" : "orange",
            padding: '10px',
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange = { this.props.markeComplete.bind(this, id) }/>
                    &nbsp; {title}

                <button style={ btnStyle } onClick={ this.props.delete.bind(this, id) }>x</button>
                </p>
            </div>
        );
    }
}

//PropTypes
TodoItem.propTypes = {
    todo : PropTypes.array.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color : '#fff',
    border : 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;