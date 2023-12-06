import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Login = () => {
    
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate =useNavigate();

  const from =location.state?.from?.pathname || '/';

const handleLogin = event =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password =form.password.value;
  console.log(email,password);
  signIn(email,password)
  .then(result=>{
    const user =result.user;
    console.log(user);
    navigate(from, {replace:true})
    alert('Log In Successfully Done')
  })
  .catch(error=>console.log(error))

}

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="mr-12 w-1/2">
          <img src={img} />
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login" />
              </div>
            </form>
            <p className="my-4 text-center">New to Care Connects <Link className="font-bold text-orange-600" to="/signup">Sign Up</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
