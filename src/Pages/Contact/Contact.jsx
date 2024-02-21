import { useContext } from 'react';
import Footer from '../Shared/Footer/Footer';
import Menu from '../Shared/Navbar/Menu';
import { authContext } from '../../provider/AuthProvider';

const Contact = () => {
  const { mode } = useContext(authContext);
  return (
    <div>
      <Menu></Menu>
      <div
        className={`px-3 py-4 md:px-20 ${mode && 'bg-mode-dark text-white'}`}
      >
        <form
          className={` ${
            mode ? 'bg-slate-900' : 'bg-[#F3F3F3]'
          } pt-10 p-6 md:p-16 space-y-4`}
        >
          <div className="md:flex justify-between gap-3">
            <input
              className={`w-full mb-3 md:mb-0 px-3 py-2 input input-accent focus:outline-none ${
                mode && 'bg-slate-700'
              }`}
              type="text"
              name="fname"
              placeholder="First Name"
              id=""
            />
            <input
              className={`w-full mb-3 md:mb-0 px-3 py-2 input input-accent focus:outline-none ${
                mode && 'bg-slate-700'
              }`}
              type="text"
              name="lname"
              placeholder="Last Name"
              id=""
            />
          </div>
          <div className="md:flex justify-between gap-3">
            <input
              className={`w-full mb-3 md:mb-0 px-3 py-2 input input-accent focus:outline-none ${
                mode && 'bg-slate-700'
              }`}
              type="text"
              name="phone"
              placeholder="Your Phone"
              id=""
            />
            <input
              className={`w-full mb-3 md:mb-0 px-3 py-2 input input-accent focus:outline-none ${
                mode && 'bg-slate-700'
              }`}
              type="text"
              name="email"
              placeholder="Your Email"
              id=""
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className={`w-full h-36 p-3 resize-none input input-accent focus:outline-none ${
                mode && 'bg-slate-700'
              }`}
            ></textarea>
          </div>
          <button className="btn-block btn bg-[#FF3811] text-white font-semibold hover:bg-red-500">
            Send
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
