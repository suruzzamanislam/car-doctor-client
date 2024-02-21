import PropTypes from 'prop-types';
const BookingCard = ({ booking, handleDeleteBooking }) => {
  const { _id, img, price, title, FirstName, date } = booking;
  return (
    <div className="flex flex-col md:flex-row justify-center  md:justify-between items-center bg-base-200 rounded-md px-5 py-2 space-y-2 md:space-y-0">
      <div className="flex flex-col md:flex-row justify-center md:justify-normal items-center gap-x-4">
        <div className="avatar w-36 mx-auto h-32 rounded">
          <img className="rounded w-full" src={img} alt="" />
        </div>
        <div>
          <p className="text-2xl font-semibold">{FirstName}</p>
          <p className="font-medium">{title}</p>
          <p className="font-medium">$ {price}</p>
        </div>
      </div>
      <p className="md:text-xl font-medium">{date}</p>
      <div className="flex items-center gap-x-2">
        <button className="btn bg-orange-600 font-semibold text-white">
          Pending
        </button>
        <button
          onClick={() => handleDeleteBooking(_id)}
          className="btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookingCard;

BookingCard.propTypes = {
  booking: PropTypes.object,
  handleDeleteBooking: PropTypes.func,
};
