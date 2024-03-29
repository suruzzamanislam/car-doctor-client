import PropTypes from 'prop-types';
import { useContext } from 'react';
import { authContext } from '../../../provider/AuthProvider';
const TeamCard = ({ enginer }) => {
  const { name, type, education, img } = enginer;
  const { mode } = useContext(authContext);
  return (
    <div
      className={`border text-center p-6 rounded-md shadow-lg ${
        mode && 'text-mode-text'
      }`}
    >
      <img src={img} className="w-full h-[250px]" alt="" />
      <h1 className="py-3 text-xl font-semibold">{name}</h1>
      <p className="font-medium"> {type}</p>
      <p className="font-semibold">{education}</p>
    </div>
  );
};

export default TeamCard;
TeamCard.propTypes = {
  enginer: PropTypes.object,
};
