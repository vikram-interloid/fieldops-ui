'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import type { LucideIcon } from 'lucide-react';

type SidebarItemsProps = Readonly<{
    label: string;
    href: string;
    icon: LucideIcon;
}>

export function SidebarItems({
    label,
    href,
    icon: Icon,
}: SidebarItemsProps) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            className={`
                flex items-center gap-3 rounded-xl px-4 py-3
                text-sm font-medium transition-all
                ${isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }
            `}
        >
            <Icon size={18} />

            <span>{label}</span>
        </Link>
    )
}
