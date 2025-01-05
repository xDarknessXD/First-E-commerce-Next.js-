import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const NoProductAvail = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10'
      )}
    >
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
        <h2 className='text-2xl font-semibold text-gray-800'>No Product Available</h2>
      </motion.div>
      <motion.p className='text-gray-600' initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        We&apos;re sorry, but there are no products matching on{' '}
        <span className="text-base font-semibold text-darkColor">
          {selectedTab}
        </span>{' '}
        criteria at the moment.
      </motion.p>
      <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1.3, repeat: Infinity }}
      className='flex items-center space-x-2 text-blue-600'>
        <Loader2 className='w-4 h-4 animate-spin' /><span>We&apos;re restocking shortly</span>
      </motion.div>
      <motion.p
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className='text-sm text-gray-600'>
        Please check back later or explore our other products categories.
      </motion.p>
    </div>
  );
};

export default NoProductAvail;
