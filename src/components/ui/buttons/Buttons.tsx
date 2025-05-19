import { ReactNode } from 'react';
import Link from 'next/link';

export type ButtonProps = {
    title: string;
    icon?: ReactNode;
    iconSize?: number;
    href?: string;
    onClick?: () => void;
}

export default function PrimaryButton({ title, icon, href, onClick }: ButtonProps) {

    const buttonClasses = "text-body-md leading-6 bg-primary-600 text-neutral-white px-4 py-1 rounded-[7.5rem] border border-primary-500 flex flex-row items-center justify-center gap-1 cursor-pointer";
    const buttonContent = (
      <button 
        className={buttonClasses}
        onClick={onClick}
      >
        {icon && <span className="icon">{icon}</span>}
        <span>{title}</span>
      </button>
    );
  
    if (href) {
      return (
        <Link href={href}>
          {buttonContent}
        </Link>
      );
    }
  
    return buttonContent;
  }