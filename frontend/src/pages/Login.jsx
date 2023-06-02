import { useState,useEffect} from "react"
import { FaUser,FaSignInAlt } from "react-icons/fa"

function Login() {

  const [formData,setFormData] = useState(
    {

      'email' : '',
      'password' : ''

    }
  )

  const {email,password} = formData

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
      <h1><FaUser></FaUser> Login</h1>

      <p>Please login</p>

    </section>

    <section className="form">
      <form onSubmit={onSubmit}>


        <div className="form-group">
          <input type="email" name="email" className="form-control" id="email" value={email} placeholder="Enter your email" onChange={onChange} />

        </div>
        <div className="form-group">
          <input type="password" name="password" className="form-control" id="password" value={password} placeholder="Enter a password" onChange={onChange} />

        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Login</button>
        </div>
      </form>
    </section>
  
  </>
}

export default Login