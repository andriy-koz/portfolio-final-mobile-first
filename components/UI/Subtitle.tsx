import React from 'react';

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <h2 className='text-2xl tracking-wider font-semibold uppercase subtitle-bg'>
      {text}
    </h2>
  );
};

export default Subtitle;
