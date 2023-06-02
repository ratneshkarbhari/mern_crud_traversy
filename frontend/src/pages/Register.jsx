import { useState,useEffect} from "react"
import { FaUser,FaSignInAlt } from "react-icons/fa"

function Register() {

  const [formData,setFormData] = useState(
    {
      'name' : '',
      'email' : '',
      'password' : '',
      'password2' : '',
    }
  )

  const {name,email,password,password2} = formData

  const onChange= (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault();
  }


  return <>

    <section className="heading  text-center">
      <h1><FaUser></FaUser> Register</h1>

      <p>Please create an account</p>

    </section>

    <section className="form">
      <form onSubmit={onSubmit}>

        <div className="form-group">
          <input type="text" name="name" className="form-control" id="name" value={name} placeholder="Enter your name" onChange={onChange} />

        </div>

        <div className="form-group">
          <input type="email" name="email" className="form-control" id="email" value={email} placeholder="Enter your email" onChange={onChange} />

        </div>
        <div className="form-group">
          <input type="password" name="password" className="form-control" id="password" value={password} placeholder="Enter a password" onChange={onChange} />

        </div>
        <div className="form-group">
          <input type="password" name="password2" className="form-control" id="password2" value={password2} placeholder="Confirm Password" onChange={onChange} />

        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Register</button>
        </div>
      </form>
    </section>
  
  </>
}

export default Register