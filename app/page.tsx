"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Smartphone,
  Server,
  Trophy,
  Target,
  Calendar,
  Award,
  Brain,
  Cpu,
  Database,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    mobile: [
      "Flutter",
      "Dart",
      "iOS Development",
      "Android Development",
      "Firebase",
      "SQLite",
      "REST APIs",
      "State Management",
      "UI/UX Design",
      "Cross-platform",
    ],
    backend: [
      "FastAPI",
      "Python",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
  

    ],
    problemSolving: [
      "Data Structures",
      "Algorithms",
      "Dynamic Programming",
      "Graph Theory",
      "Tree Algorithms",
      "Sorting & Searching",
      "Greedy Algorithms",
      "Backtracking",
      "System Design",
    ],
    tools: [
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Figma",
      "Postman",
      "VS Code",
     

    ],
  }

  const projects = [
    {
      id: 1,
      title: "AutoRent - Automated Rental Platform",
      description:
        "A Flutter app for managing vehicle rentals with automated booking, real-time availability, and payment integration.",
      image: "/card.png?height=00&width=400",
      technologies: ["Flutter", "Firebase"],
      category: "Mobile App",
      features: [
        "Automated booking",
        "Real-time availability",
        "Payment integration",
        "Admin dashboard",
      ],
      github: "https://github.com/robsen123-fexil/autorent.flutter",
      demo: "https://www.figma.com/design/ir4WdEXpKMhYlNgL8zthOn/car-rental?node-id=0-1&t=ymoj9mk3Jxt5HFFh-0",
    },

    {
      id: 2,
      title: "AgriTech Mobile Suite",
      description:
        "Cross-platform mobile app for farmers with weather forecasting, crop monitoring disease Detection, and marketplace features.",
      image: "/smartfarmer.png?height=300&width=400",
      technologies: [
        "Flutter Dev",
        "FastAPI",
        "PostgreSQL",

        "ML Models",
        "Provider",
        "Python",
      ],
      category: "Mobile App",
      features: [
        "Weather predictions",
        "Crop disease detection",
        "Marketplace",
      ],
      github: "https://github.com/username/agritech",
      Design:
        "https://www.figma.com/design/asGgwQjBguFHDOIKDlpFUJ/Crop-Disease?node-id=98-5&t=ZZzuZ7C1bRC1EUy0-0",
    },
    {
      id: 3,
      title: "Fluent AI",
      description:
        "AI-powered language learning platform with scalable backend services for real-time chat, speech recognition, and personalized lesson delivery.",
      image: "/fluenta.png?height=300&width=400",
      technologies: ["Flutter", "Python", "Firebase auth", "AI models"],
      category: "Backend",
      features: [
        "Real-time chat",
        "Speech recognition",
        "Personalized lessons",
        "Scalable microservices",
      ],
      github: "https://github.com/robsen123-fexil/FluentAI-",
      demo: "https://www.figma.com/design/k5Jsrb7aTMqjZcpvAYYxzB/Fluent-ai?node-id=0-1&p=f&t=IZ3hxJh1qLS683A4-0",
    },

    {
      id: 4,
      title: "CraveChronicles Social App",
      description:
        "A full-stack social media platform where users can share posts, follow friends, and engage through real-time chat and media sharing.",
      image: "/crave.png?height=300&width=400",
      technologies: [
        "Flutter",
        "Firebase auth",
        "DB",
        
        "Socket.IO",
      
      ],
      category: "Full Stack",
      features: [
        "Real-time chat",
        "Media sharing",
        "User profiles",
        "News feed",
      ],
      github: "https://github.com/robsen123-fexil/cravechronicles",
    },
   
    {
      id: 6,
      title: "AI Health Assistance ",
      description:
        "AI-powered health monitoring app with wearable integration, symptom tracking, and telemedicine features.",
      image: "/health.png?height=300&width=400",
      technologies: ["Flutter", "Mongodb", "Express.js", "Cloud Functions"],
      category: "Mobile App",
      features: [
        "AI health insights",
        "Wearable sync",
        "Telemedicine",
        "Emergency alerts",
      ],
      github: "https://github.com/robsen123-fexil/ai-health-assistant-app",
      demo: "https://www.figma.com/design/r3IT8j6iVCH6FCx2KOw9aE/ai-based-health-assistance?node-id=0-1&p=f&t=V7OKKdw8oaDxXj85-0",
    },
  ];

  const leetcodeStats = {
    totalSolved: 500,
    easy: 227,
    medium: 280,
    hard: 10,
    ranking: "Top 15%",

    
    rating: 1370,
  }

  const a2svAchievements = [
    {
      title: "Backend Development ",
      description:
        "Collaborated with a team to design and develop scalable backend services with A2SV Team, ensuring high performance, reliability, and smooth integration with frontend applications.",
      duration: "july 2025 - Present",
    },
    {
      title: "Mobile Development @ Mint",
      description:
        "Developed a cross-platform mobile application using Flutter in collaboration with a development team for the Ministry of Innovation and Technology.",
      duration: "Sep 2023 - Jan 2024",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Mobile App", "Backend", "Full Stack",]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Robsen Teshome
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("problem-solving")}
                className="hover:text-primary transition-colors"
              >
                Problem Solving
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("problem-solving")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Problem Solving
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            {/* <img
              src="/profile.jpg?height=10000&width=10000"
              alt="Robsen Teshome"
              className="w-80 h-80 rounded-full mx-auto mb-6 border-4 border-primary/20"
            /> */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Mobile Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Building exceptional mobile experiences with Flutter, powered by
              robust backend solutions and strong problem-solving skills
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="text-sm">
                <Trophy className="mr-1 h-3 w-3" />
                A2SV Trainee
              </Badge>

              <Badge variant="secondary" className="text-sm">
                <Code className="mr-1 h-3 w-3" />
                500+ Problems Solved
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <a href="/Robsen(Flutter).pdf" download>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-6 text-muted-foreground">
            <a
              href="https://github.com/robsen123-fexil"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/robsen-teshome-889926254/"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:robsenteshoma1@example.com"
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I'm a passionate Full-Stack Mobile Developer with expertise in
                Flutter and backend technologies. Currently a trainee at A2SV
                (Africa to Silicon Valley), where I'm honing my skills in
                competitive programming and software engineering best practices.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                My journey combines mobile app development with strong backend
                engineering and algorithmic problem-solving. I believe in
                creating scalable, user-centric solutions that make a real
                impact. My experience spans from building cross-platform mobile
                apps to designing robust backend architectures.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Apps Built
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Problems Solved
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="mr-2 h-5 w-5 text-primary" />
                    Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Specialized in Flutter Development, with focus on
                    performance, user experience, and cross-platform
                    compatibility.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Server className="mr-2 h-5 w-5 text-primary" />
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Building scalable APIs and backend services using Go,
                    FastAPI, and cloud technologies with microservices
                    architecture.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-primary" />
                    Problem Solving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Strong algorithmic thinking with 500+ LeetCode problems
                    solved and active participation in competitive programming.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-5 w-5 text-primary" />
                  Mobile Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5 text-primary" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-primary" />
                  Problem Solving
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.problemSolving.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5 text-primary" />
                  Tools & Others
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg"></div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Design
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section id="problem-solving" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Problem Solving & Achievements
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LeetCode Stats */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Code className="mr-2 h-6 w-6 text-primary" />
                LeetCode Statistics
              </h3>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Coding Progress</span>
                    <Badge variant="secondary">{leetcodeStats.ranking}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        {leetcodeStats.totalSolved}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Solved
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        {leetcodeStats.rating}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Contest Rating
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Easy Problems</span>
                        <span className="text-sm text-green-600">
                          {leetcodeStats.easy}
                        </span>
                      </div>
                      <Progress
                        value={(leetcodeStats.easy / 300) * 100}
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Medium Problems</span>
                        <span className="text-sm text-yellow-600">
                          {leetcodeStats.medium}
                        </span>
                      </div>
                      <Progress
                        value={(leetcodeStats.medium / 400) * 100}
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Hard Problems</span>
                        <span className="text-sm text-red-600">
                          {leetcodeStats.hard}
                        </span>
                      </div>
                      <Progress
                        value={(leetcodeStats.hard / 200) * 100}
                        className="h-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t"></div>
                </CardContent>
              </Card>
            </div>

            {/* A2SV Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="mr-2 h-6 w-6 text-primary" />
                Development Experience
              </h3>
              <div className="space-y-6">
                {a2svAchievements.map((achievement, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {achievement.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3">{achievement.description}</p>
                      <div className="bg-primary/10 p-3 rounded-lg"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Highlight
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Core Problem Solving Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cpu className="mr-2 h-5 w-5 text-primary" />
                    Algorithms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Expert in sorting, searching, graph algorithms, dynamic
                    programming, and greedy approaches.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      DP
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Graphs
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Trees
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Greedy
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2 h-5 w-5 text-primary" />
                    Data Structures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Proficient with arrays, linked lists, stacks, queues, trees,
                    heaps, and hash tables.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Arrays
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Trees
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Heaps
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Hash Maps
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-primary" />
                    System Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Understanding of scalable system architecture, database
                    design, and distributed systems.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Scalability
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Microservices
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Caching
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Load Balancing
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Let's Build Something Amazing
              </h3>
              <p className="text-lg mb-6 text-muted-foreground">
                I'm always excited about new opportunities and challenging
                projects. Whether you need a mobile app, backend solution, or
                help with algorithmic problems, let's discuss how we can work
                together to create innovative solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  <a
                    href="mailto:robsenteshoma1@gmail.com"
                    className="text-primary hover:underline"
                  >
                    robsenteshoma1@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="mr-3 h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/robsen123-fexil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://github.com/robsen123-fexil
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-3 h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/robsen-teshome-889926254/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://www.linkedin.com/in/robsen-teshome-889926254/
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Code className="mr-3 h-5 w-5 text-primary" />
                  <a
                    href="https://leetcode.com/u/robsen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://leetcode.com/u/robsen/
                  </a>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Trophy className="mr-2 h-4 w-4" />
                  Currently Available For
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Mobile App Development Projects</li>
                  <li>• Backend API Development</li>
                  <li>• Technical Mentoring & Code Reviews</li>
               
                </ul>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                      >
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Type
                    </label>
                    <Input
                      id="projectType"
                      placeholder="Mobile App, Backend API, Consultation, etc."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or how I can help..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Robsen Teshome. Built with Next.js and Tailwind CSS.
            <span className="ml-2">🚀 From Africa to Silicon Valley</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
