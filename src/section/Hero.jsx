import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Diamond_Sprite from '/public/Diamond_Sprite.png';
import Ring from '/public/ring.png';
import Prong from '/public/prong.png';

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
    .from(diamond, { y: 300 }) // Move diamond down
    .from(ring, { y: -380 }, "<") // Move ring up
    .from(prong, { y: -380}, "<"); // Move prong up simultaneously
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Wrapper div for all images, aligned to the left */}
      <div className="absolute left-0 top-0 10 w-full h-full flex flex-col items-center pl-10">
        {/* Diamond positioned at the top */}
        <div
          ref={diamondRef}
          style={{
            backgroundImage: `url(${Diamond_Sprite})`,
            backgroundSize: 'cover',
            width: '200px', // Adjust size as needed
            height: '200px', // Adjust size as needed
            marginTop: '100px', // Position below the navbar
          }}
        ></div>

        {/* Ring and Prong positioned together below the diamond */}
        <div className="relative" style={{ marginTop: '500px' }}> {/* Increased gap between diamond and ring/prong */}
          <img
            ref={ringRef}
            src={Ring}
            alt="Ring"
            style={{ width: '600px', height: 'auto' }} // Adjust size as needed
          />
          <img
            ref={prongRef}
            src={Prong}
            alt="Prong"
            style={{
              width: '150px', // Adjust size as needed
              height: '110px',
              position: 'absolute',
              top: '13%', // Center prong on the ring
              left: '50%', // Center prong on the ring
              transform: 'translate(-50%, -50%)', // Center prong on the ring
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;