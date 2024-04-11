import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'se01', title: 'developer', salary: '500' },
            { id: 'se02', title: 'tester', salary: '300' },
            { id: 'se03', title: 'ba', salary: '100' }
        ]
    }

    addNewJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job);
        this.setState({
            arrJobs: currentJobs
        })
        // this.setState({
        //     arrJobs: [...this.state.arrJobs, job]
        // })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }


    render() {
        console.log("call render: ", this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        );
    }

}
export default MyComponent;