import React, { FC } from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect cursor-auto w-full ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-darkColor  text-white/70 h-full p-10 border-r border-r-white-500 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">Mae's</Logo>
          </button>
          <button className="hover:text-red-500 hoverEffect" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-5 text-base font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              onClick={onClose}
              key={item?.title}
              href={item?.path}
              className={`hover:text-white hoverEffect w-24 relative group ${
                pathname === item?.path && 'text-white'
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia/>
      </motion.div>
    </div>
  );
};

export default SideBar;
