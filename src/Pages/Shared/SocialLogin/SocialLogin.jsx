import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";



const SocialLogin = () => {
    const {googleSingIn} = useContext(AuthContext);
    const handleGoogleSignIn =()=>{
        googleSingIn()
        .then(result=>{
            console.log(result.user)

        })
        .catch(error =>console.log(error))

    }

  return (
    <div>
    <div className="divider"></div>
        <div className="text-center">
      <button onClick={handleGoogleSignIn} className="btn btn-square">
        G
      </button>
    </div>
    </div>
  );
};

export default SocialLogin;
