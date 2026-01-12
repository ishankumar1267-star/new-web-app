"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { GenerateRequest } from "@/lib/types"
import { Loader2, Sparkles } from "lucide-react"

interface GeneratorFormProps {
  onGenerate: (data: GenerateRequest) => void;
  isLoading: boolean;
}

export function GeneratorForm({ onGenerate, isLoading }: GeneratorFormProps) {
  const [topic, setTopic] = useState("")
  const [platform, setPlatform] = useState("Instagram Reels")
  const [language, setLanguage] = useState("English")
  const [style, setStyle] = useState("Storytelling")
  const [duration, setDuration] = useState("30s")
  const [tone, setTone] = useState("Energetic")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onGenerate({
      topic,
      platform: platform as "Instagram Reels" | "YouTube Shorts" | "TikTok",
      language,
      style,
      duration,
      tone,
    })
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="topic">Topic / Idea</Label>
            <Input
              id="topic"
              placeholder="e.g. How to start an online business"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select
                id="platform"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                <option value="Instagram Reels">Instagram Reels</option>
                <option value="YouTube Shorts">YouTube Shorts</option>
                <option value="TikTok">TikTok</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Hinglish">Hinglish</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="style">Content Style</Label>
              <Select
                id="style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              >
                <option value="Storytelling">Storytelling</option>
                <option value="Educational">Educational</option>
                <option value="Motivational">Motivational</option>
                <option value="Mystery">Mystery</option>
                <option value="Faceless">Faceless</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="15s">15 Seconds</option>
                <option value="30s">30 Seconds</option>
                <option value="45s">45 Seconds</option>
                <option value="60s">60 Seconds</option>
              </Select>
            </div>

             <div className="space-y-2">
              <Label htmlFor="tone">Tone</Label>
              <Select
                id="tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              >
                <option value="Emotional">Emotional</option>
                <option value="Energetic">Energetic</option>
                <option value="Calm">Calm</option>
                <option value="Professional">Professional</option>
                <option value="Humorous">Humorous</option>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating Magic...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Script
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
