export function AppHeader() {
    return (
      <header
        className="
          bg-[var(--surface)]
          h-18
          flex
          items-center
          justify-between
          border-b
          border-[var(--border)]
          px-6
        "
      >
        <div>
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            Dashboard
          </h2>
        </div>

        <div>
          Profile
        </div>
      </header>
    )
}
