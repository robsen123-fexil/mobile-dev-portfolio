"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Award,
  Briefcase,
  Code,
  Download,
  Github,
  GraduationCap,
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

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

const projects = [
  {
    title: "ShopAlly",
    client: "A2SV team project · Mobile Team Lead",
    description:
      "AI-powered Alibaba shopping app: describe what you need in your own language and get matching products, with a creative e-commerce UI. Won 1st place in the A2SV G6 project phase for code quality and teamwork.",
    image: "/projects/shopally.jpg",
    alt: "ShopAlly product grid showing Alibaba listings in a Flutter shopping app",
    technologies: ["Flutter", "Dart", "AI integration", "Go backend"],
  },
  {
    title: "Imerzn",
    client: "US tour & travel agency client",
    description:
      "Mobile work for a US tour and travel agency, connecting them with travelers and supporting their shipping workflow. Integrated the client's live backend and built the UI with MVVM.",
    image: "/projects/imerzn.webp",
    alt: "Imerzn tour and travel mobile app screen",
    technologies: ["Flutter", "Dart", "REST APIs", "MVVM"],
  },
  {
    title: "Brunch Sister",
    client: "US client",
    description:
      "Moved an event creation and management platform from Base44 to a live mobile app using Flutter and Supabase.",
    image: "/projects/brunch.jpg",
    alt: "Brunch Sister home screen listing restaurants with ratings and a calendar tab",
    technologies: ["Flutter", "Dart", "Supabase"],
  },
  {
    title: "SmartFarmer",
    client: "Hubstaff client from India",
    description:
      "Captures images, sends them to an AI dataset backend, and displays the returned result. Includes a chat with an AI bot and a library of books on agricultural diseases.",
    image: "/projects/smartfarmer.jpg",
    alt: "SmartFarmer result screen describing a soybean leaf disease and recommendations",
    technologies: ["Flutter", "Dart", "REST APIs", "AI integration"],
  },
  {
    title: "Yeneqal",
    client: "US client",
    description:
      "Amharic-augmented language learning app for young children, with a kid-friendly tablet mode and tap-to-hear audio.",
    image: "/projects/yenqal.png",
    alt: "Yeneqal tablet screen of illustrated Amharic communication tiles",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "AutoRent",
    client: "Local client",
    description:
      "Vehicle rental platform for a local client and its local customers: real-time availability, automated booking, and payments.",
    image: "/projects/autorent.png",
    alt: "AutoRent car rental screens showing vehicle search, details, and booking",
    technologies: ["Flutter", "Cloud Backend Services"],
    github: "https://github.com/robsen123-fexil/autorent.flutter",
  },
  {
    title: "Betlink",
    client: "Mobile property marketplace",
    description:
      "Property marketplace for buyers and sellers, with regression-tested search, filtering, and messaging across Android devices.",
    image: "/projects/betlink.jpg",
    alt: "Betlink welcome screen with login and register",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "AI Health Assistant",
    client: "Multilingual AI health app",
    description:
      "User-friendly mobile UI (APK) for a multilingual AI health app, integrated with a TypeScript backend using MongoDB and SQL.",
    technologies: ["Flutter", "Dart", "TypeScript backend", "MongoDB", "SQL"],
    github: "https://github.com/robsen123-fexil/ai-health-assistant-app",
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

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

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
              className="text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Robsen Teshome
            </button>
            <div className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
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
                  className="text-left text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <header className="px-4 pb-16 pt-28">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Robsen Teshome
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
            Mobile App Developer
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Flutter &amp; Mobile Application Development
          </p>
          <p className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden />
            Addis Ababa, Ethiopia · +251 940 046 254 · open to onsite or remote, prefers flexible remote
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border bg-secondary px-4 py-2 text-sm font-medium">
            <Trophy className="h-4 w-4 text-primary" aria-hidden />
            Upwork Top Rated, 100% JSS
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Mobile App Developer with 3+ years of experience building production Flutter applications.
            Upwork Top Rated freelancer with a 100% Job Success Score, working with clients worldwide.
            Strong foundation in Flutter, Dart, REST APIs, Python (FastAPI, Django), cloud backend
            services, and Supabase, with hands-on experience in regression testing, UI and cross-device
            Android compatibility testing, API validation, and defect reporting.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={() => scrollToSection("projects")}>View projects</Button>
            <Button variant="outline" asChild>
              <a href="/Robsen_Teshome_Mobile_Dev.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-5">
            <a
              href="https://github.com/robsen123-fexil"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/robsen-teshoma-4b129b281"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/u/Robsen/"
              aria-label="LeetCode"
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              <Code className="h-5 w-5" />
            </a>
            <a
              href="mailto:robsenteshoma1@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              <Mail className="h-5 w-5" />
            </a>
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
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold sm:text-3xl">Skills</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <Card key={group.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-base">
                      <group.icon className="mr-2 h-4 w-4 text-primary" aria-hidden />
                      {group.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-muted/40 px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
            <div className="mt-8 space-y-6">
              {experience.map((job) => (
                <Card key={job.role}>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-2 text-lg">
                      <Briefcase className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {job.role}
                    </CardTitle>
                    <CardDescription>
                      {job.org} · {job.place} · {job.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold sm:text-3xl">Projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title} className="overflow-hidden">
                  {project.image ? (
                    <div className="relative aspect-[4/3] bg-muted">
                      <Image
                        src={project.image}
                        alt={project.alt ?? project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-muted px-6 text-center text-sm text-muted-foreground">
                      Screenshot not added yet
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-xs font-medium uppercase tracking-wide">
                      {project.client}
                    </CardDescription>
                    <p className="pt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="bg-muted/40 px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Education</h2>
            <div className="mt-8 space-y-4">
              {education.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-2 text-lg">
                      <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {item.title}
                    </CardTitle>
                    <CardDescription>
                      {item.org} · {item.period}
                    </CardDescription>
                  </CardHeader>
                  {item.detail && (
                    <CardContent>
                      {item.detail.startsWith("http") ? (
                        <a
                          href={item.detail}
                          className="text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ALX certificate
                        </a>
                      ) : (
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                      )}
                    </CardContent>
                  )}
                </Card>
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
                <a className="inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm" href="mailto:robsenteshoma1@gmail.com">
                  <Mail className="h-4 w-4 text-primary" aria-hidden />
                  robsenteshoma1@gmail.com
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm" href="tel:+251940046254">
                  +251 940 046 254
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm" href="https://linkedin.com/in/robsen-teshoma-4b129b281" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 text-primary" aria-hidden />
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm" href="https://github.com/robsen123-fexil" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 text-primary" aria-hidden />
                  GitHub
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm" href="https://leetcode.com/u/Robsen/" target="_blank" rel="noopener noreferrer">
                  <Code className="h-4 w-4 text-primary" aria-hidden />
                  LeetCode
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm" href="https://robsenteshome.vercel.app/">
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
    </div>
  )
}
