
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Initialize off-screen
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Smooth spring animation for the trailing ring
  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      // Check for clickable/interactive elements
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('input') || 
                        target.closest('select') || 
                        target.closest('textarea') || 
                        target.closest('[data-hover="true"]') ||
                        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Hide default cursor on desktop to create a seamless experience */}
      <style>{`
        @media (min-width: 768px) {
          body, a, button, input, select, textarea {
            cursor: none !important;
          }
        }
      `}</style>

      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        {/* Outer Ring - Expands on hover */}
        <motion.div
          className="rounded-full border border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHovering ? 40 : 12,
            height: isHovering ? 40 : 12,
            opacity: isHovering ? 0.8 : 0.6,
            borderWidth: '1px',
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        
        {/* Center Dot - Fades out slightly on hover */}
        <motion.div
          className="bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHovering ? 4 : 6,
            height: isHovering ? 4 : 6,
            opacity: isHovering ? 0 : 1
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
