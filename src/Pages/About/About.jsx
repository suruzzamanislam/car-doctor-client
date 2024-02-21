import { useContext, useEffect, useState } from 'react';
import Menu from '../Shared/Navbar/Menu';
import TeamCard from './EngineerCard';
import { authContext } from '../../provider/AuthProvider';

const About = () => {
  const { mode } = useContext(authContext);
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    fetch('team.json')
      .then(res => res.json())
      .then(data => setEngineers(data));
  }, []);
  return (
    <>
      <Menu></Menu>
      <div className={`px-3 md:px-20 ${mode && 'bg-mode-dark text-mode-text'}`}>
        <div>
          <div className="text-center space-y-3">
            <p className="text-xl font-semibold text-[#FF3811]">Team</p>
            <h1 className="text-3xl font-bold">Meet Our Team</h1>
            <p className="max-w-[717px] mx-auto font-medium">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don ot look even slightly
              believable.{' '}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {engineers.map((enginer, idx) => (
              <TeamCard key={idx} enginer={enginer}></TeamCard>
            ))}
          </div>
          <div className="py-10 text-center">
            <button className="font-medium rounded-md px-5 py-2 md:text-xl border hover:bg-[#FF3811] transition-all text-[#FF3811] border-[#FF3811] hover:text-white">
              More Engineers
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
