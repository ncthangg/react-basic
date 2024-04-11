import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title && !this.state.salary) {
            alert("Khong duoc de trong");
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })


    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job Title: </label><br />
                <input type="text" value={this.state.title} onChange={event => { this.handleChangetitle(event) }} /><br />
                <label htmlFor="lname">Salary: </label><br />
                <input type="text" value={this.state.salary} onChange={event => { this.handleChangeSalary(event) }} /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}
export default AddComponent