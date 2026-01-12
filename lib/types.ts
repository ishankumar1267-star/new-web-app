export interface GenerateRequest {
  topic: string;
  platform: 'Instagram Reels' | 'YouTube Shorts' | 'TikTok';
  language: string;
  style: string;
  duration: string;
  tone: string;
}

export interface GeneratedContent {
  hooks: string[];
  script: string;
  scenes: {
    duration: string;
    visual: string;
    audio: string;
  }[];
  captions: string;
  hashtags: string[];
}
