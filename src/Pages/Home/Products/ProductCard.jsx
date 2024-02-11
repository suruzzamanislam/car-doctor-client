import PropTypes from 'prop-types';
const ProductCard = ({ product }) => {
  const { name, img, price } = product;
  return (
    <div className="border shadow-xl text-center rounded-lg p-5">
      <div>
        <img src={img} className="rounded-lg h-[250px] w-full border" alt="" />
      </div>
      <p className="text-2xl font-bold py-5">{name}</p>
      <div className="rating rating-sm">
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <div className="">
        <p className="text-xl font-semibold text-[#FF3811]">Price: ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};
