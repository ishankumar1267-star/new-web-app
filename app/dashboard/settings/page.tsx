import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account and preferences.</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
             <CardTitle className="text-xl">Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-secondary/10 rounded-md">
               <p className="font-medium">User</p>
               <p className="text-sm text-muted-foreground">user@example.com</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
             <CardTitle className="text-xl">Subscription</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="p-4 border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-900 rounded-md">
               <p className="font-bold text-blue-800 dark:text-blue-300">Free Plan</p>
               <p className="text-sm text-blue-600 dark:text-blue-400">You are on the free plan. Upgrade to Pro for unlimited generations.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
