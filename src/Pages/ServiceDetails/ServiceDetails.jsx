import Menu from '../Shared/Navbar/Menu';
import bannerimg from '../../assets/images/banner/4.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import FacilityCard from './FacilityCard';
import { LiaPagerSolid } from 'react-icons/lia';
import { FaArrowRightLong } from 'react-icons/fa6';
import logo from '../../assets/logo.svg';
import Footer from '../Shared/Footer/Footer';
import { useContext } from 'react';
import { authContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import moment from 'moment';

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, title, description, facility, price } = service;

  const { user, mode } = useContext(authContext);

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const fname = form.fname.value;
    const date = form.date.value;
    const email = user?.email;
    const phone = form.phone.value;
    const message = form.message.value;

    const bookingDetails = {
      FirstName: fname,
      date,
      email,
      phone,
      message,
      img,
      price,
      title,
    };
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookingDetails),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Booking Success',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Menu></Menu>
      <div
        className={`px-3 pb-5 md:px-20 ${
          mode && 'bg-mode-dark text-mode-text'
        }`}
      >
        <div className="h-96 rounded-md relative">
          <img className="w-full rounded-md h-full" src={bannerimg} alt="" />
          <h1 className="text-5xl rounded-md font-semibold absolute top-0 text-white left-0  bg-gradient-to-r from-[#151515] w-full h-full flex items-center pl-7">
            Service Details
          </h1>
          <div className="absolute text-center bottom-0 w-full z-50 text-white  py-2">
            <span className="bg-orange-600 px-7 py-2 rounded-t-full">
              <Link className="text-xl font-medium" to="/">
                Home
              </Link>
              <span className="text-xl font-medium">/</span>
              <Link className="text-xl font-medium" to="/serviceDetails">
                ServiceDetails
              </Link>
            </span>
          </div>
        </div>
        <div className="mt-20 grid md:grid-cols-4 gap-x-5">
          <div className="md:col-span-3 mb-5 md:mb-0">
            <div className="h-96">
              <img className="w-full h-full rounded-lg" src={img} alt="" />
            </div>
            <p className="text-4xl font-semibold my-3">{title}</p>
            <p className="font-medium">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
              {facility.map((fac, idx) => (
                <FacilityCard key={idx} fac={fac}></FacilityCard>
              ))}
            </div>
            <form
              onSubmit={handleBooking}
              className={`bg-[#F3F3F3] mt-10 p-6 md:p-16 space-y-4 ${
                mode && 'bg-slate-900'
              }`}
            >
              <div className="md:flex justify-between gap-3">
                <input
                  className={`w-full mb-3 md:mb-0 px-3 py-2 input input-success focus:outline-none ${
                    mode && 'bg-slate-700'
                  }`}
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  id=""
                  defaultValue={user?.displayName}
                />
                <input
                  className={`w-full mb-3 md:mb-0 px-3 py-2 input input-success focus:outline-none ${
                    mode && 'bg-slate-700'
                  }`}
                  type="text"
                  name="date"
                  placeholder="Date"
                  id=""
                  defaultValue={moment().format('dddd, MMMM Do YYYY')}
                  required
                />
              </div>
              <div className="md:flex justify-between gap-3">
                <input
                  className={`w-full mb-3 md:mb-0 px-3 py-2 input input-success focus:outline-none ${
                    mode && 'bg-slate-700'
                  }`}
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  id=""
                  required
                />
                <input
                  className={`w-full mb-3 md:mb-0 px-3 py-2 input input-success focus:outline-none ${
                    mode && 'bg-slate-700'
                  }`}
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  id=""
                  defaultValue={user?.email}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id=""
                  placeholder="Your Message"
                  className={`w-full h-28 p-3 resize-none input input-success focus:outline-none ${
                    mode && 'bg-slate-700'
                  }`}
                ></textarea>
              </div>
              <button className="btn-block btn bg-[#FF3811] text-white font-semibold hover:bg-red-500">
                Order Confirm
              </button>
            </form>
          </div>
          <div>
            <div className="sticky top-1">
              <div className="bg-[#151515] p-5 text-white space-y-4 rounded-sm">
                <h1 className="text-2xl font-medium">Download</h1>
                <div className="flex justify-between">
                  <div className="flex gap-x-3 items-center">
                    <LiaPagerSolid className="text-2xl hidden lg:block"></LiaPagerSolid>
                    <div>
                      <p className="text-xl font-medium">Our Brochure</p>
                      <p className="text-sm text-gray-500">Download</p>
                    </div>
                  </div>
                  <button className="btn btn-warning text-white">
                    <FaArrowRightLong className="font-bold"></FaArrowRightLong>
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-x-3 items-center">
                    <LiaPagerSolid className="text-2xl hidden lg:block"></LiaPagerSolid>
                    <div>
                      <p className="text-xl font-medium">Company Details</p>
                      <p className="text-sm text-gray-500">Download</p>
                    </div>
                  </div>
                  <button className="btn btn-warning text-white">
                    <FaArrowRightLong className="font-bold"></FaArrowRightLong>
                  </button>
                </div>
              </div>
              <div className="bg-[#151515] space-y-6 px-5 py-6 mt-3 rounded-sm text-white text-center">
                <div className="flex justify-center">
                  <img src={logo} alt="" />
                </div>
                <p className=" text-xl">Need Help? We Are Here To Help You</p>
                <div className="bg-white text-black pb-10 pt-5 rounded-xl relative">
                  <p className="font-bold">
                    <span className="text-[#FF3811]">Car Doctor</span> Special
                  </p>
                  <p className="font-medium text-sm">
                    Save up to <span className="text-[#FF3811]">60% off</span>
                  </p>
                  <div className=" absolute left-16 -bottom-3">
                    <p className="bg-[#FF3811] text-white font-semibold inline px-5 py-2 rounded-md">
                      Get A Quote
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#151515] text-white py-1 mt-3 px-3 rounded-md">
                <p className="text-xl font-bold mt-5">Service: {title}</p>
                <p className="text-2xl font-bold mb-5">Price: ${price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
