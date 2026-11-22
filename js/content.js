/* ALL site content lives here. Add a project: add an object to a category's "items" (pick a visual type: video, transcript, noise, voice, moderation, dataset). */
window.PORTFOLIO = {
  profile: {
    name: "Md. Sanjid Jaman Himel",
    short: "Sanjid",
    title: "Data Annotation Analyst | Annotation QA | Computer Vision Training Data",
    status: "Open to remote data annotation roles",
    headline: "I turn raw video, audio and text into training data that AI can learn from.",
    tagline: "Quality-focused annotator and QA professional with Bengali-language expertise, a sharp eye for edge cases, and strict guideline accuracy.",
    location: "Dhaka, Bangladesh"
  },
  nav: [
    { id: "projects", label: "Work" },
    { id: "focus", label: "Focus" },
    { id: "process", label: "Process" },
    { id: "path", label: "Path" },
    { id: "contact", label: "Contact" }
  ],
  ctas: [
    { label: "See my work", href: "#projects", primary: true },
    { label: "Contact me", href: "#contact" },
    { label: "Download CV", href: "assets/Sanjid_Jaman_Himel_CV.pdf" }
  ],
  hero: { visual: "video", caption: "Illustrative: how dashcam event tagging works (not real footage)" },
  impact: {
    heading: "Results in numbers",
    items: [
      { value: "99%+", label: "accuracy on Bengali audio transcription", pct: 99 },
      { value: "100%", label: "guideline adherence across 100+ SoT evaluations", pct: 100 },
      { value: "4,000+", label: "Bengali audio segments transcribed" },
      { value: "3,700+", label: "content items reviewed for toxicity and risk" }
    ]
  },
  projects: {
    heading: "Selected work",
    intro: "Each project shows the task, what I did and the result. Visuals are illustrations; client data is never shown.",
    categories: [
      {
        id: "annotation", label: "Data Annotation",
        items: [
          { visual: "video", title: "Dashcam Video Event Tagging", org: "Rooya Bangladesh", period: "Sep 2026 – Present", type: "Video annotation",
            summary: "Annotating dashcam footage of moving vehicles as part of an AI Operations team.",
            highlights: [
              "Tagged safety-critical events: harsh braking, acceleration and cornering.",
              "Compared road-view and driver-facing footage with AI-captured output to judge each event.",
              "Assigned the correct driver to every captured event."
            ],
            metrics: [{ v: "Ongoing", l: "since Sep 2026" }],
            tags: ["Video annotation", "Driver behavior analysis", "Event tagging"] },
          { visual: "transcript", title: "Bengali Speech & Audio Transcription", org: "Sigma AI", period: "Feb 2026 – Present", type: "Audio annotation",
            summary: "Contract transcription of Bengali audio for AI training data.",
            highlights: [
              "Handled overlapping speech, background noise and nonverbal cues.",
              "Followed speaker-label, timestamp and DTMF tagging standards.",
              "Rated audio on a structured framework across a 180-task batch."
            ],
            metrics: [{ v: "4,000+", l: "segments" }, { v: "99%+", l: "accuracy" }, { v: "98–100%", l: "formatting compliance" }],
            tags: ["Transcription", "Bengali", "Edge cases"] },
          { visual: "moderation", title: "Toxicity & Hate Speech Evaluation", org: "Innodata", period: "Dec 2025 – Jan 2026", type: "Content moderation",
            summary: "Reviewed high-volume Bengali text for risk and sensitive content.",
            highlights: [
              "Classified items across hate speech, PII and medical misinformation using SoT guidelines.",
              "Applied cultural context with self-review and self-QA.",
              "Tracked handling time and completion rates in spreadsheets."
            ],
            metrics: [{ v: "3,700+", l: "items reviewed" }],
            tags: ["Toxicity review", "PII identification", "Self-QA"] },
          { visual: "voice", title: "Bengali Voiceover Evaluation", org: "Innodata", period: "Jan 2026", type: "Audio quality evaluation",
            summary: "Evaluated Bengali voiceovers against reference materials on the Data Compute platform.",
            highlights: [
              "Assessed pronunciation, clarity, tone and overall audio quality.",
              "Completed training-led review cycles before full-scale assignments."
            ],
            metrics: [{ v: "100+", l: "recordings" }, { v: "100%", l: "guideline adherence" }],
            tags: ["Audio QA", "SoT guidelines", "Data Compute"] },
          { visual: "noise", title: "Speech & Noise Tagging", org: "Babel Audio", period: "Jul 2026", type: "Audio annotation",
            summary: "Part-time audio annotation for AI training data.",
            highlights: ["Tagged speech and noise and transcribed audio using structured labeling conventions."],
            tags: ["Noise tagging", "Transcription"] },
          { visual: "dataset", title: "Image Dataset Preparation", org: "DataKothon Research Lab", period: "May 2024 – Aug 2025", type: "Computer vision data",
            summary: "Python tooling to prepare and protect image datasets.",
            highlights: [
              "Automated image-composition scripts with Pillow and OpenCV.",
              "Applied data-masking across three datasets with Pandas and NumPy."
            ],
            metrics: [{ v: "1,000+", l: "samples / week" }, { v: "30%", l: "faster prep" }, { v: "40%", l: "lower re-ID risk" }],
            tags: ["Python", "OpenCV", "Pillow", "Data privacy"] }
        ]
      },
      { id: "data", label: "Data Analysis & ML", blurb: "Projects in this field are coming soon.", items: [] },
      { id: "ai", label: "AI Engineering", blurb: "Projects in this field are coming soon.", items: [] }
    ]
  },
  focus: {
    heading: "What I annotate",
    items: [
      { icon: "video", title: "Video", text: "Dashcam footage: safety-critical event tagging and driver behavior analysis." },
      { icon: "audio", title: "Audio", text: "Bengali transcription, speaker labels, noise and nonverbal tagging, voiceover quality checks." },
      { icon: "text", title: "Text", text: "Toxicity, hate speech, PII and sensitive-content review with cultural context." },
      { icon: "image", title: "Images", text: "Dataset preparation and masking with Python (OpenCV, Pillow)." },
      { icon: "qa", title: "Quality", text: "Guideline adherence, edge-case handling, self-QA, validation and productivity tracking." }
    ]
  },
  process: {
    heading: "How I keep quality high",
    steps: [
      { title: "Study the guidelines", text: "Read the Source of Truth (SoT) rules before the first task." },
      { title: "Annotate consistently", text: "Apply the same rules to every clip, segment and item." },
      { title: "Work the edge cases", text: "Handle difficult utterances, overlapping speech, noise and sensitive content with care." },
      { title: "Self-QA", text: "Review my own work before it is submitted." },
      { title: "Track and report", text: "Monitor volume, handling time and quality, and give accurate feedback." }
    ]
  },
  path: {
    heading: "Path so far",
    groups: [
      { label: "Annotation & AI data", items: [
        { role: "Data Annotation Analyst", org: "Rooya Bangladesh", period: "Sep 2026 – Present", line: "Dashcam event tagging and driver behavior analysis." },
        { role: "AI Data Annotator", org: "Sigma AI", period: "Feb 2026 – Present", line: "Bengali speech and audio transcription." },
        { role: "Audio Annotator", org: "Babel Audio", period: "Jul 2026", line: "Speech and noise tagging." },
        { role: "Content Specialist & Voiceover Evaluator", org: "Innodata", period: "Dec 2025 – Jan 2026", line: "Toxicity review and voiceover evaluation in Bengali." }
      ]},
      { label: "Data, research & QA", items: [
        { role: "Junior Executive", org: "Aman Graphics & Designs Limited", period: "Sep 2025 – Aug 2026", line: "Daily QA and data validation on export-related records." },
        { role: "Research Intern", org: "DataKothon Research Lab", period: "May 2024 – Aug 2025", line: "Image dataset scripts and data masking in Python." },
        { role: "Data Analyst Associate", org: "Excelerate", period: "Mar – Apr 2025", line: "PostgreSQL database and 8 Looker Studio dashboards." }
      ]},
      { label: "Operations & programs", items: [
        { role: "Project Management Associate", org: "Excelerate", period: "Mar – Apr 2025", line: "Jira Kanban framework for a 5-member team." },
        { role: "Program & Operations Associate", org: "United Youth Network (UYN)", period: "Jan 2023 – Feb 2025", line: "Participant record checks and auditable Excel records." }
      ]},
      { label: "Education & certifications", items: [
        { role: "BSS in Sociology", org: "Bangladesh University of Professionals (BUP)", period: "2025", line: "GPA 3.39/4.00." },
        { role: "Career Essentials in Generative AI, Data Analysis and Administrative Assistance", org: "Microsoft & LinkedIn Learning", period: "2025", line: "Three professional certificates." }
      ]}
    ]
  },
  tools: {
    heading: "Toolbox",
    groups: [
      { name: "Platforms", list: ["Labelbox", "Prodigy", "Data Compute Platform"] },
      { name: "Data & code", list: ["Python", "OpenCV", "Pillow", "Pandas", "NumPy", "SQL"] },
      { name: "Work tools", list: ["Jira", "Confluence", "Microsoft Excel", "Google Workspace"] },
      { name: "Languages", list: ["English (Fluent)", "Bengali (Native)", "Hindi", "Urdu"] }
    ]
  },
  contact: {
    heading: "Let's work together",
    intro: "Available for remote, contract-based annotation and AI data work.",
    email: "sanjidjamanhimel@gmail.com",
    linkedin: "https://www.linkedin.com/in/sanjidjamanhimel",
    github: "" /* PLACEHOLDER: add your GitHub profile URL here, e.g. "https://github.com/yourname". Hidden while empty. */
  }
};
