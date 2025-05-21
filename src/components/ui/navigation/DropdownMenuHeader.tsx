import { useState, useEffect, useRef } from 'react';
import { maps, GameMap } from '@/data/maps';
import MenuIcon from '../icons/MenuIcon';
import Link from 'next/link';
import Image from 'next/image';

const STYLES = {
  container: 'relative inline-block',
  trigger: 'flex flex-row items-center gap-1 text-xs sm:text-sm text-neutral-white border-none cursor-pointer bg-transparent transition-all duration-300 ease-in-out',
  icon: 'transition-transform duration-500',
  dropdown: 'flex flex-col items-start absolute min-w-[160px] w-full sm:w-auto right-0 sm:right-auto z-10 p-2 bg-neutral-900 border-2 border-neutral-800 rounded-md shadow-lg',
  linkWrapper: 'w-full',
  item: 'flex items-center p-2 w-full text-neutral-white gap-2 border-2 border-transparent transition-all duration-300 ease-in-out mb-2 rounded-sm hover:border-neutral-700 hover:bg-neutral-600 hover:pl-4'
};

const DropdownMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const closeDropdown = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={STYLES.container}
      ref={dropdownRef}
    >
      <button
        className={STYLES.trigger}
        onClick={toggleDropdown}
      >
        <span>Toutes les cartes</span>
        <div className={`${STYLES.icon} ${isOpen ? 'rotate-180' : ''}`}>
          <MenuIcon />
        </div>
      </button>
      {isOpen && (
        <div className={STYLES.dropdown}>
          {maps.map((map: GameMap, index: number) => (
            <Link
              key={index}
              href={map.link ?? '#'}
              className={STYLES.linkWrapper}
              onClick={closeDropdown}
            >
              <div className={STYLES.item}>
                <Image
                  src={map.icon}
                  alt={map.name}
                  height={24}
                  width={24}
                />
                <span>{map.name}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu;
