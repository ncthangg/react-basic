import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault();
        if (!this.state.title) {
            toast.warn("Khong duoc de trong");
            return;
        }
        this.props.addNew({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        })
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => { this.handleOnChange(event) }}
                />
                <button type="button" onClick={(event) => { this.handleOnClick(event) }}>Add</button>
            </div>
        )
    }
}
export default AddTodo;