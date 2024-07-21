import React, { useEffect } from 'react';
import gsap from 'gsap';

const Pointer = () => {
  useEffect(() => {
    const cursorEffect = () => {
      const contain = document.querySelector('body');
      const cursor = document.querySelector('.cursor');

      contain.addEventListener('mousemove', function (val) {
        gsap.to(cursor, {
          x: val.x,
          y: val.y,
        });
      });
    };

    cursorEffect();

    // Cleanup event listener when the component is unmounted
    return () => {
      const contain = document.querySelector('body');
      contain.removeEventListener('mousemove', cursorEffect);
    };
  }, []);

  return <div className="cursor w-[40px] h-[40px] bg-[#C4D1EC] rounded-full fixed mix-blend-difference top-0 left-0 z-90 max-sm:hidden "></div>;
};

export default Pointer;