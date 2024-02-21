import PropTypes from 'prop-types';
const FacilityCard = ({ fac }) => {
  const { name, details } = fac;
  return (
    <div className="border p-6 bg-base-200 rounded-md">
      <h1 className="text-xl font-medium">{name}</h1>
      <p>{details}</p>
    </div>
  );
};

export default FacilityCard;
FacilityCard.propTypes = {
  fac: PropTypes.object,
};
