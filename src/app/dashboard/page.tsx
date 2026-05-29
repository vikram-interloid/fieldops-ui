import { PageContainer } from "@/components/layout/page-container";

export default function DashboardPage() {
    return (
        <PageContainer>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--text-primary)]">
                        Dashboard
                    </h1>

                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                        Monitor field operations and SLA performance
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-[var(--surface)] p-10 shadow-[var(--shadow-sm)] rounded-lg">
                        KPI Card
                    </div>

                    <div className="bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] rounded-lg">
                        KPI Card
                    </div>

                    <div className="bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] rounded-lg">
                        KPI Card
                    </div>
                    <div className="bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] rounded-lg">
                        KPI Card
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}