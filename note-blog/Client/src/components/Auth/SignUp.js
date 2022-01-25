import React from "react";


const SignUp = () => {
    return(
        <main className="mb-4">
        <div className="col-md-6">
          <div className="card">
            <h4 className="card-header bg-dark text-light">Sign Up</h4>
            <div className="card-body">
              <form >
                <input
                  className="form-input"
                  placeholder="Choose a  Username"
                  name="username"
                  type="username"
                  id="username"
                  
                  
                />
                <input
                  className="form-input"
                  placeholder="Write your email"
                  name="email"
                  type="email"
                  id="email"
                 
                />
                   <input
                  className="form-input"
                  placeholder="***Password***"
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
      </main>
    )
}

export default SignUp