import Image from 'next/image';
import { about } from '../../data.json';
import ButtonSecondary from '../UI/ButtonSecondary';
import Subtitle from '../UI/Subtitle';

const About = () => {
  return (
    <section className='flex flex-col items-center'>
      <Subtitle text='sobre nosotros' />
      <div className='text-center px-6 mt-6 text-gray-500'>
        <h3 className='uppercase font-semibold mb-2'>{about[0].title}</h3>
        <p className='mb-6'>{about[0].content}</p>
        <h3 className='uppercase font-semibold mb-2'>{about[1].title}</h3>
        <p className='mb-6'>{about[1].content}</p>
      </div>
      <ButtonSecondary link='#' text='Aprende más &rarr;' />
      <div className='mt-10 flex mx-5 group'>
        <div className='transition-all -mr-12 rounded-lg overflow-hidden h-fit hover:z-10 border-4 border-transparent group-hover:scale-90 hover:!scale-110 hover:border-green-500'>
          <Image
            src='/about-1.webp'
            width={150}
            height={96}
            alt='about image'
          />
        </div>
        <div className='transition-all -mt-4 rounded-lg overflow-hidden h-fit hover:z-10 border-4 border-transparent group-hover:scale-90 hover:!scale-110 hover:border-green-500'>
          <Image
            src='/about-2.webp'
            width={150}
            height={96}
            alt='about image'
          />
        </div>
        <div className='transition-all -ml-12 mt-3 rounded-lg overflow-hidden h-fit hover:z-10 border-4 border-transparent group-hover:scale-90 hover:!scale-110 hover:border-green-500'>
          <Image
            src='/about-3.webp'
            width={150}
            height={96}
            alt='about image'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
