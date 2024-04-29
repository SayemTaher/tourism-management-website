/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { useContext } from "react";

import { useState } from "react";
 import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoEyeOutline } from "react-icons/io5";
 import { IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from "../../Utilities/AuthContextProvider";


 
const Register = () => {

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
      e.preventDefault();
      
      console.log(email, password, name, photoUrl);

      if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
          toast.error('Password should be 6 characters long with an uppercase and a lowercase letter.');
          return;
      }
      
      createUser(email, password, name, photoUrl)
          .then(() => {
              toast.success('User Created Successfully!!');
              
              setEmail('');
              setName('');
              setPassword('');
              setPhotoUrl('');
              navigate('/login'); 
          })
          .catch(error => {
              console.log('Error:', error.message);
              toast.error(error.message);
          });
  };
    

  return (
    <div className="hero  min-h-screen bg-no-repeat bg-cover  bg-[url('https://i.ibb.co/9pSxzmM/anders-jilden-c-Yr-MQA7a3-Wc-unsplash.jpg')]">
      <Helmet>
        <title>EuroQuest | Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col p-5 lg:flex-row gap-10  ">
        <div className=" hidden backdrop-blur-lg p-3 rounded-xl  lg:flex flex-col " data-aos="flip-up">
          <h1 className="lg:text-5xl md:text-4xl font-bold  text-white border-b-4 pb-6 border-white">
            Your Adventure Begins Here
          </h1>
         
        </div>

        <div
          data-aos="fade-up-right"
          className="card lg:w-[380px] md:w-[350px] border-2 border-primaryOlive  shadow-2xl bg-primaryWhite"
        >
          <div className=" flex lg:flex-row  items-center justify-center">
            <AiOutlineLogin className="text-4xl"></AiOutlineLogin>
            <h1 className="text-center pt-10 text-primaryOlive font-bold text-3xl border-b-2 pb-4 ">
              Register Now
            </h1>
          </div>
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="Your image url"
                className="input input-bordered"
                required
              />
            </div>
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
              {/* place checkbox here */}
              <div className="flex gap-2 items-center mt-2 mb-2">
                    <input type="checkbox" className="checkbox"  required/>
                     <span>Accept terms & conditions</span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-primaryNavy hover:bg-primaryPurple rounded-full text-white text-lg"
                type="submit"
              >
                Register
              </button>
            </div>
            <label className="label flex justify-center">
              <Link to="/login">
                Already have an account ?
                <span className="text-primaryPink font-bold hover:border-b-2 border-primaryOlive ml-2">
                  Login
                </span>
              </Link>
            </label>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
