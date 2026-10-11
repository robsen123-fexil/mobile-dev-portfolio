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
    items: ["Flutter", "Dart", "MVVM", "Clean Architecture"],
  },
  {
    title: "Backend / Fullstack",
    icon: Server,
    items: ["Python (FastAPI, Django)", "RESTful API Design", "Cloud Backend Services"],
  },
  {
    title: "Databases & Cloud Data Services",
    icon: Server,
    items: ["Cloud NoSQL Database", "Supabase", "PostgreSQL", "MongoDB", "SQL"],
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
}

const projects: Project[] = [
  {
    id: "shopally",
    title: "ShopAlly",
    client: "A2SV team project · Mobile Team Lead",
    clientChip: "A2SV team project",
    role: "Mobile Team Lead",
    description:
      "AI-powered Alibaba shopping app: describe what you need in your own language and get matching products, with a creative e-commerce UI. Won 1st place in the A2SV G6 project phase for code quality and teamwork.",
    technologies: ["Flutter", "Dart", "AI integration", "Go backend"],
    category: "team",
    device: "phone",
    featured: true,
    highlight: "1st Place, A2SV G6",
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
    client: "US tour & travel agency client",
    clientChip: "US Client",
    role: "Mobile developer",
    description:
      "Mobile work for a US tour and travel agency, connecting them with travelers and supporting their shipping workflow. Integrated the client's live backend and built the UI with MVVM.",
    technologies: ["Flutter", "Dart", "REST APIs", "MVVM"],
    category: "client",
    device: "phone",
    cover: "/projects/imerzn/03-screen.webp",
    images: [
      "/projects/imerzn/03-screen.webp",
      "/projects/imerzn/01-screen.webp",
      "/projects/imerzn/04-screen.webp",
      "/projects/imerzn/02-screen.webp",
    ],
    alt: "Imerzn tour and travel mobile app screen",
  },
  {
    id: "brunch",
    title: "Brunch Sister",
    client: "US client",
    clientChip: "US Client",
    role: "Mobile developer",
    description:
      "Moved an event creation and management platform from Base44 to a live mobile app using Flutter and Supabase.",
    technologies: ["Flutter", "Dart", "Supabase"],
    category: "client",
    device: "phone",
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
    client: "Hubstaff client from India",
    clientChip: "Hubstaff Client from India",
    role: "Mobile developer",
    description:
      "Captures images, sends them to an AI dataset backend, and displays the returned result. Includes a chat with an AI bot and a library of books on agricultural diseases.",
    technologies: ["Flutter", "Dart", "REST APIs", "AI integration"],
    category: "client",
    device: "phone",
    cover: "/projects/smartfarmer/01.webp",
    images: ["/projects/smartfarmer/01.webp", "/projects/smartfarmer/02.webp"],
    alt: "SmartFarmer result screen describing a soybean leaf disease and recommendations",
  },
  {
    id: "yenqal",
    title: "Yeneqal",
    client: "US client",
    clientChip: "US Client",
    role: "Mobile developer",
    description:
      "Amharic-augmented language learning app for young children, with a kid-friendly tablet mode and tap-to-hear audio.",
    technologies: ["Flutter", "Dart"],
    category: "client",
    device: "tablet",
    cover: "/projects/yenqal/01.webp",
    images: [
      "/projects/yenqal/01.webp",
      "/projects/yenqal/02.webp",
      "/projects/yenqal/03.webp",
      "/projects/yenqal/04.webp",
      "/projects/yenqal/05.webp",
    ],
    alt: "Yeneqal tablet screen of illustrated Amharic communication tiles",
  },
  {
    id: "autorent",
    title: "AutoRent",
    client: "Local client",
    clientChip: "Local Client",
    role: "Mobile developer",
    description:
      "Vehicle rental platform for a local client and its local customers: real-time availability, automated booking, and payments.",
    technologies: ["Flutter", "Cloud Backend Services"],
    github: "https://github.com/robsen123-fexil/autorent.flutter",
    category: "client",
    device: "phone",
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
    clientChip: "Mobile property marketplace",
    role: "Mobile developer",
    description:
      "Property marketplace for buyers and sellers, with regression-tested search, filtering, and messaging across Android devices.",
    technologies: ["Flutter", "Dart"],
    category: "other",
    device: "phone",
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

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState<FilterId>("all")
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const filterLabelId = useId()
  const { theme, setTheme } = useTheme()

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
        <div className="container mx-auto px-4 py-3">
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
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
            <div className="flex items-center gap-1 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle color theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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

      <header className="px-4 pb-16 pt-28">
        <div className="container mx-auto grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Robsen Teshome
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
              Mobile App Developer
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Flutter &amp; Mobile Application Development
            </p>
            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              Addis Ababa, Ethiopia · +251 940 046 254 · open to onsite or remote, prefers flexible remote
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-4 py-2 text-sm font-medium">
              <Trophy className="h-4 w-4 text-primary" aria-hidden />
              Upwork Top Rated, 100% JSS
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:mx-0">
              Mobile App Developer with 3+ years of experience building production Flutter applications.
              Upwork Top Rated freelancer with a 100% Job Success Score, working with clients worldwide.
              Strong foundation in Flutter, Dart, REST APIs, Python (FastAPI, Django), cloud backend
              services, and Supabase, with hands-on experience in regression testing, UI and cross-device
              Android compatibility testing, API validation, and defect reporting.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button onClick={() => scrollToSection("projects")}>View projects</Button>
              <Button variant="outline" asChild>
                <a href="/Robsen_Teshome_Mobile_Dev.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="mt-8 flex justify-center gap-5 lg:justify-start">
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
          <div className="flex justify-center">
            <ProjectVisual project={featured} priority className="device-frame--phone w-[12.5rem] sm:w-[13.5rem]" />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="bg-muted/40 px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I look for clear roles with an individual-contributor track, room to grow as a mobile
              engineer, challenging mobile product problems, and a quiet, product-focused team.
              Preferred stack: Flutter, Dart, Python, FastAPI, Django, Supabase, REST APIs, and Clean
              Architecture.
            </p>
          </div>
        </section>

        <section id="skills" className="px-4 py-16">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Skills</h2>
            <div className="mt-8 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    <group.icon className="h-4 w-4 text-primary" aria-hidden />
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="rounded-md px-3 py-1 text-sm font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-muted/40 px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
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

        <section id="projects" className="px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold sm:text-3xl">Projects</h2>

            <div className="mt-6" role="group" aria-labelledby={filterLabelId}>
              <p id={filterLabelId} className="sr-only">
                Filter projects
              </p>
              <div className="flex flex-wrap gap-2">
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

            <div className="mt-8 min-h-[28rem]">
              {showFeatured && (
                <button
                  type="button"
                  onClick={() => setActiveProject(featured)}
                  className="project-card mb-8 grid w-full gap-8 rounded-2xl border bg-card p-6 text-left md:grid-cols-[minmax(0,12rem)_1fr] md:items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex justify-center md:justify-start">
                    <ProjectVisual project={featured} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl font-semibold">{featured.title}</h3>
                      <Badge variant="outline">{featured.role}</Badge>
                      {featured.highlight && (
                        <Badge className="bg-primary/15 text-primary hover:bg-primary/15">
                          <Trophy className="mr-1 h-3 w-3" aria-hidden />
                          {featured.highlight}
                        </Badge>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{featured.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {featured.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </button>
              )}

              <div className="relative grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {gridProjects.map((project) => {
                  const visible = matchesFilter(project, filter)
                  return (
                    <button
                      key={project.id}
                      type="button"
                      data-hidden={!visible}
                      aria-hidden={!visible}
                      tabIndex={visible ? 0 : -1}
                      disabled={!visible}
                      onClick={() => setActiveProject(project)}
                      className="project-card project-filter-item flex flex-col rounded-2xl border bg-card p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none"
                    >
                      <div className="mb-5 flex min-h-[16rem] items-center justify-center">
                        <ProjectVisual project={project} />
                      </div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <Badge variant="outline" className="mt-2 w-fit">
                        {project.clientChip}
                      </Badge>
                      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="bg-muted/40 px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Education</h2>
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

        <section id="achievements" className="px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Achievements</h2>
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

        <section id="contact" className="bg-muted/40 px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
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

      <footer className="border-t px-4 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Robsen Teshome
      </footer>

      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
          {activeProject && (
            <>
              <DialogHeader>
                <DialogTitle>{activeProject.title}</DialogTitle>
                <DialogDescription>
                  {activeProject.clientChip} · {activeProject.role}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">{activeProject.description}</p>
              <div>
                <h4 className="mb-2 text-sm font-semibold">Tech stack</h4>
                <div className="flex flex-wrap gap-2">
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
                <h4 className="mb-3 text-sm font-semibold">Screenshots</h4>
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
                  <div className="flex justify-center py-2">
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
