import React from 'react'
import './Form.css'

const Form = props => {
  return (
    <div className='card'>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Last Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
        
export default Form