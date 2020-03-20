import React, { Component } from 'react'
import Employees from './components/Employees'
import Form from './components/Form'
import Jumbotron from './components/Jumbotron'
import myData from './data.json'

class App extends Component {

  state = {
    employee: [{ first_name: '', 
    last_name: '', 
    username: '', 
    email: '', 
    password: ''}],
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  }

  componentDidMount () {
    this.setState({ employee: myData })
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmission = event => {
    event.preventDefault()
    let employee = JSON.parse(JSON.stringify(this.state.employee))
    employee.push({ first_name: this.state.first_name, 
      last_name: this.state.last_name, 
      username: this.state.username, 
      email: this.state.email, 
      password: this.state.password })
    this.setState({ employee, first_name: '', last_name: '', username: '', email: '', password: '' })
  }

  handleDeletion = i => {
    let employee = JSON.parse(JSON.stringify(this.state.employee))
    employee.splice(i, 1)
    this.setState({ employee })
  }

  render() {
    return (
      <>
        <Jumbotron />
        <Form 
        handleFormSubmission={this.handleFormSubmission}
        handleInputChange={this.handleInputChange}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
        email={this.state.email}
        username={this.state.username}
        password={this.state.password}/>
        <Employees 
        employee={this.state.employee}
        handleDeletion={this.handleDeletion}/>
      </>
    )
  }
}

export default App