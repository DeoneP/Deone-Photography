/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
}

const GradientText: React.FC<RevealTextProps> = ({ text, as: Component = 'span', className = '', delay = 0 }) => {
  return (
    <Component className={`relative inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 1, 0.5, 1],
          delay: delay 
        }}
        className="block text-[#2c2c2c]"
      >
        {text}
      </motion.span>
    </Component>
  );
};

export default GradientText;