import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Diamond_Sprite from '/Diamond_Sprite.png';
import Ring from '/ring.png';
import Prong from '/Prong.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const diamondRef = useRef(null);
  const ringRef = useRef(null);
  const prongRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const diamond = diamondRef.current;
    const ring = ringRef.current;
    const prong = prongRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    })
    .from(diamond, { y: 300 }) 
    .from(ring, { y: -380 }, "<") 
    .from(prong, { y: -380}, "<"); 
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      
      <div className="absolute left-0 top-0 10 w-full h-full flex flex-col items-center pl-10">
        
        <div
          ref={diamondRef}
          style={{
            backgroundImage: `url(${Diamond_Sprite})`,
            backgroundSize: 'cover',
            width: '200px', 
            height: '200px', 
            marginTop: '100px', 
          }}
        ></div>

        
        <div className="relative" style={{ marginTop: '500px' }}> 
          <img
            ref={ringRef}
            src={Ring}
            alt="Ring"
            style={{ width: '600px', height: 'auto' }} 
          />
          <img
            ref={prongRef}
            src={Prong}
            alt="Prong"
            style={{
              width: '150px', 
              height: '110px',
              position: 'absolute',
              top: '13%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;