import React from "react";

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFistName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log("check: ", this.state)
    }


    render() {
        console.log("call render: ", this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First Name: </label><br />
                    <input type="text" value={this.state.firstName} onChange={event => { this.handleChangeFistName(event) }} /><br />
                    <label htmlFor="lname">Last Name: </label><br />
                    <input type="text" value={this.state.lastName} onChange={event => { this.handleChangeLastName(event) }} /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        );
    }

}
export default MyComponent;