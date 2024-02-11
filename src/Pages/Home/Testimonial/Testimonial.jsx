const Testimonial = () => {
  return (
    <div className="mt-16">
      <div className="text-center space-y-3">
        <p className="text-xl font-semibold text-[#FF3811]">Testimonial</p>
        <h1 className="text-3xl font-bold">What Customer Says</h1>
        <p className="max-w-[717px] mx-auto font-medium">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don ot look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-y-7 md:gap-y-0 gap-x-0 md:gap-x-10 mt-14">
        <div className=" shadow-md p-16">
          <div className="flex items-center gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnT5SrN8uuBdrbHPvRWUmvw07FNrSkA_lFOw&usqp=CAU"
              alt=""
              className="w-[60px] h-[60px] rounded-full"
            />
            <div>
              <p className="font-bold">Awlad Hossain</p>
              <p className="font-medium">Businessman</p>
            </div>
          </div>
          <div className="mt-5">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don ot look even
              slightly believable.{' '}
            </p>
            <div className="rating rating-sm mt-5">
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
          </div>
        </div>
        <div className=" shadow-md p-16">
          <div className="flex items-center gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMgHf-zdREQ6eQvJR6cGb-5DK10k_ELcrWg&usqp=CAU"
              alt=""
              className="w-[60px] h-[60px] rounded-full"
            />
            <div>
              <p className="font-bold">Jhon Due</p>
              <p className="font-medium">Officer</p>
            </div>
          </div>
          <div className="mt-5">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don ot look even
              slightly believable.{' '}
            </p>
            <div className="rating rating-sm mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
