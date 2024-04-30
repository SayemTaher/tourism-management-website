import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VscSignIn } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../Utilities/AuthContextProvider";


const Login = () => {
    const [showPassword, setShowPassword ] = useState(false);
    const { signIn, signInWithGoogle,signInWithGithub} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Successfully logged in")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error(error.message)
                
        })



    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                 console.log(result.user);
                 toast.success("Success! You will now be redirected");
                 navigate(location?.state ? location.state : "/");
            
            })
            .catch(error => {
                console.log('error:', error.message)
            toast.error(error.message)
        })
        
    }
    const handleGitHubLogin = () => {
      signInWithGithub()
          .then(result => {
               console.log(result.user);
               toast.success("Success! You will now be redirected");
               navigate(location?.state ? location.state : "/");
          
          })
          .catch(error => {
              console.log('error:', error.message)
          toast.error(error.message)
      })
      
  }




  return (
    <div className="min-h-screen bg-[url('https://i.ibb.co/smcY5JC/piotr-chrobot-M4-Ecjtm-E01k-unsplash.jpg')] bg-no-repeat bg-cover flex justify-center items-center bg-secondaryWhite">
      <Helmet>
        <title>EuroQuest | Login</title>
      </Helmet>

      <div className="hero-content  items-center  justify-center lg:flex-row gap-10  p-5">
        <div
          className=" hidden lg:flex backdrop-blur-lg  p-3 rounded-xl  "
          data-aos="flip-up"
        >
          <h1 className="lg:text-5xl md:text-2xl text-primaryWhite  font-bold  text-primaryOlive border-b-4 pb-6 ">
            Explore Your Next Destination
          </h1>
          
        </div>

        <div
          data-aos="fade-up-right"
          className="card lg:w-[400px] md:w-[300px] border-2 border-primaryNavy shadow-2xl bg-primaryWhite"
        >
          <div className="m-5 flex lg:flex-row gap-2 items-center justify-center">
            <VscSignIn className="text-4xl"></VscSignIn>
            <h1 className="text-center pt-10 text-primaryNavy font-bold text-3xl border-b-2 pb-4 ">
              Sign In
            </h1>
          </div>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center ">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="-ml-6"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoEyeOutline> </IoEyeOutline>
                  ) : (
                    <IoEyeOffOutline></IoEyeOffOutline>
                  )}
                </span>
              </div>
              <label className="label">
                <Link to="/register">
                  Do not have an account ?
                  <span className="text-primaryGreen ml-2 font-bold hover:border-b-2 border-primaryOlive">
                    Register
                  </span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-primaryPurple border-2 border-primaryWhite rounded-full hover:bg-primaryNavy text-white text-lg"
                type="submit"
              >
                Login
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex btn bg-primaryWhite border-2 hover:scale-95 hover:text-white hover:bg-primaryNavy border-gray-300 shadow-xl rounded-full  items-center gap-3 text center justify-center">
                <FcGoogle className="text-2xl"></FcGoogle>
                <button onClick={handleGoogleLogin}>
                  
                  Sign In with Google
                </button>
              </div>
              <div className="flex btn bg-primaryWhite border-2 hover:text-white hover:scale-95 hover:bg-primaryNavy border-gray-300  shadow-xl rounded-full  items-center gap-3 text center justify-center">
                <SiGithub className="text-2xl"></SiGithub>
                <button onClick={handleGitHubLogin}>Sign In with Github</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
