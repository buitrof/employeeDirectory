import React from 'react'

const Employees = props => {
  return (
    <div className="card col-md-12">
      {
        props.employee.map((x, i) => (
          <p key={i}>
            First Name: {x.first_name}, 
            Last Name: {x.last_name}, 
            Email: {x.email}, 
            Username: {x.username}, 
            Password: {x.password}
            <button className="btn btn-danger" onClick={() => props.handleDeletion(i)}>x</button>
          </p>
        ))
      }
    </div>
  )
}

export default Employees