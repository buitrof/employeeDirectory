import React, { Component } from 'react'
import Employees from './components/Employees'
import Form from './components/Form'

class App extends Component {

  state = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmission = event => {
    event.preventDefault()
    
  }

  render() {
    return (
      <>
        <Form />
      </>
    )
  }
}

export default App