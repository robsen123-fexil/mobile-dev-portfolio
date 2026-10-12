"use client"

import { useEffect, useId, useRef, useState } from "react"
import {
  Award,
  Code,
  Download,
  Github,
  GraduationCap,
  HeartPulse,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Server,
  Smartphone,
  Sun,
  Trophy,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DeviceFrame } from "@/components/device-frame"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
]

const skillGroups = [
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "Dart", "Clean Architecture", "MVVM"],
  },
  {
    title: "Backend / Fullstack",
    icon: Server,
    items: ["Python (FastAPI, Django)", "RESTful API Design", "Cloud Backend Services"],
  },
  {
    title: "Databases & Cloud Data Services",
    icon: Server,
    items: ["Supabase", "PostgreSQL", "Cloud NoSQL Database", "MongoDB", "SQL"],
  },
  {
    title: "Tools",
    icon: Code,
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger / OpenAPI",
      "Android Studio",
      "VS Code",
      "Figma",
      "AI tools (Claude, ChatGPT, GitHub Copilot)",
    ],
  },
  {
    title: "Other",
    icon: Award,
    items: ["Data Structures & Algorithms", "Competitive Programming", "Agile Development"],
  },
]

const experience = [
  {
    role: "Mobile Developer Intern (Flutter)",
    org: "Internship Program, MinT",
    place: "Addis Ababa",
    period: "2023–2024",
    points: [
      "Worked with a team on mobile application development, building Flutter apps with cloud backend services for auth, storage, and real-time features.",
      "Ran regression and manual UI testing across Android devices, reporting defects that improved stability.",
      "Built and validated backend APIs, checking request/response behavior and data integrity.",
    ],
  },
  {
    role: "Software Engineering Trainee, Fullstack & Mobile Development",
    org: "African To Silicon Valley (A2SV)",
    place: "Adama",
    period: "2025–2026",
    points: [
      "Worked with a team on mobile application development using Clean Architecture, aligned with DSA practice.",
      "Built and manually tested RESTful APIs with Python (FastAPI) and cloud backend services, catching edge-case failures.",
      "Ran regression testing across fullstack features, tracing issues from the Flutter front end through backend services and resolving defects with peers.",
    ],
  },
  {
    role: "Freelance Mobile Developer (Flutter)",
    org: "Upwork",
    place: "Remote",
    period: "Present",
    points: [
      "Upwork Top Rated freelancer with a 100% Job Success Score, working with clients worldwide.",
      "Built production Flutter apps for clients, including tour and travel, event platforms, AAC, agriculture, and rental booking products.",
      "Integrated REST APIs, Supabase, and cloud backend services, with regression testing, UI and cross-device Android compatibility testing, API validation, and defect reporting.",
    ],
  },
]

type ProjectCategory = "client" | "team" | "other"
type FilterId = "all" | "client" | "team"

type Project = {
  id: string
  title: string
  client: string
  clientChip: string
  role: string
  description: string
  technologies: string[]
  github?: string
  category: ProjectCategory
  device: "phone" | "tablet"
  cover?: string
  images: string[]
  alt: string
  highlight?: string
  featured?: boolean
  tint: string
}

