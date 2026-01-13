import { AdminSidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
            <h1 className="text-lg font-semibold md:text-xl">Dashboard</h1>
            <div className="ml-auto flex items-center gap-4">
                <div className="text-sm text-muted-foreground">Admin User</div>
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">A</div>
            </div>
        </header>
        <main className="flex-1 p-6 md:p-8 bg-secondary/5 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
