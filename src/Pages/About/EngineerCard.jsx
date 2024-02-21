import PropTypes from 'prop-types';
const TeamCard = ({ enginer }) => {
  const { name, type, education, img } = enginer;
  return (
    <div className="border text-center p-6 rounded-md shadow-lg">
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
