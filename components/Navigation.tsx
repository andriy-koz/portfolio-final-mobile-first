import { useState } from 'react';

const Navigation = () => {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <>
      <div
        className='h-16 w-16 rounded-full fixed top-6 right-6 bg-gray-100 z-40 group'
        onClick={() => setNavOpened(prevState => !prevState)}>
        <div
          className={`w-8 h-[2px] bg-gray-500 mx-auto mt-8 rounded-3xl relative before:rounded-3xl before:absolute before:top-2 before:w-8 before:h-[2px] before:bg-gray-500 before:transition-all after:rounded-3xl after:absolute after:bottom-2 after:w-8 after:h-[2px] after:bg-gray-500 after:transition-all  ${
            navOpened
              ? 'bg-transparent before:rotate-45 after:-rotate-45 before:group-hover:top-0 after:group-hover:bottom-0 before:top-0 after:bottom-0'
              : 'before:group-hover:top-3 after:group-hover:bottom-3'
          }`}
        />
      </div>
      <div
        className={`h-14 w-14 rounded-full fixed top-7 right-7 nav-bg-gradient z-30 transition-all duration-500 ${
          navOpened && 'scale-[50]'
        }`}
      />
      <nav className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <ul></ul>
      </nav>
    </>
  );
};

export default Navigation;
