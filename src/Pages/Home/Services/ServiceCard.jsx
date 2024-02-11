import PropTypes from 'prop-types';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="border shadow-xl rounded-lg p-5">
      <div>
        <img src={img} className="rounded-lg w-full" alt="" />
      </div>
      <p className="text-2xl font-bold py-5">{title}</p>
      <div className="flex justify-between">
        <p className="text-xl font-semibold text-[#FF3811]">Price: ${price}</p>
        <Link>
          {' '}
          <FaArrowRightLong className="text-[#FF3811] hover:animate-bounce"></FaArrowRightLong>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object,
};
