
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';
import { Plus } from 'lucide-react';

interface PortfolioImageProps {
  item: PortfolioItem;
  onClick: () => void;
}

const PortfolioImage: React.FC<PortfolioImageProps> = ({ item, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-[#eae6db]"
      onClick={onClick}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Overlay */}

      <div className="absolute top-4 right-4 bg-[#f4f1ea]/90 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
        <Plus className="w-4 h-4 text-[#1a3a32]" />
      </div>
    </motion.div>
  );
};

export default PortfolioImage;