const projects: Project[] = [
  {
    id: "shopally",
    title: "ShopAlly",
    client: "A2SV team project · Mobile Team Lead",
    clientChip: "Team Project",
    role: "Mobile Team Lead",
    description:
      "AI-powered Alibaba shopping app: describe what you need in your own language and get matching products, with a creative e-commerce UI. Won 1st place in the A2SV G6 project phase for code quality and teamwork.",
    technologies: ["Flutter", "Dart", "AI integration", "Go backend"],
    category: "team",
    device: "phone",
    featured: true,
    highlight: "1st Place, A2SV G6",
    tint: "tint-amber",
    cover: "/projects/shopally/cover.webp",
    images: [
      "/projects/shopally/cover.webp",
      "/projects/shopally/01.webp",
      "/projects/shopally/02.webp",
      "/projects/shopally/03.webp",
      "/projects/shopally/04.webp",
      "/projects/shopally/05.webp",
      "/projects/shopally/06.webp",
      "/projects/shopally/07.webp",
      "/projects/shopally/08.webp",
      "/projects/shopally/09.webp",
      "/projects/shopally/10.webp",
      "/projects/shopally/11.webp",
      "/projects/shopally/12.webp",
    ],
    alt: "ShopAlly welcome screen with yellow logo and AI shopping tagline",
  },
  {
    id: "imerzn",
    title: "Imerzn",
    client: "Tour and travel · US client",
    clientChip: "Tour and Travel",
    role: "Mobile developer",
    description:
      "Mobile work for a tour and travel agency client from the US, connecting them with travelers and supporting their shipping workflow. Integrated the client's live backend and built the UI with MVVM.",
    technologies: ["Flutter", "Dart", "REST APIs", "MVVM"],
    category: "client",
    device: "phone",
    tint: "tint-blue",
    cover: "/projects/imerzn/cover.webp",
    images: [
      "/projects/imerzn/cover.webp",
      "/projects/imerzn/03-screen.webp",
      "/projects/imerzn/01-screen.webp",
      "/projects/imerzn/04-screen.webp",
      "/projects/imerzn/02-screen.webp",
    ],
    alt: "Imerzn login screen with Welcome Back and travel branding",
  },
  {
    id: "brunch",
    title: "Brunch Sister",
    client: "Event · US client",
    clientChip: "Event",
    role: "Mobile developer",
    description:
      "Mobile work for an event platform client from the US: moved an event creation and management platform from Base44 to a live mobile app using Flutter and Supabase.",
    technologies: ["Flutter", "Dart", "Supabase"],
    category: "client",
    device: "phone",
    tint: "tint-rose",
    cover: "/projects/brunch/01.webp",
    images: [
      "/projects/brunch/01.webp",
      "/projects/brunch/03.webp",
      "/projects/brunch/04.webp",
      "/projects/brunch/05.webp",
      "/projects/brunch/06.webp",
      "/projects/brunch/07.webp",
    ],
    alt: "Brunch Sister home screen listing restaurants with ratings and a calendar tab",
  },
  {
    id: "smartfarmer",
    title: "SmartFarmer",
    client: "Agricultural product",
    clientChip: "Agricultural Product",
    role: "Mobile developer",
    description:
      "Agricultural product for a Hubstaff client from India that captures images, sends them to an AI dataset backend, and displays the returned result. Includes a chat with an AI bot and a library of books on agricultural diseases.",
    technologies: ["Flutter", "Dart", "REST APIs", "AI integration"],
    category: "client",
    device: "phone",
    tint: "tint-green",
    cover: "/projects/smartfarmer/01.webp",
    images: ["/projects/smartfarmer/01.webp", "/projects/smartfarmer/02.webp"],
    alt: "SmartFarmer result screen describing a soybean leaf disease and recommendations",
  },
  {
    id: "yenqal",
    title: "Yeneqal",
    client: "Augmentative and Alternative Communication · US-based client",
    clientChip: "Augmentative and Alternative Communication",
    role: "Mobile developer",
    description:
      "Amharic-augmented Augmentative and Alternative Communication app for young children, built for a US-based client, with a kid-friendly tablet mode and tap-to-hear audio.",
    technologies: ["Flutter", "Dart"],
    category: "client",
    device: "tablet",
    tint: "tint-teal",
    cover: "/projects/yenqal/cover.webp",
    images: [
      "/projects/yenqal/cover.webp",
      "/projects/yenqal/01.webp",
      "/projects/yenqal/02.webp",
      "/projects/yenqal/03.webp",
      "/projects/yenqal/04.webp",
      "/projects/yenqal/05.webp",
    ],
    alt: "Yeneqal Augmentative and Alternative Communication tablet grid in Amharic",
  },
  {
    id: "autorent",
    title: "AutoRent",
    client: "Automated rental booking · Mohammed local marketplace",
    clientChip: "Automated Rental Booking",
    role: "Mobile developer",
    description:
      "Automated rental booking platform for Mohammed's local marketplace and its local customers: real-time availability, automated booking, and payments.",
    technologies: ["Flutter", "Cloud Backend Services"],
    github: "https://github.com/robsen123-fexil/autorent.flutter",
    category: "client",
    device: "phone",
    tint: "tint-slate",
    cover: "/projects/autorent/03.webp",
    images: [
      "/projects/autorent/03.webp",
      "/projects/autorent/05.webp",
      "/projects/autorent/02.webp",
      "/projects/autorent/04.webp",
      "/projects/autorent/01.webp",
    ],
    alt: "AutoRent car rental screens showing vehicle search, details, and booking",
  },
  {
    id: "betlink",
    title: "Betlink",
    client: "Mobile property marketplace",
    clientChip: "Team Project",
    role: "Mobile developer",
    description:
      "Property marketplace for buyers and sellers, with regression-tested search, filtering, and messaging across Android devices.",
    technologies: ["Flutter", "Dart"],
    category: "team",
    device: "phone",
    tint: "tint-green",
    cover: "/projects/betlink/01.webp",
    images: [
      "/projects/betlink/01.webp",
      "/projects/betlink/02.webp",
      "/projects/betlink/03.webp",
      "/projects/betlink/04.webp",
      "/projects/betlink/05.webp",
      "/projects/betlink/06.webp",
    ],
    alt: "Betlink welcome screen with login and register",
  },
  {
    id: "ai-health",
    title: "AI Health Assistant",
    client: "Multilingual AI health app",
    clientChip: "Multilingual AI health app",
    role: "Mobile UI",
    description:
      "User-friendly mobile UI (APK) for a multilingual AI health app, integrated with a TypeScript backend using MongoDB and SQL.",
    technologies: ["Flutter", "Dart", "TypeScript backend", "MongoDB", "SQL"],
    github: "https://github.com/robsen123-fexil/ai-health-assistant-app",
    category: "other",
    device: "phone",
    tint: "tint-neutral",
    images: [],
    alt: "AI Health Assistant placeholder",
  },
]

