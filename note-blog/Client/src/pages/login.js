import React from "react";
import { Card } from "react-bootstrap"


const Login = () => {
    return(
        <Card className="mb-4" bg="dark">
          <div className="col-md-6">
          <div className="card">
            <h4 className="card-header">Login</h4>
            <div className="card-body">
              <form >
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  
                  
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                 
                />
                <button className="btn d-block w-100" type="submit">
                  Submit
                </button>
              </form>
  
              
            </div>
          </div>
        </div>
      </Card>
    )
}

export default Login