import { useContext, useEffect, useState } from 'react';
import TeamCard from './TeamCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay } from 'swiper/modules';
import './swiper.css';
import { authContext } from '../../../provider/AuthProvider';

const Teams = () => {
  const [engineer, setEngineer] = useState([]);
  const { mode } = useContext(authContext);
  useEffect(() => {
    fetch('team.json')
      .then(res => res.json())
      .then(data => setEngineer(data));
  }, []);

  return (
    <div className={`px-3 md:px-20 ${mode && 'bg-mode-dark'}`}>
      <div className={`text-center space-y-3 ${mode && 'text-mode-text'}`}>
        <p className="text-xl font-semibold text-[#FF3811]">Team</p>
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <p className="max-w-[717px] mx-auto font-medium">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don ot look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed="5000"
        >
          {engineer.map((enginer, idx) => (
            <SwiperSlide key={idx}>
              <TeamCard enginer={enginer}></TeamCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Teams;
