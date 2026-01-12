import { GeneratedContent } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface OutputDisplayProps {
  content: GeneratedContent;
}

export function OutputDisplay({ content }: OutputDisplayProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null)

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSection(section)
    setTimeout(() => setCopiedSection(null), 2000)
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Hooks */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">🪝 Viral Hooks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {content.hooks.map((hook, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-secondary/20 rounded-lg border">
              <span className="font-bold text-primary/50 text-xl">#{index + 1}</span>
              <p className="flex-1 font-medium">{hook}</p>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => copyToClipboard(hook, `hook-${index}`)}
              >
                {copiedSection === `hook-${index}` ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Script */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">📜 Full Script</CardTitle>
          <Button
            size="sm"
            variant="outline"
            onClick={() => copyToClipboard(content.script, 'script')}
          >
             {copiedSection === 'script' ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
             Copy Script
          </Button>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
            {content.script}
          </div>
        </CardContent>
      </Card>

      {/* Scene Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">🎬 Scene-by-Scene Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {content.scenes.map((scene, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg hover:bg-secondary/10 transition-colors">
                <div className="md:col-span-1">
                   <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Time</div>
                   <div className="font-mono text-sm bg-primary/10 inline-block px-2 py-1 rounded text-primary font-bold">{scene.duration}</div>
                </div>
                <div className="md:col-span-3 space-y-3">
                   <div>
                       <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Visual</div>
                       <p className="text-sm">{scene.visual}</p>
                   </div>
                   <div>
                       <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Audio / Voiceover</div>
                       <p className="text-sm italic text-muted-foreground">&quot;{scene.audio}&quot;</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Captions & Hashtags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">📝 Caption</CardTitle>
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => copyToClipboard(content.captions, 'captions')}
                >
                    {copiedSection === 'captions' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
            </CardHeader>
            <CardContent>
                <p className="whitespace-pre-wrap text-sm">{content.captions}</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">#️⃣ Hashtags</CardTitle>
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => copyToClipboard(content.hashtags.join(" "), 'hashtags')}
                >
                    {copiedSection === 'hashtags' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {content.hashtags.map((tag, i) => (
                        <span key={i} className="text-blue-500 hover:underline cursor-pointer text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>

    </div>
  )
}
