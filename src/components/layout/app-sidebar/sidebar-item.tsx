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
    return (
        <Link
            href={href}
            className="
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                text-white/80
                transition-all
                hover:bg-white/10
                hover:text-white
            "
        >
            <Icon size={18} />

            <span>{label}</span>
        </Link>
    )
}
