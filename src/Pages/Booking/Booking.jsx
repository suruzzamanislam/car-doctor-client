import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../provider/AuthProvider';
import Menu from '../Shared/Navbar/Menu';
import { Link } from 'react-router-dom';
import bannerimg from '../../assets/images/banner/6.jpg';
import BookingCard from './BookingCard';
import Footer from '../Shared/Footer/Footer';
import Swal from 'sweetalert2';

const Booking = () => {
  const { user, mode } = useContext(authContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user.email}`;

  useEffect(() => {
    fetch(url, { credentials: 'include' })
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const handleDeleteBooking = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              const remaining = bookings.filter(booking => booking._id !== id);
              setBookings(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <Menu></Menu>
      <div className={`px-3 pb-5 md:px-20 ${mode && 'bg-mode-dark'}`}>
        <div className="h-96 rounded-md relative">
          <img className="w-full rounded-md h-full" src={bannerimg} alt="" />
          <h1 className="text-5xl rounded-md font-semibold absolute top-0 text-white left-0  bg-gradient-to-r from-[#151515] w-full h-full flex items-center pl-7">
            Booking Details
          </h1>
          <div className="absolute text-center bottom-0 w-full z-50 text-white  py-2">
            <span className="bg-orange-600 px-7 py-2 rounded-t-full">
              <Link className="text-xl font-medium" to="/">
                Home
              </Link>
              <span className="text-xl font-medium">/</span>
              <Link className="text-xl font-medium" to="/booking">
                Booking Details
              </Link>
            </span>
          </div>
        </div>
        <div className="mt-10 space-y-5">
          {bookings.map(booking => (
            <BookingCard
              key={booking._id}
              booking={booking}
              handleDeleteBooking={handleDeleteBooking}
            ></BookingCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Booking;
