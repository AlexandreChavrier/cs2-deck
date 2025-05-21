import { ReactNode, useEffect, useRef, useState } from "react";
import MenuIcon from "../icons/MenuIcon";

export type DropdownMenuProps = {
  options: string[];
  className?: string;
  content?: string;
  icon?: ReactNode;
}

const DropdownMenu = ({ content, icon, className, options }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState((options[0] || ''))

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
    <div ref={dropdownRef} className="relative min-w-[88px]">
      <div
        className="flex items-center justify-between w-full bg-neutral-800 border-md border-neutral-600 rounded-sm px-3 py-2 gap-1"
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <MenuIcon />
      </div>

      {isOpen && (
        <div className="absolute w-full mt-1 bg-neutral-800 border-md border-neutral-600 rounded-sm shadow-lg z-10 max-h-60 overflow-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-3 hover:bg-neutral-700 cursor-pointer transition-colors"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default DropdownMenu;