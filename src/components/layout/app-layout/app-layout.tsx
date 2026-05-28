import { ReactNode } from 'react';

import { AppHeader } from '../app-header/app-header';
import { AppSidebar } from '../app-sidebar';

type AppLayoutProps = Readonly<{
    children: ReactNode;
}>;

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="flex h-screen overflow-hidden bg-[var(--background)]">
            <AppSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <AppHeader />
                <main className='p-6 overflow-y-auto flex-1'>
                    {children}
                </main>
            </div>
        </div>
    )
}
