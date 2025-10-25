import { AppHeader } from "@/components/dashboard-layout/app-header";
import { Sidebar } from "@/components/dashboard-layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen max-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AppHeader />
        <main className="flex-1 max-h-screen min-h-screen overflow-y-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
