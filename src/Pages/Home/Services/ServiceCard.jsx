import PropTypes from 'prop-types';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import './Tooltip.css';
import { useContext } from 'react';
import { authContext } from '../../../provider/AuthProvider';

const ServiceCard = ({ service }) => {
  const { mode } = useContext(authContext);
  const { _id, title, img, price } = service;
  return (
    <div
      className={`${
        mode && 'border'
      } border-slate-600 shadow-xl rounded-lg p-5`}
    >
      <div>
        <img src={img} className="rounded-lg w-full" alt="" />
      </div>
      <p className="text-2xl font-bold py-5">{title}</p>
      <div className="flex justify-between">
        <p
          className={`text-xl font-semibold text-[#FF3811] ${
            mode && 'text-mode-text'
          }`}
        >
          Price: ${price}
        </p>
        <Link to={`/details/${_id}`}>
          <div className="example-container">
            <a
              data-tooltip-id="my-tooltip-rounded"
              data-tooltip-content="See Details"
            >
              <FaArrowRightLong className="text-[#FF3811]"></FaArrowRightLong>
            </a>
            <Tooltip id="my-tooltip-rounded" className="example-rounded" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object,
};
