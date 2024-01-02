
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialSignIn from '../../Components/SocialSignIn/SocialSignIn';
import useAuth from '../../Hooks/useAuth';





const SignIn = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useAuth();


  const location = useLocation();
  console.log("Location in the login page", location);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";



  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Cool!",
          text: "User sign in successful",
          icon: "success"
        });
        navigate(from, { replace: true });

      })
      .catch(error => {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sorry, you are not registered!",
        });
      })

  }





  return (

    <>
      <Helmet>
        <title>Sun Fashion | Sign In</title>
      </Helmet>
      <div className=" rounded-lg py-24 px-20 ">
        <div className="grid lg:grid-cols-2 items-center ">
          <div className="text-center">
            <img className="h-60 lg:h-[600px] mt-10" src="https://i.ibb.co/D9f88KY/profile-login-style-vector.jpg" alt="" />
          </div>
          <div className="bg-gradient-to-r from-cyan-400 to-blue-600  p-4  border rounded-lg">
            <form onSubmit={handleSignIn} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Your email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Your password" name="password" className="input input-bordered" required />

              </div>



              <div className="form-control mt-6">
                <input className='btn btn-outline w-full' type="submit" value="Sign In" />

              </div>

              <p className="text-center">-------  or  -------</p>

              <div className="divider"></div>

              <SocialSignIn></SocialSignIn>

            </form>


            <Link to="/signUp"> <p className="text-center mt-2">Do not have account? <span className="font-semibold ">Sign Up</span></p></Link>
          </div>
        </div>


      </div>
    </>

  );
};

export default SignIn;