const education = [
  {
    title: "B.Sc. Software Engineering",
    org: "Adama Science and Technology University",
    period: "2026",
  },
  {
    title: "A2SV Software Engineering Program",
    org: "African To Silicon Valley",
    period: "1 year, 2025–2026",
    detail:
      "Problem solving, DSA, LeetCode, and competitive programming, then a mobile app development phase using Clean Architecture.",
  },
  {
    title: "ALX Software Engineering",
    org: "ALX Africa",
    period: "2023–2024",
    detail: "https://savanna.alxafrica.com/certificates/FzJNsmTyHZ",
  },
]

const achievements = [
  "A2SV G6 Project Phase, 1st Place: quality code and good teamwork (led the mobile team on ShopAlly).",
  "Upwork Top Rated badge, 100% Job Success Score, worldwide clients.",
  "Hackathon, 1st Place: Android app giving students resources, course outlines, and campus navigation tools.",
]

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "client", label: "Client Work" },
  { id: "team", label: "Team Projects" },
]

function matchesFilter(project: Project, filter: FilterId) {
  if (filter === "all") return true
  return project.category === filter
}

function HealthPlaceholder() {
  // TODO: replace with real screenshot
  return (
    <div className="health-placeholder">
      <HeartPulse className="h-10 w-10" aria-hidden />
      <p className="text-sm font-medium leading-snug">AI Health Assistant</p>
    </div>
  )
}

function ProjectVisual({
  project,
  priority = false,
  className,
}: {
  project: Project
  priority?: boolean
  className?: string
}) {
  return (
    <DeviceFrame
      variant={project.device}
      src={project.cover}
      alt={project.alt}
      priority={priority}
      className={className}
    >
      {!project.cover ? <HealthPlaceholder /> : null}
    </DeviceFrame>
  )
}

