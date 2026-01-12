import { Card, CardContent } from "@/components/ui/card"
import { History } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">History</h2>
        <p className="text-muted-foreground">View your past generations.</p>
      </div>

      <Card className="border-dashed bg-secondary/5 min-h-[400px] flex items-center justify-center">
        <CardContent className="text-center text-muted-foreground p-8">
          <History className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No history found</p>
          <p className="text-sm">Generate some content to see it here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
