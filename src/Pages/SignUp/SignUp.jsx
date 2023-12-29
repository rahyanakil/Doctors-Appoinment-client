import { Link } from "react-router-dom";
import img from "../../assets/images/login/login4.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {
    const {createUser} = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form =event.target;
    const name = form.name.value;
    const email =form.email.value;
    const password = form.password.value;
    console.log(name,email,password);

    createUser(email,password)
    .then(result =>{
        const user =result.user;
        console.log(user);
        alert('Sign Up Success.Please Login!');
    })
    .then(error=>{
        console.log("Error",error);
    })


  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="mr-10 shadow w-1/2 ">
          <img className="border rounded bg-opacity-25" src={img} />
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp} noValidate='' action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
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
                <input type="submit" className="btn bg-green-600 text-white"  value="Sign Up" />
                {/* <button className="btn btn-primary" type="submit">Sign Up</button> */}
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account? 
              <Link className="font-bold text-green-600" to="/login">
                 Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
