import Image from 'next/image';
import { features } from '../../data.json';

interface CardProps {
  title: string;
  img: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, img, content }) => {
  return (
    <div className='transition-all w-full bg-gray-200/70 rounded-md text-center text-gray-600 py-8 space-y-2 shadow-md hover:-translate-y-1 hover:shadow-lg hover:scale-105'>
      <div>
        <Image
          src={`/${img}`}
          width={56}
          height={56}
          alt='icon'
          className='mx-auto'
        />
      </div>
      <h3 className='uppercase font-semibold'>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className='features-bg flex flex-col justify-center items-center px-5 py-24 mt-12 gap-6'>
      {features.map((item, i) => {
        return (
          <Card
            title={item.title}
            img={item.img}
            content={item.content}
            key={i}
          />
        );
      })}
    </section>
  );
};

export default Features;
