import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Swimming' },
            { id: 'todo3', title: 'Gym' },
        ],
        editTodo: {}

    }

    addNew = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add Succeed!");
    }

    removeOnClick = (todo) => {
        let currentTodos = this.state.listTodos;
        let { editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === true) {
            currentTodos = currentTodos.filter(item => item.id !== todo.id);
            this.setState({
                listTodos: currentTodos
            })
            toast.success("Delete Succeed!");
        }
        else {
            this.setState({
                editTodo: ''
            })
        }


    }

    handleOnEdit = (todo) => {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]

            let objIndex = listTodosCopy.findIndex(item => item.id === editTodo.id);

            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodosCopy,
                editTodo: ''
            })
            toast.success("Update Succeed!");
            return;
        }

        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNew={this.addNew}
                />
                <div className="list-todo-content">
                    {
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>
                                            {index + 1} | {item.title}
                                        </span>
                                        :
                                        <>
                                            {
                                                editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} |
                                                        <input value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} | {item.title}
                                                    </span>
                                            }
                                        </>
                                    }
                                    <button className="btn-edit"
                                        onClick={() => this.handleOnEdit(item)}>
                                        {
                                            isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="btn-delete"
                                        onClick={() => this.removeOnClick(item)}>
                                        {
                                            isEmptyObj === false && editTodo.id === item.id ?
                                                'Cancel' : 'Delete'
                                        }
                                    </button>
                                </div>
                            )

                        }
                        )
                    }
                </div>
            </div>
        )
    }
}
export default ListTodo;