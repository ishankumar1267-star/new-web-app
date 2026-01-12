import Link from "next/link"
import { Video, PlusSquare, History, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-card md:flex">
        <div className="flex h-16 items-center border-b px-6 font-bold text-xl">
          <Video className="mr-2 h-6 w-6 text-primary" />
          ShortGenius
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <PlusSquare className="mr-2 h-4 w-4" />
              New Generator
            </Button>
          </Link>
          <Link href="/dashboard/history">
            <Button variant="ghost" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Content History
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Link href="/">
             <Button variant="outline" className="w-full justify-start">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b px-6 bg-background">
            <h1 className="text-lg font-semibold">Content Generator</h1>
             {/* Mobile Menu Toggle could go here */}
             <div className="md:hidden">ShortGenius</div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 bg-secondary/10">
          {children}
        </main>
      </div>
    </div>
  )
}
