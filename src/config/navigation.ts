import {
    Boxes,
    ChartNoAxesCombined,
    ClipboardList,
    LayoutDashboard,
    Truck,
    Users
} from "lucide-react";

export const navigation = [
    {
        label: 'Dashboard',
        href: '/',
        icon: LayoutDashboard,
    },
    {
        label: 'Work Orders',
        href: '/work-orders',
        icon: ClipboardList,
    },
    {
        label: 'Dispatch',
        href: '/dispatch',
        icon: Truck,
    },
    {
        label: 'Technicians',
        href: '/technicians',
        icon: Users,
    },
    {
        label: 'Assets',
        href: '/assets',
        icon: Boxes,
    },
    {
        label: 'Analytics',
        href: '/analytics',
        icon: ChartNoAxesCombined,
    }
]