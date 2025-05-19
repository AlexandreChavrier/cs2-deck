'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useDropdown } from '@/hooks/useDropdown';
import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from '@/components/ui/buttons/Buttons';
import { maps, GameMap } from '@/data/maps';
import MenuIcon from '../ui/icons/MenuIcon';
import SteamIcon from '../ui/icons/SteamIcon';
import HeartIcon from '../ui/icons/HeartIcon';
import SunIcon from '../ui/icons/SunIcon';


interface HeaderProps {
    className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        <header className={`w-full top-0 z-50 sticky py-6 font-semibold backdrop-blur bg-[linear-gradient(90.13deg,rgba(72,66,209,0.12)_-16.44%,rgba(136,132,225,0.12)_121.16%)] ${className}`}>
            <nav className='flex items-center gap-6 max-w-[1200px] mx-auto justify-between  '>
                <Link href="/">
                    <div className="">
                        <Image src="/assets/logo.png" alt="logo" width={56} height={56} />
                    </div>
                </Link>
                <div className='flex items-center gap-8'>
                    <div 
                        className='relative inline-block'
                        ref={dropdownRef}
                        >
                        <button 
                            className='flex flex-row items-center text-body-sm text-neutral-white gap-1 p-4 border-none cursor-pointer bg-transparent transition-all duration-300 ease-in-out'
                            onClick={toggleDropdown}
                            >
                            <span>Toutes les cartes</span>
                            <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                                <MenuIcon />
                            </div>
                        </button>
                        {isOpen && (
                            <div className='flex-col items-start absolute min-w-[160px] z-[1] p-2 bg-neutral-900 border-[2px] border-neutral-800 rounded-md'>
                                {maps.map((map: GameMap, index: number) => (
                                    <Link
                                        key={index}
                                        href={map.link ?? '#'}
                                        className='max-w-[1200px] mx-auto'
                                    >
                                        <div className='flex items-center p-2 text-neutral-white gap-2 border-[2px] border-transparent transition-all duration-300 ease-in-out mb-2 hover:border-neutral-700 hover:bg-neutral-600 hover:py-2 hover:px-2 hover:pl-4 hover:pr-2 hover:rounded-sm'>
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

                    <Link href='' className='text-body-sm text-neutral-white'>Lineups populaires</Link>
                    <Link href='' className='text-body-sm text-neutral-white'>Actualité</Link>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <div className='flex flex-row max-w-[1200px] mx-auto '>
                        <PrimaryButton
                            title='Se connecter avec Steam'
                            icon={<SteamIcon />}
                        />
                    </div>
                    <div>
                        <Link href=''>
                            <div className=''>
                                <HeartIcon />
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href=''>
                            <div>
                                <SunIcon />
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}