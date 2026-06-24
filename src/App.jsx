import {
  ArrowUpRight,
  Bot,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { CircularStamp, ElectricBorder, MouseGlow, ScrollProgress, ShimmerText } from "./components/effects";
import { Badge, Button, Card, SectionHeader, Stat } from "./components/ui";

const members = [
  {
    name: "Nguyen Nhat Thien",
    alias: "Tee",
    role: "Full-stack Developer / AI Evaluator",
    focus: "Web gameplay, UI flow, API integration",
    school: "HCMUTE - Information Technology",
    status: "CV ready",
    github: "https://github.com/teehihi",
    linkedin: "https://www.linkedin.com/in/tee21/",
    email: "teeforwork21@gmail.com",
    summary:
      "Builds React/Vite products, REST API flows, reusable UI, and mobile prototypes. AI evaluation experience helps the team keep generated outputs consistent.",
    skills: ["React", "Vite", "NodeJS", "REST API", "MySQL", "MongoDB", "React Native", "AI evaluation"],
    evidence: [
      "XeNow - full-stack vehicle rental platform with booking, auth, upload, and responsive UI.",
      "UniQuizz - quiz web app with reusable components and game-like answer flow.",
      "Outlier AI Trainer / Evaluator - response ranking, prompt rewriting, QA workflows.",
    ],
  },
  {
    name: "Le Quoc Khanh",
    alias: "Khanh",
    role: "Game Designer / Gameplay Developer",
    focus: "Combat systems, champion kits, balance, playtesting",
    school: "UEH - Event and Entertainment Services Management",
    status: "CV ready",
    github: "https://github.com/Khanh-glitch",
    linkedin: "https://www.linkedin.com/in/quockhanh-le/",
    email: "mencan308@gmail.com",
    summary:
      "Game designer and gameplay developer behind APEX CHAOS, a playable 1v1 browser autobattler built from concept to deployment with an AI-assisted production workflow.",
    skills: ["Game design", "Autobattler mechanics", "Champion kits", "Game balance", "GDD writing", "Playtesting", "Canvas", "OpenAI Codex"],
    evidence: [
      "APEX CHAOS - sole creator, game designer, and gameplay developer in an intensive two-week sprint.",
      "Designed core combat rules, eight champions, targeting, states, counterplay, and balance constraints.",
      "QA background from reviewing 10,000+ data samples helps catch logic, consistency, and edge-case defects.",
    ],
  },
  {
    name: "Pham Van Hau",
    alias: "Hau",
    role: "Backend / Game Systems Developer",
    focus: "Gameplay logic, services, algorithm visualization",
    school: "HCMUTE - Information Technology",
    status: "CV screenshot",
    github: "https://github.com/vanhau123w-collab",
    linkedin: "https://www.linkedin.com/in/v%C4%83n-h%E1%BA%ADu-ph%E1%BA%A1m-83224b1bb",
    summary:
      "Software Engineering student with full-stack foundations across Spring Boot, NodeJS, ReactJS, databases, and practical AI integration.",
    skills: ["Java", "Spring Boot", "NodeJS", "ReactJS", "MySQL", "WebSocket", "MongoDB", "Pygame"],
    evidence: [
      "Vietnamese Specialties E-commerce - Spring Boot, MySQL, WebSocket, Thymeleaf, Bootstrap.",
      "UniQuizz AI learning platform - ReactJS, NodeJS, MongoDB, Google Gemini integration.",
      "Maze Runner algorithm visualization game - pathfinding and interactive learning.",
    ],
  },
  {
    name: "Truong Cong Anh",
    alias: "Cong Anh",
    role: "Prototype Developer",
    focus: "Implementation support, testing, build packaging",
    school: "HCMUTE",
    status: "CV pending",
    github: "https://github.com/coqanklazy",
    summary:
      "UTE teammate with GitHub profile available. Detailed CV will be added later, so this section stays practical and update-friendly.",
    skills: ["Development", "Prototype support", "Testing", "Git", "Game jam execution"],
    evidence: [
      "GitHub profile added for public verification.",
      "Planned role: implement small gameplay tasks, test builds, and help package the final demo.",
      "Profile section is ready to expand when the official CV arrives.",
    ],
  },
];

const projects = [
  {
    title: "ChayNgayDi MazeHunter",
    subtitle: "Core game project / pathfinding puzzle",
    variant: "maze",
    featured: true,
    tags: ["Pygame", "Pathfinding", "Pixel art", "Maze logic"],
    description:
      "A pixel-art maze game with pathfinding logic, animated characters, collectible objectives, and multiple environment styles. This is the clearest proof of puzzle/gameplay thinking.",
    links: [{ label: "GitHub", href: "https://github.com/teehihi/ChayNgayDi_MazeHunter" }],
  },
  {
    title: "APEX-CHAOS",
    subtitle: "Core game project / 1v1 autobattler",
    variant: "apex",
    featured: true,
    tags: ["React", "Vite", "Canvas", "GDD", "Combat balance"],
    description:
      "Khanh's playable browser prototype with combat rules, eight distinct champions, fighter selection UI, animated asset sets, and a production loop shaped through GDDs, Codex specs, playtesting, and balance tuning.",
    links: [{ label: "GitHub", href: "https://github.com/Khanh-glitch/APEX-CHAOS" }],
  },
  {
    title: "UniQuizz",
    subtitle: "Supporting project / quiz flow + generated content",
    tags: ["React", "NodeJS", "MongoDB", "AI content"],
    description:
      "Useful support evidence for question flow, answer states, generated content, and user-facing learning loops.",
    links: [
      { label: "Live demo", href: "https://uniquizzdom.vercel.app/" },
      { label: "Frontend", href: "https://github.com/teehihi/UniQuizzFE" },
    ],
  },
  {
    title: "XeNow",
    subtitle: "Supporting project / full-stack delivery",
    tags: ["React", "NodeJS", "REST API", "MySQL"],
    description:
      "Shows complete product delivery: auth, API integration, loading/error states, data models, and deployment.",
    links: [
      { label: "Live demo", href: "https://xenow.vercel.app/" },
      { label: "GitHub", href: "https://github.com/teehihi/xe-now-ui" },
    ],
  },
];

const strengths = [
  {
    icon: Puzzle,
    title: "Puzzle-first scope",
    body: "A clear rule, a readable board, win/fail states, and one memorable twist.",
  },
  {
    icon: Bot,
    title: "AI inside the loop",
    body: "Hints, explanation, level variation, or NPC feedback with QA guardrails.",
  },
  {
    icon: Code2,
    title: "Browser demo",
    body: "Vite/React/Phaser-friendly delivery for a fast playable review link.",
  },
  {
    icon: ShieldCheck,
    title: "Testing mindset",
    body: "Check edge cases, generated outputs, and player confusion before the pitch.",
  },
];

const timeline = [
  ["00-03", "Lock the mechanic", "Define one puzzle rule, player goal, and AI contribution."],
  ["03-10", "Build the loop", "Playable board, input model, scoring, fail/win states."],
  ["10-16", "Add AI carefully", "Hint, generated challenge, or explanation with clear fallback."],
  ["16-21", "Polish the feel", "Tutorial, feedback, rhythm, responsive layout, bug pass."],
  ["21-24", "Package and pitch", "Backup build, final demo path, short presentation."],
];

const navItems = [
  ["about", "About"],
  ["team", "Team"],
  ["showcase", "Showcase"],
  ["plan", "Plan"],
];

const mazeDemoGifs = [
  {
    label: "Hunter chase",
    src: "https://media4.giphy.com/media/AoliG8SixDEgCZe3Hi/giphy.gif",
  },
  {
    label: "Gameplay",
    src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGQ3NjU3dHplYWlxcTV1ZGw0aDYzdzUxZXVseHE3bGhweTVhMG1tdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CTF3ctDQNVei069FBQ/giphy.gif",
  },
  {
    label: "Quiz gate",
    src: "https://media4.giphy.com/media/r5CpASYBt3VdaFHhLM/giphy.gif",
  },
  {
    label: "AI path",
    src: "https://media3.giphy.com/media/1WuKxMJwcY1Gecpo08/giphy.gif",
  },
];

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-link">
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}

