import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
const Banner = () => {
  return (
    <div className="carousel h-[80vh] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute bg-gradient-to-r from-[#151515] pt-20 md:pt-48 pl-8 md:pl-24 text-white w-full h-full space-y-3 md:space-y-6 rounded-lg">
          <h1 className="text-xl md:text-6xl font-semibold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p>
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className="md:space-x-6 space-y-4 md:space-y-0">
            <button className="block md:inline bg-[#FF3811] px-5 py-2 md:text-xl md:font-medium rounded-md hover:bg-transparent hover:border hover:border-[#FF3811] hover:text-[#FF3811] transition-all">
              Discover More
            </button>
            <button className="font-medium rounded-md px-5 py-2 md:text-xl border hover:bg-[#FF3811] transition-all text-[#FF3811] border-[#FF3811] hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute bg-gradient-to-r from-[#151515] pt-20 md:pt-48 pl-8 md:pl-24 text-white w-full h-full space-y-3 md:space-y-6 rounded-lg">
          <h1 className="text-xl md:text-6xl font-semibold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p>
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className="md:space-x-6 space-y-4 md:space-y-0">
            <button className="block md:inline bg-[#FF3811] px-5 py-2 md:text-xl md:font-medium rounded-md hover:bg-transparent hover:border hover:border-[#FF3811] hover:text-[#FF3811] transition-all">
              Discover More
            </button>
            <button className="font-medium rounded-md px-5 py-2 md:text-xl border hover:bg-[#FF3811] transition-all text-[#FF3811] border-[#FF3811] hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute bg-gradient-to-r from-[#151515] pt-20 md:pt-48 pl-8 md:pl-24 text-white w-full h-full space-y-3 md:space-y-6 rounded-lg">
          <h1 className="text-xl md:text-6xl font-semibold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p>
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className="md:space-x-6 space-y-4 md:space-y-0">
            <button className="block md:inline bg-[#FF3811] px-5 py-2 md:text-xl md:font-medium rounded-md hover:bg-transparent hover:border hover:border-[#FF3811] hover:text-[#FF3811] transition-all">
              Discover More
            </button>
            <button className="font-medium rounded-md px-5 py-2 md:text-xl border hover:bg-[#FF3811] transition-all text-[#FF3811] border-[#FF3811] hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute bg-gradient-to-r from-[#151515] pt-20 md:pt-48 pl-8 md:pl-24 text-white w-full h-full space-y-3 md:space-y-6 rounded-lg">
          <h1 className="text-xl md:text-6xl font-semibold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p>
            There are many variations of passages of available, but <br /> the
            majority have suffered alteration in some form
          </p>
          <div className="md:space-x-6 space-y-4 md:space-y-0">
            <button className="block md:inline bg-[#FF3811] px-5 py-2 md:text-xl md:font-medium rounded-md hover:bg-transparent hover:border hover:border-[#FF3811] hover:text-[#FF3811] transition-all">
              Discover More
            </button>
            <button className="font-medium rounded-md px-5 py-2 md:text-xl border hover:bg-[#FF3811] transition-all text-[#FF3811] border-[#FF3811] hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-x-5">
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
