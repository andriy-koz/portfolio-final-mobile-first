interface ButtonSecondaryProps {
  text: string;
  link: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ text, link }) => {
  return (
    <a
      href={link}
      className='border-t-2 border-b-2 border-b-green-500 border-t-transparent px-1 py-1 text-green-500 transition-all hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:shadow-md'>
      {text}
    </a>
  );
};

export default ButtonSecondary;
