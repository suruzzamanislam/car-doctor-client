import logo1 from '../../../assets/icons/check.svg';
import logo2 from '../../../assets/icons/deliveryt.svg';
import logo3 from '../../../assets/icons/group.svg';
import logo4 from '../../../assets/icons/person.svg';
import logo6 from '../../../assets/icons/Wrench.svg';
const Features = () => {
  return (
    <div className="mt-14">
      <div className="text-center space-y-3">
        <p className="text-xl font-semibold text-[#FF3811]">Core Features</p>
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="max-w-[717px] mx-auto font-medium">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don ot look even slightly
          believable.{' '}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-7 justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center">
          <img src={logo1} alt="" />
          <p className="font-medium text-gray-600">100% Guranty</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={logo2} alt="" />
          <p className="font-medium text-gray-600">Timely Delivery</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={logo3} alt="" />
          <p className="font-medium text-gray-600">Expert Team</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={logo4} alt="" />
          <p className="font-medium text-gray-600">24/7 Support</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={logo6} alt="" />
          <p className="font-medium text-gray-600">Best Equipment</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
