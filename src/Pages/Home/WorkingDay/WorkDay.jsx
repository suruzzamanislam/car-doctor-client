import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { useContext } from 'react';
import { authContext } from '../../../provider/AuthProvider';

const WorkDay = () => {
  const { mode } = useContext(authContext);
  return (
    <div className={`px-3 md:px-20 ${mode && 'bg-mode-dark text-mode-dark'}`}>
      <div className="flex flex-col md:flex-row items-center space-y-7 justify-center md:space-y-0 md:justify-between bg-[#151515] text-white p-5 md:p-14 rounded-md text-center md:text-start">
        <div
          className={`flex flex-col lg:flex-row items-center gap-x-4 ${
            mode && 'text-mode-text'
          }`}
        >
          <div>
            <BsFillCalendar2DateFill className="text-4xl"></BsFillCalendar2DateFill>
          </div>
          <div>
            <p>We are open monday-friday</p>
            <p className="text-2xl font-semibold">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div
          className={`flex flex-col lg:flex-row items-center gap-x-4 ${
            mode && 'text-mode-text'
          }`}
        >
          <div>
            <BiSolidPhoneCall className="text-4xl"></BiSolidPhoneCall>
          </div>
          <div>
            <p>Have a question?</p>
            <p className="text-2xl font-semibold">+2546 251 2658</p>
          </div>
        </div>
        <div
          className={`flex flex-col lg:flex-row items-center gap-x-4 ${
            mode && 'text-mode-text'
          }`}
        >
          <div>
            <FaLocationDot className="text-4xl"></FaLocationDot>
          </div>
          <div>
            <p>Need a repair? our address</p>
            <p className="text-2xl font-semibold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDay;