function ProfileAvatar({ member }) {
  return (
    <div className="profile-avatar" aria-hidden="true">
      <span>{member.alias.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}

function MemberCard({ member }) {
  return (
    <Card className="profile-card">
      <div className="profile-card-head">
        <ProfileAvatar member={member} />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3>{member.name}</h3>
            <Badge>{member.status}</Badge>
          </div>
          <p>{member.role}</p>
        </div>
      </div>

      <div className="profile-line">
        <GraduationCap className="h-4 w-4" />
        <span>{member.school}</span>
      </div>
      <div className="profile-line">
        <Sparkles className="h-4 w-4" />
        <span>{member.focus}</span>
      </div>

      <p className="card-copy">{member.summary}</p>

      <div className="chip-list">
        {member.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="note-list">
        {member.evidence.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div className="link-row">
        <ExternalLink href={member.github}>
          <Github className="h-4 w-4" />
          GitHub
        </ExternalLink>
        {member.linkedin ? (
          <ExternalLink href={member.linkedin}>
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </ExternalLink>
        ) : null}
        {member.email ? (
          <a href={`mailto:${member.email}`} className="inline-link muted">
            <Mail className="h-4 w-4" />
            Email
          </a>
        ) : null}
      </div>
    </Card>
  );
}

function ProjectCard({ project }) {
  const isFeatured = project.featured;

  return (
    <Card className={`project-card ${isFeatured ? "featured-project" : ""}`}>
      {isFeatured ? (
        <ElectricBorder color={project.variant === "apex" ? "#ec4899" : "#22c55e"} className="project-visual-border">
          {project.variant === "apex" ? <ApexVisual /> : <MazeVisual />}
        </ElectricBorder>
      ) : null}
      <div className="project-head">
        <div>
          <p>{project.subtitle}</p>
          <h3>{project.title}</h3>
        </div>
        <Trophy className="h-5 w-5" />
      </div>
      <p className="card-copy">{project.description}</p>
      <div className="chip-list">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="link-row">
        {project.links.map((link) => (
          <ExternalLink key={link.href} href={link.href}>
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </Card>
  );
}

function MazeVisual() {
  return (
    <div className="maze-visual">
      <div className="maze-demo-main">
        <img src={mazeDemoGifs[0].src} alt={`MazeHunter ${mazeDemoGifs[0].label} demo`} loading="lazy" />
        <span>{mazeDemoGifs[0].label}</span>
      </div>
      <div className="maze-demo-strip">
        {mazeDemoGifs.slice(1).map((gif) => (
          <div key={gif.label} className="maze-demo-tile">
            <img src={gif.src} alt={`MazeHunter ${gif.label} demo`} loading="lazy" />
            <span>{gif.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApexVisual() {
  return (
    <div className="apex-visual">
      <img src="/showcase/apex-menu-bg.webp" alt="" className="apex-bg" />
      <img src="/showcase/apex-logo.webp" alt="" className="apex-logo" />
      <img src="/showcase/apex-fighter-engineer.webp" alt="" className="apex-fighter engineer" />
      <img src="/showcase/apex-fighter-galaxy.webp" alt="" className="apex-fighter galaxy" />
      <img src="/showcase/apex-slash.webp" alt="" className="apex-slash" />
    </div>
  );
}

function App() {
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <main className="page-grid-shell">
      <ScrollProgress />
      <MouseGlow />
      <nav className="section-nav">
        {navItems.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>

      <div className="page-reveal mx-auto flex min-h-screen w-full max-w-5xl flex-col px-3 py-4 text-sm leading-loose sm:px-6 lg:px-8">
        <section id="about" className="scroll-mt-24">
          <div className="hero-title">
            <span>Prompt Party</span>
          </div>

          <div className="intro-grid">
            <ElectricBorder color="#f97316" className="hero-orbit-card">
              <div className="hero-avatar-stack">
                {members.map((member) => (
                  <ProfileAvatar key={member.name} member={member} />
                ))}
              </div>
              <CircularStamp text="PROMPT TO PLAY 2026" />
            </ElectricBorder>
            <div className="intro-copy">
              <p className="eyebrow">Prompt to Play 2026 / Puzzle Game Jam</p>
              <h1>
                A four-person team focused on <ShimmerText>building</ShimmerText> a playable puzzle
                prototype.
              </h1>
              <p>
                Portfolio page for registration: team evidence, public links, a clear 24-hour plan,
                and visual proof from the two core game projects: MazeHunter and APEX-CHAOS.
              </p>
              <div className="stat-strip">
                <Stat value="4" label="members" />
                <Stat value="24h" label="jam window" />
                <Stat value="Web" label="demo target" />
              </div>
              <div className="hero-actions">
                <Button as="a" href="#team">
                  <Users className="h-4 w-4" />
                  Team
                </Button>
                <Button as="a" href="#showcase" variant="outline">
                  <Rocket className="h-4 w-4" />
                  Showcase
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="content-section">
          <SectionHeader
            eyebrow="Team"
            title="Role-based roster"
            description="Each profile stays compact and evidence-driven, so the page feels like a portfolio rather than a pitch deck."
          />
          <div className="profile-grid">
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        <section id="showcase" className="content-section">
          <SectionHeader
            eyebrow="Game showcase"
            title="Core game projects first"
            description="The portfolio now leads with the two projects that actually prove game feel, visual direction, and playable systems."
          />
          <div className="project-grid featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="supporting-projects">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="loadout" className="content-section">
          <SectionHeader
            eyebrow="Build strategy"
            title="Small scope, visible AI, clean demo"
          />
          <div className="strength-grid">
            {strengths.map((item) => (
              <Card key={item.title} className="strength-card">
                <item.icon className="h-5 w-5" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="plan" className="content-section">
          <SectionHeader eyebrow="Runbook" title="24-hour build plan" />
          <Card className="timeline-card">
            {timeline.map(([time, title, body]) => (
              <div key={time} className="timeline-row">
                <span>{time}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </Card>
        </section>

        <section className="footer-note">
          <p>Built with care for Prompt to Play 2026.</p>
          <p>Public links are included; pending CVs are marked transparently.</p>
        </section>
      </div>
    </main>
  );
}

export default App;