function TechRow({ technologies, max = 3 }: { technologies: string[]; max?: number }) {
  const visible = technologies.slice(0, max)
  const overflow = technologies.length - visible.length
  return (
    <div className="flex flex-nowrap items-center justify-start gap-2 overflow-hidden">
      {visible.map((tech) => (
        <Badge key={tech} variant="secondary" className="shrink-0">
          {tech}
        </Badge>
      ))}
      {overflow > 0 && (
        <Badge variant="outline" className="shrink-0">
          +{overflow}
        </Badge>
      )}
    </div>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState<FilterId>("all")
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const filterLabelId = useId()
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!activeProject) return
    const onKey = (event: KeyboardEvent) => {
      if (!galleryRef.current) return
      if (event.key === "ArrowRight") {
        galleryRef.current.scrollBy({ left: 260, behavior: "smooth" })
      }
      if (event.key === "ArrowLeft") {
        galleryRef.current.scrollBy({ left: -260, behavior: "smooth" })
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeProject])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const featured = projects.find((project) => project.featured)!
  const gridProjects = projects.filter((project) => !project.featured)
  const showFeatured = matchesFilter(featured, filter)

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="site-container py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-sm text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Robsen Teshome
            </button>
            <div className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-sm text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle color theme"
                onClick={() => setTheme(isDark ? "light" : "dark")}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
            <div className="flex items-center gap-1 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle color theme"
                onClick={() => setTheme(isDark ? "light" : "dark")}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="flex flex-col gap-3 border-t py-4 lg:hidden">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-sm text-left text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <header className="section-space pt-28">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[1fr_minmax(17rem,20rem)]">
          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">Robsen Teshome</p>
            <h1 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Mobile App Developer
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Flutter &amp; Mobile Application Development
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                Addis Ababa, Ethiopia
              </span>
              <span aria-hidden>·</span>
              <a href="tel:+251940046254" className="hover:text-foreground">
                +251 940 046 254
              </a>
              <span aria-hidden>·</span>
              <span>open to onsite or remote, prefers flexible remote</span>
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
              <Trophy className="h-4 w-4 text-primary" aria-hidden />
              Upwork Top Rated, 100% JSS
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => scrollToSection("projects")}>View projects</Button>
              <Button variant="outline" asChild>
                <a href="/Robsen_Teshome_Mobile_Dev.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/robsen123-fexil"
                aria-label="GitHub"
                className="rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/robsen-teshoma-4b129b281"
                aria-label="LinkedIn"
                className="rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://leetcode.com/u/Robsen/"
                aria-label="LeetCode"
                className="rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Code className="h-5 w-5" />
              </a>
              <a
                href="mailto:robsenteshoma1@gmail.com"
                aria-label="Email"
                className="rounded-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="device-stage">
            <div className="phone-fan">
              <div className="phone-fan__back">
                <DeviceFrame variant="phone" src="/projects/shopally/01.webp" alt="" priority />
              </div>
              <div className="phone-fan__front">
                <DeviceFrame variant="phone" src={featured.cover} alt={featured.alt} priority />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section-space border-y bg-muted/30">
          <div className="site-container">
            <div className="about-grid">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
                <div className="about-copy mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Mobile App Developer with 3+ years of experience building production Flutter applications.
                    Upwork Top Rated freelancer with a 100% Job Success Score, working with clients worldwide.
                    Strong foundation in Flutter, Dart, REST APIs, Python (FastAPI, Django), cloud backend
                    services, and Supabase, with hands-on experience in regression testing, UI and cross-device
                    Android compatibility testing, API validation, and defect reporting.
                  </p>
                  <p>
                    I look for clear roles with an individual-contributor track, room to grow as a mobile
                    engineer, challenging mobile product problems, and a quiet, product-focused team.
                    Preferred stack: Flutter, Dart, Python, FastAPI, Django, Supabase, REST APIs, and Clean
                    Architecture.
                  </p>
                </div>
              </div>
              <aside aria-label="Quick facts">
                <dl className="about-facts">
                  <div>
                    <dt>Location</dt>
                    <dd>Addis Ababa, Ethiopia</dd>
                  </div>
                  <div>
                    <dt>Work setup</dt>
                    <dd>onsite or remote, prefers flexible remote</dd>
                  </div>
                  <div>
                    <dt>Languages</dt>
                    <dd>English, Amharic</dd>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm font-medium">
                    <Trophy className="h-4 w-4 text-primary" aria-hidden />
                    Upwork Top Rated, 100% JSS
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section id="skills" className="section-space">
          <div className="site-container">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
            <div className="skills-grid mt-8">
              {skillGroups.map((group) => {
                const isMobile = group.title === "Mobile"
                return (
                  <article
                    key={group.title}
                    className={cn("skill-card", isMobile && "skills-grid__mobile")}
                  >
                    <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
                      <group.icon className="h-4 w-4 text-primary" aria-hidden />
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap justify-start gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="skill-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section-space border-y bg-muted/30">
          <div className="site-container site-container--narrow">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
            <div className="timeline mt-8">
              {experience.map((job) => (
                <article key={job.role} className="timeline-item">
                  <p className="text-xs font-medium uppercase tracking-wide text-primary">{job.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {job.org} · {job.place}
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-space">
          <div className="site-container">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>

            <div className="mt-6" role="group" aria-labelledby={filterLabelId}>
              <p id={filterLabelId} className="sr-only">
                Filter projects
              </p>
              <div className="flex flex-wrap justify-start gap-2">
                {filters.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFilter(item.id)}
                    aria-pressed={filter === item.id}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      filter === item.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative mt-8 min-h-[28rem]">
              {showFeatured && (
                <article className="featured-case mb-8">
                  <div className={cn("featured-case__stage", featured.tint)}>
                    <ProjectVisual project={featured} />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center justify-start gap-2">
                      <Badge className="bg-primary/15 text-primary hover:bg-primary/15">Featured</Badge>
                      <Badge variant="outline">{featured.clientChip}</Badge>
                      {featured.highlight && (
                        <Badge variant="secondary">
                          <Trophy className="mr-1 h-3 w-3" aria-hidden />
                          {featured.highlight}
                        </Badge>
                      )}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold">{featured.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{featured.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{featured.description}</p>
                    <div className="mt-4 flex flex-wrap justify-start gap-2">
                      {featured.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap justify-start gap-2">
                      <Button size="sm" onClick={() => setActiveProject(featured)}>
                        View details
                      </Button>
                    </div>
                  </div>
                </article>
              )}

              <div className="projects-grid relative">
                {gridProjects.map((project) => {
                  const visible = matchesFilter(project, filter)
                  return (
                    <article
                      key={project.id}
                      data-hidden={!visible}
                      aria-hidden={!visible}
                      className="project-card project-filter-item"
                    >
                      <div className={cn("project-mockup", project.tint)}>
                        <ProjectVisual project={project} />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <Badge variant="outline" className="mt-2 w-fit">
                          {project.clientChip}
                        </Badge>
                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="mt-4">
                          <TechRow technologies={project.technologies} />
                        </div>
                        <div className="mt-auto flex flex-wrap justify-start gap-2 pt-5">
                          <Button size="sm" variant="outline" onClick={() => setActiveProject(project)}>
                            View details
                          </Button>
                          {project.github && (
                            <Button size="sm" variant="ghost" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-1 h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-space border-y bg-muted/30">
          <div className="site-container site-container--narrow">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Education</h2>
            <div className="mt-8 space-y-4">
              {education.map((item) => (
                <article key={item.title} className="rounded-xl border bg-card p-5">
                  <h3 className="flex items-start gap-2 text-lg font-semibold">
                    <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.org} · {item.period}
                  </p>
                  {item.detail &&
                    (item.detail.startsWith("http") ? (
                      <a
                        href={item.detail}
                        className="mt-3 inline-block rounded-sm text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ALX certificate
                      </a>
                    ) : (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                    ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section-space">
          <div className="site-container site-container--narrow">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Achievements</h2>
            <ul className="mt-8 space-y-3">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border bg-card p-4 text-sm leading-relaxed">
                  <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section-space border-y bg-muted/30">
          <div className="site-container site-container--narrow">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
            <p className="mt-4 text-muted-foreground">
              Addis Ababa, Ethiopia. Open to onsite or remote work, and prefer flexible remote.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="mailto:robsenteshoma1@gmail.com"
                >
                  <Mail className="h-4 w-4 text-primary" aria-hidden />
                  robsenteshoma1@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="tel:+251940046254"
                >
                  +251 940 046 254
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="https://linkedin.com/in/robsen-teshoma-4b129b281"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 text-primary" aria-hidden />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="https://github.com/robsen123-fexil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 text-primary" aria-hidden />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="https://leetcode.com/u/Robsen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="h-4 w-4 text-primary" aria-hidden />
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href="https://robsenteshome.vercel.app/"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t px-4 py-8 text-sm text-muted-foreground">
        <div className="site-container">© {new Date().getFullYear()} Robsen Teshome</div>
      </footer>

      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
          {activeProject && (
            <>
              <DialogHeader className="text-left sm:text-left">
                <DialogTitle>{activeProject.title}</DialogTitle>
                <DialogDescription>
                  {activeProject.client} · {activeProject.role}
                </DialogDescription>
              </DialogHeader>
              <p className="text-left text-sm leading-relaxed text-muted-foreground">
                {activeProject.description}
              </p>
              <div>
                <h4 className="mb-2 text-left text-sm font-semibold">Tech stack</h4>
                <div className="flex flex-wrap justify-start gap-2">
                  {activeProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              {activeProject.github && (
                <Button size="sm" variant="outline" asChild className="w-fit">
                  <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              <div>
                <h4 className="mb-3 text-left text-sm font-semibold">Screenshots</h4>
                {activeProject.images.length > 0 ? (
                  <div
                    ref={galleryRef}
                    className="gallery-track"
                    role="region"
                    aria-label={`${activeProject.title} screenshots`}
                    tabIndex={0}
                  >
                    {activeProject.images.map((src, index) => (
                      <DeviceFrame
                        key={src}
                        variant={activeProject.device}
                        src={src}
                        alt={`${activeProject.title} screenshot ${index + 1}`}
                        className={
                          activeProject.device === "tablet"
                            ? "w-[18rem] shrink-0"
                            : "w-[10.5rem] shrink-0"
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-start py-2">
                    <DeviceFrame variant="phone" className="w-[10.5rem]">
                      <HealthPlaceholder />
                    </DeviceFrame>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
