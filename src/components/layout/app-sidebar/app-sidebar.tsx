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
                <h1 className="text-2xl font-bold">
                    FieldOps
                </h1>
            </div>

            <nav className="flex-1 px-4 gap-2 flex flex-col">
                <div className="bg-white/10 px-4 py-3 rounded-md">
                    Dashboard
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-md">
                    Work Orders
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-md">
                    Route
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-md">
                    Assets
                </div>
            </nav>

            <div className="border-t border-white/10 p-4 flex justify-end pr-10">
                User Profile
            </div>
        </aside>
    )
}
