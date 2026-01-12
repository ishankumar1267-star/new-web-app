"use client"

import { useState } from "react"
import { GeneratorForm } from "@/components/generator-form"
import { OutputDisplay } from "@/components/output-display"
import { GenerateRequest, GeneratedContent } from "@/lib/types"
import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  const [content, setContent] = useState<GeneratedContent | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async (data: GenerateRequest) => {
    setIsLoading(true)
    setError(null)
    setContent(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to generate content')
      }

      const result = await response.json()
      setContent(result)
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
        <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Create New Content</h2>
            <p className="text-muted-foreground">Generate viral scripts, hooks, and captions for your next video.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
                 <GeneratorForm onGenerate={handleGenerate} isLoading={isLoading} />

                 {error && (
                    <div className="mt-4 p-4 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900 rounded-md">
                        {error}
                    </div>
                 )}
            </div>

            <div className="lg:col-span-7">
                {content ? (
                    <OutputDisplay content={content} />
                ) : (
                    <Card className="h-full min-h-[400px] flex items-center justify-center border-dashed bg-secondary/5">
                        <div className="text-center p-8 text-muted-foreground">
                            {isLoading ? (
                                <div className="space-y-4">
                                    <div className="animate-pulse flex flex-col items-center">
                                       <div className="h-4 w-48 bg-secondary rounded mb-2"></div>
                                       <div className="h-3 w-32 bg-secondary rounded"></div>
                                    </div>
                                    <p>AI is brainstorming hooks & writing scripts...</p>
                                </div>
                            ) : (
                                <>
                                    <p className="text-lg font-medium">Ready to Create?</p>
                                    <p className="text-sm">Fill out the form to generate your viral content.</p>
                                </>
                            )}
                        </div>
                    </Card>
                )}
            </div>
        </div>
    </div>
  )
}
