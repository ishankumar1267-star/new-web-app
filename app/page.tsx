import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Video, TrendingUp, Users, Clock, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-6 py-4 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Video className="w-6 h-6 text-primary" />
          <span>ShortGenius AI</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="#pricing" className="hover:underline">Pricing</Link>
          <Link href="#about" className="hover:underline">About</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/dashboard">
             <Button variant="ghost">Log In</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 px-6 md:px-12 lg:px-24 text-center space-y-8 bg-gradient-to-b from-background to-secondary/20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Turn 1 Idea Into <span className="text-primary">Viral Reels</span> in 30 Seconds
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The ultimate AI Short-Form Content Generator for Instagram Reels, YouTube Shorts, and TikTok.
            Script, Hook, Scene Breakdown, and Captions — all in one click.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 h-12 w-full sm:w-auto">Generate My Reel</Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 h-12 w-full sm:w-auto">
              <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>
          <div className="pt-8 flex justify-center gap-8 text-muted-foreground grayscale opacity-70">
            <div className="flex items-center gap-2"><Instagram className="h-6 w-6" /> Reels</div>
            <div className="flex items-center gap-2"><Youtube className="h-6 w-6" /> Shorts</div>
            <div className="flex items-center gap-2 font-bold">
               {/* TikTok SVG */}
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
               TikTok
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/10">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Viral Hooks</h3>
                <p className="text-muted-foreground">Generate 3 scroll-stopping hooks optimized for the first 3 seconds to maximize retention.</p>
             </div>
             <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Platform Optimized</h3>
                <p className="text-muted-foreground">Content tailored specifically for Instagram, YouTube, and TikTok algorithms.</p>
             </div>
             <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Save Time</h3>
                <p className="text-muted-foreground">Stop staring at a blank page. Go from idea to full script in under 30 seconds.</p>
             </div>
          </div>
        </section>
      </main>
      <footer className="py-8 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ShortGenius AI. All rights reserved.
      </footer>
    </div>
  );
}
