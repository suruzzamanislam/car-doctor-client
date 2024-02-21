import { useContext, useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import Menu from '../Shared/Navbar/Menu';
import { authContext } from '../../provider/AuthProvider';

const Services = () => {
  const [services, setServices] = useState([]);
  const { mode } = useContext(authContext);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <>
      <Menu></Menu>
      <div className={`px-3 md:px-20 ${mode && 'bg-mode-dark text-mode-text'}`}>
        <div className="py-14">
          <div className="text-center space-y-3">
            <p className="text-xl font-semibold text-[#FF3811]">Services</p>
            <h1 className="text-3xl font-bold">Our Service Area</h1>
            <p className="max-w-[717px] mx-auto font-medium">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don ot look even slightly
              believable.{' '}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 justify-between mt-8 md:mt-16">
            {services.map(service => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="font-medium rounded-md px-5 py-2 md:text-xl border hover:bg-[#FF3811] transition-all text-[#FF3811] border-[#FF3811] hover:text-white">
              More Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
