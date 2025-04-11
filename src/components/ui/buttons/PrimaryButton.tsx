import { ReactNode } from 'react';
import Link from 'next/link';

export type ButtonProps = {
    title: string;
    icon?: ReactNode;
    iconSize?: number;
    href?: string;
    onClick?: () => void;
}

export default function PrimaryButton({
    title,
    icon,
    iconSize,
    href,
    onClick
}: ButtonProps) {
    
};