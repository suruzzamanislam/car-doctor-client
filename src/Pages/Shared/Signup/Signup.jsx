import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Menu from '../Navbar/Menu';
import img from '../../../assets/images/login/login.svg';
import { useContext, useState } from 'react';
import { authContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import auth from '../../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const { createUser, mode } = useContext(authContext);
  const [error, setError] = useState(null);
  const [showPass, setShowPass] = useState(false);

  const handleCreateUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(result => {
        if (result) {
          Swal.fire({
            title: 'Succesful',
            icon: 'succes',
          });
        }

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(error => {
            console.log(error);
          });

        form.reset();
      })
      .catch(error => {
        setError(error.message);
      });
  };
  return (
    <>
      <Menu></Menu>
      <div className={`px-3 md:px-20 ${mode && 'bg-mode-dark text-mode-text'}`}>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="mt-6 md:w-1/2">
            <img src={img} alt="" />
          </div>
          <form
            onSubmit={handleCreateUser}
            className="border border-secondary md:w-1/2 px-5 md:px-20 py-3 md:py-6 rounded-lg"
          >
            <h1 className="text-4xl text-center mb-3 font-semibold">Sign up</h1>
            <div>
              <label className="block mb-2 font-medium text-xl" htmlFor="name">
                Name
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered input-secondary focus:input-success w-full max-w-full focus:outline-0"
                required
              />
            </div>
            <div className="mt-3">
              <label className="block mb-2 font-medium text-xl" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered input-secondary focus:input-success w-full max-w-full focus:outline-0"
                required
              />
            </div>
            <div className="mt-3 relative">
              <label className="block mb-2 font-medium text-xl" htmlFor="email">
                Password
              </label>
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="input input-bordered input-secondary focus:input-success w-full max-w-full focus:outline-0"
                required
              />
              <button
                className="absolute right-3 bottom-4"
                onClick={() => setShowPass(!showPass)}
              >
                {' '}
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>
            <button className="btn btn-block btn-secondary mt-10">
              Sign Up
            </button>
            <div className="mt-3">
              <p className="text-center text-xl font-medium">Or Sign In with</p>
              <div className="flex justify-center gap-4 mt-2">
                <div className=" border p-1 rounded-full border-secondary hover:border-success cursor-pointer transition-all">
                  <FaGoogle className="text-2xl"></FaGoogle>
                </div>
                <div className=" border p-1 rounded-full border-secondary hover:border-success cursor-pointer transition-all">
                  <FaFacebook className="text-2xl"></FaFacebook>
                </div>
                <div className=" border p-1 rounded-full border-secondary hover:border-success cursor-pointer transition-all">
                  <FaGithub className="text-2xl"></FaGithub>
                </div>
              </div>
            </div>

            <p className="text-center mt-3 font-medium">
              Do not have accout?{' '}
              <Link
                to="/login"
                className="text-blue-600 font-semibold underline"
              >
                Sign In
              </Link>
            </p>
            {error ? (
              <p className="text-center mt-4 text-red-700">{error}</p>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
