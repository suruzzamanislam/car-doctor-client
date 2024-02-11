import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import Menu from '../Shared/Navbar/Menu';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { authContext } from '../../provider/AuthProvider';

const Login = () => {
  const { loginUser } = useContext(authContext);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto px-3 lg:px-0">
      <Menu></Menu>
      <div className="flex flex-col md:flex-row gap-10 mt-6">
        <div className="mt-6 md:w-1/2">
          <img src={img} alt="" />
        </div>
        <form
          onSubmit={handleLogin}
          className="border border-secondary md:w-1/2 px-5 py-3 md:px-20 md:py-10 rounded-lg"
        >
          <h1 className="text-4xl text-center mb-10 font-semibold">Log In</h1>
          <div>
            <label className="block mb-2 font-medium text-xl" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered input-secondary focus:input-success w-full max-w-full focus:outline-0"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-medium text-xl" htmlFor="email">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered input-secondary focus:input-success w-full max-w-full focus:outline-0"
            />
          </div>
          <button className="btn btn-block btn-secondary mt-10">Sign In</button>
          <div className="mt-6">
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

          <p className="text-center mt-5 font-medium">
            Do not have accout?{' '}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
