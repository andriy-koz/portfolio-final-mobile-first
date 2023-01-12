import Image from 'next/image';
import ButtonCta from '../UI/ButtonCta';

const Hero = () => {
  return (
    <header className='h-[90vh] w-full hero-bg relative'>
      <div className='absolute top-6 left-6'>
        <Image src='/logo-koz.png' height={40} width={80} alt='logo' />
      </div>
      <div className='absolute top-[35%] w-full text-center'>
        <h1 className='mb-12 text-white'>
          <span className='block text-5xl bg-green-400/75 w-fit mx-auto px-1 -skew-x-12'>
            <div className='skew-x-12'>
              <span className='tracking-tighter text-6xl'>KOZ</span> DEV
            </div>
          </span>
          <span className='block text-xl font-bold uppercase w-fit mx-auto px-1 bg-green-400/75 -skew-x-12'>
            Diseño y desarrollo de software
          </span>
        </h1>
        <ButtonCta link='#' text='explora nuestos proyectos' />
      </div>
    </header>
  );
};

export default Hero;
