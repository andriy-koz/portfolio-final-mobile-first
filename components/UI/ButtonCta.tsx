interface ButtonCtaProps {
  link: string;
  text: string;
}

const ButtonCta: React.FC<ButtonCtaProps> = ({ link, text }) => {
  return (
    <a
      href={link}
      className='inline-block transition-all uppercase px-5 py-3 bg-white rounded-full text-gray-600 shadow-md hover:-translate-y-1 hover:shadow-lg active:-translate-y-[2px]'>
      {text}
    </a>
  );
};

export default ButtonCta;
