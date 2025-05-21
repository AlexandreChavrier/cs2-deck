'use client';
import Link from 'next/link';
import Image from 'next/image';
import DefaultButton from '@/components/ui/buttons/DefaultButton';
import DropdownMenuHeader from '../ui/navigation/DropdownMenuHeader';
import SteamIcon from '../ui/icons/SteamIcon';
import HeartIcon from '../ui/icons/HeartIcon';
import SunIcon from '../ui/icons/SunIcon';
import DropdownMenu from '../ui/navigation/DropdownMenu';

interface HeaderProps {
  className?: string;
}

const STYLES = {
  header: "w-full top-0 z-50 sticky py-6 font-semibold backdrop-blur bg-[linear-gradient(90.13deg,rgba(72,66,209,0.12)_-16.44%,rgba(136,132,225,0.12)_121.16%)]",
  container: "w-full px-4 md:px-6 lg:px-8",
  nav: "max-w-[1280px] flex items-center gap-6 mx-auto justify-between",
  navLinks: "flex items-center gap-8",
  link: "text-body-sm text-neutral-white hover:text-primary-300 transition-colors duration-300",
  actionsContainer: "flex flex-row items-center gap-4",
  iconWrapper: "p-2 hover:bg-neutral-800 rounded-full transition-all duration-300"
};

const Header = ({ className = '' }: HeaderProps) => {
  return (
    <header className={STYLES.header}>
      <div className={STYLES.container}>
        <nav className={STYLES.nav}>
          <Link href="/">
            <Image src="/assets/logo.png" alt="logo" width={56} height={56} />
          </Link>

          <div className={STYLES.navLinks}>
            <DropdownMenuHeader />
            <Link href='/lineups' className={STYLES.link}>Lineups populaires</Link>
            <Link href='' className={STYLES.link}>Actualité</Link>
          </div>

          <div className={STYLES.actionsContainer}>
            <DefaultButton
              title='Se connecter avec Steam'
              variant='purple'
              size='md'
              icon={<SteamIcon />}
            />
            <Link href=''>
              <div className=''>
                <HeartIcon />
              </div>
            </Link>
            <Link href=''>
              <div>
                <SunIcon />
              </div>
            </Link>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Header;