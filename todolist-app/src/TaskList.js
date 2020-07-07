import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            address: [],
            showAddForm: false,
        }
    }
    setStatus = () => {
        this.setState({
            showAddForm: true
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false
        })
    }
    addTask = (name) => {
        this.state.tasks.push(name)
        this.forceUpdate()
    }
    addAddress = (address) => {
        this.state.tasks.push(address)
        this.forceUpdate()
    }
    render() {
        if (this.state.showAddForm === true) {
            return (
                <AddTask addTask={this.addTask} addAddress={this.addAddress} closeForm={this.closeForm} />
            )
        } else {
            return (
                <div className="container">
                    <br />
                    <br />
                    <button type="button" className="btn btn-outline-primary" onClick={this.setStatus} >Add Task</button>
                    <h2>List Task</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name of task</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(function (name, address, index) {
                                    return <TodoList name={name}
                                                    address = {address}

                                    />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default TaskList;
