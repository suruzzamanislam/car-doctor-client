import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
  return (
    <div className="md:flex mt-10 md:mt-20 md:gap-x-16 lg:gap-x-32 mb-20">
      <figure className="md:w-1/2 relative">
        <img src={person} alt="" className="rounded-lg" />
        <img
          src={parts}
          className="absolute hidden lg:block w-3/4 -right-28 border-8 border-white rounded-lg -bottom-4"
          alt=""
        />
      </figure>
      <div className="space-y-2 md:space-y-5 md:w-1/2 mt-6 md:mt-0">
        <p className="font-semibold text-[#FF3811]">About Us</p>
        <h1 className="text-2xl md:text-5xl font-semibold max-w-[375px]">
          We are qualified & of experience in this field
        </h1>
        <p className="md:text-xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{' '}
        </p>
        <p className="md:text-xl">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don ot look even slightly
          believable.{' '}
        </p>
        <button className="block md:inline bg-[#FF3811] px-5 py-2 md:text-xl md:font-medium rounded-md hover:bg-transparent hover:border hover:border-[#FF3811] hover:text-[#FF3811] transition-all">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
