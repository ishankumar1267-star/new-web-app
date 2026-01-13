import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Server, Database, Activity } from "lucide-react";

export default function SystemHealthPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">System Health</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">API Status</CardTitle>
                <Server className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-green-500">Operational</div>
                <p className="text-xs text-muted-foreground mt-1">99.99% Uptime</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Database</CardTitle>
                <Database className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-green-500">Connected</div>
                <p className="text-xs text-muted-foreground mt-1">Latency: 24ms</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Job Queue</CardTitle>
                <Activity className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-yellow-500">Busy</div>
                <p className="text-xs text-muted-foreground mt-1">12 Jobs Processing</p>
            </CardContent>
        </Card>
      </div>

      <Card>
          <CardHeader>
              <CardTitle>Recent System Logs</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="space-y-4">
                  {[
                      { type: 'info', msg: 'Backup completed successfully', time: '10 mins ago' },
                      { type: 'warning', msg: 'High memory usage detected on Worker #4', time: '45 mins ago' },
                      { type: 'info', msg: 'Deployment v1.2.0 successful', time: '2 hours ago' },
                      { type: 'error', msg: 'Failed payment webhook from Stripe', time: '5 hours ago' },
                  ].map((log, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                              {log.type === 'info' && <CheckCircle className="h-5 w-5 text-blue-500" />}
                              {log.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                              {log.type === 'error' && <AlertTriangle className="h-5 w-5 text-red-500" />}
                              <span className="text-sm font-medium">{log.msg}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{log.time}</span>
                      </div>
                  ))}
              </div>
          </CardContent>
      </Card>
    </div>
  );
}
