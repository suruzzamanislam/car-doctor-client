import { useEffect, useState } from 'react';
import TeamCard from './TeamCard';
const Teams = () => {
  const [engineer, setEngineer] = useState([]);
  useEffect(() => {
    fetch('team.json')
      .then(res => res.json())
      .then(data => setEngineer(data));
  }, []);

  return (
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
        {engineer.slice(0, 3).map((enginer, idx) => (
          <TeamCard key={idx} enginer={enginer}></TeamCard>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button className="font-medium rounded-md px-5 py-2 md:text-xl border hover:bg-[#FF3811] transition-all text-[#FF3811] border-[#FF3811] hover:text-white">
          More Engineers
        </button>
      </div>
    </div>
  );
};

export default Teams;
