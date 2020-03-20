import React from 'react'
import './Form.css'

const Form = props => {
  return (
    <div className='card'>
      <form>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input className="form-control"
            type="text"
            name="first_name"
            value={props.first_name}
            onChange={props.handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input className="form-control"
            type="text"
            name="last_name"
            value={props.last_name}
            onChange={props.handleInputChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input className="form-control"
            type="text"
            name="username"
            value={props.username}
            onChange={props.handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input className="form-control"
            type="email"
            name="email"
            value={props.email}
            onChange={props.handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control"
            type="password"
            name="password"
            value={props.password}
            onChange={props.handleInputChange} />
        </div>
        <button onClick={props.handleFormSubmission} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
        
export default Form