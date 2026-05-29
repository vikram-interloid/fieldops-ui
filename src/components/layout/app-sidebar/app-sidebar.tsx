"use client";
import { navigation } from "@/config/navigation";
import { SidebarItems } from "./sidebar-item";

export function AppSidebar() {
    return (
        <aside
            className="
            flex
            h-screen
            w-70
            flex-col
            border-r
            border-white/10
            bg-[linear-gradient(180deg,#006d75_0%,#0b525b_100%)]
            text-white
            "
        >
            <div className="p-6">
                <h1 className="text-2xl font-bold tracking-tight">
                    FieldOps
                </h1>

                <p className="mt-1 text-sm text-white/60">
                    Field Service Platform
                </p>
            </div>

            <nav className="flex-1 px-4 gap-2 flex flex-col">
                {
                    navigation.map((item) => (
                        <SidebarItems
                            key={item.href}
                            {...item}
                        />
                    ))
                }
            </nav>

            <div className="border-t border-white/10 p-4">
                <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-sm font-medium">
                        Vikram
                    </p>
                    <p className="text-xs text-white/60">
                        Operations Admin
                    </p>
                </div>
            </div>
        </aside>
    )
}
