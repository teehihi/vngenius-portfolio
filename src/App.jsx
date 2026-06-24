import {
  ArrowUpRight,
  Blocks,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Play,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
  Users,
} from "lucide-react";
import { Badge, Button, Card, SectionHeader, Stat } from "./components/ui";

const members = [
  {
    name: "Nguyen Nhat Thien",
    alias: "Tee",
    role: "Captain / Full-stack Dev",
    lane: "Web gameplay, UI flow, API integration",
    school: "HCMUTE - Information Technology",
    status: "CV ready",
    accent: "orange",
    github: "https://github.com/teehihi",
    linkedin: "https://www.linkedin.com/in/tee21/",
    email: "teeforwork21@gmail.com",
    summary:
      "Builds React/Vite products, REST API flows, reusable UI, and mobile prototypes. Also has AI evaluation experience, useful for keeping prompt outputs consistent during the jam.",
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
    role: "Puzzle QA / Logic Support",
    lane: "AI output checking, puzzle consistency, math reasoning",
    school: "UEH student",
    status: "CV draft",
    accent: "yellow",
    github: "https://github.com/Khanh-glitch",
    linkedin: "https://www.linkedin.com/in/quockhanh-le/",
    summary:
      "UEH student with an AI/data quality direction. Until the official CV is finalized, this page only uses public links and conservative role positioning.",
    skills: ["AI QA", "Data annotation", "Model evaluation", "Mathematics", "Prompt review", "Puzzle checking"],
    evidence: [
      "Draft CV references AI quality analysis and NLP/LLM data review.",
      "Good fit for testing generated hints, checking edge cases, and validating puzzle clarity.",
      "Public GitHub and LinkedIn included for registration verification.",
    ],
  },
  {
    name: "Pham Van Hau",
    alias: "Hau",
    role: "Backend / Game Systems Dev",
    lane: "Gameplay logic, services, algorithm visualization",
    school: "HCMUTE - Information Technology",
    status: "CV screenshot",
    accent: "green",
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
    role: "Prototype Dev / Runner",
    lane: "Implementation support, testing, build packaging",
    school: "HCMUTE",
    status: "CV pending",
    accent: "blue",
    github: "https://github.com/coqanklazy",
    summary:
      "UTE teammate with GitHub profile available. Detailed CV will be added later, so this portfolio keeps the role practical and update-friendly.",
    skills: ["Development", "Prototype support", "Testing", "Git", "Game jam execution"],
    evidence: [
      "GitHub profile added for public verification.",
      "Planned role: implement small gameplay tasks, test builds, and help package the final demo.",
      "Profile section is ready to be expanded when the official CV arrives.",
    ],
  },
];

const projects = [
  {
    title: "UniQuizz",
    subtitle: "Quiz flow + AI-generated study content",
    tags: ["React", "NodeJS", "MongoDB", "AI content"],
    description:
      "Relevant to Prompt to Play because it already handles question flow, answer states, generated content, and user-facing learning loops.",
    links: [
      { label: "Live demo", href: "https://uniquizzdom.vercel.app/" },
      { label: "Frontend", href: "https://github.com/teehihi/UniQuizzFE" },
    ],
  },
  {
    title: "Maze Runner",
    subtitle: "Algorithm visualization game",
    tags: ["Pygame", "Pathfinding", "Heuristics"],
    description:
      "Directly useful for puzzle mechanics: pathfinding, board state, search heuristics, and visual explanation of logic.",
    links: [{ label: "GitHub", href: "https://github.com/teehihi/ChayNgayDi_MazeHunter" }],
  },
  {
    title: "XeNow",
    subtitle: "Full-stack booking platform",
    tags: ["React", "NodeJS", "REST API", "MySQL"],
    description:
      "Shows the team can build a complete product surface: auth, API integration, loading/error states, data models, and deployment.",
    links: [
      { label: "Live demo", href: "https://xenow.vercel.app/" },
      { label: "GitHub", href: "https://github.com/teehihi/xe-now-ui" },
    ],
  },
  {
    title: "DacSanViet",
    subtitle: "E-commerce system",
    tags: ["Spring Boot", "MySQL", "WebSocket"],
    description:
      "Backend-heavy project evidence from Hau, useful for service structure, realtime updates, and disciplined feature delivery.",
    links: [{ label: "GitHub", href: "https://github.com/vanhau123w-collab/DacSanViet" }],
  },
];

const loadout = [
  {
    icon: Puzzle,
    title: "Puzzle-first scope",
    body: "A board, a clear rule, a fail state, a win state, and one memorable twist. No oversized fantasy scope.",
  },
  {
    icon: Sparkles,
    title: "AI as game mechanic",
    body: "Use AI for hints, level variation, puzzle explanation, or NPC feedback. Not decoration, not buzzword filler.",
  },
  {
    icon: Code2,
    title: "Web build target",
    body: "Browser-playable demo for fast judging, backup local build, and simple deployment.",
  },
  {
    icon: ShieldCheck,
    title: "QA loop",
    body: "Test generated outputs, edge cases, and player confusion before presentation.",
  },
];

const timeline = [
  ["00-03", "Pick mechanic", "Define the puzzle rule, player goal, and AI role."],
  ["03-10", "Build loop", "Playable board, input, scoring, win/fail conditions."],
  ["10-16", "Add AI", "Hint, generated challenge, or explanation with guardrails."],
  ["16-21", "Polish", "Tutorial, visual feedback, audio cues, mobile-friendly UI."],
  ["21-24", "Submit", "Pitch deck, backup build, final bug pass."],
];

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="game-link">
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}

function MemberCard({ member, index }) {
  return (
    <Card className={`character-card accent-${member.accent}`}>
      <div className="character-topline">
        <span className="slot">P{index + 1}</span>
        <Badge tone={member.accent}>{member.status}</Badge>
      </div>

      <div className="character-id">
        <div className={`avatar avatar-${member.accent}`} aria-hidden="true">
          {member.alias.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="alias">{member.alias}</p>
          <h3>{member.name}</h3>
          <p className="role">{member.role}</p>
        </div>
      </div>

      <div className="lane">
        <Swords className="h-4 w-4" />
        {member.lane}
      </div>

      <div className="school">
        <GraduationCap className="h-4 w-4" />
        {member.school}
      </div>

      <p className="summary">{member.summary}</p>

      <div className="skill-grid">
        {member.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="evidence-list">
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
          <a href={`mailto:${member.email}`} className="game-link muted-link">
            <Mail className="h-4 w-4" />
            Email
          </a>
        ) : null}
      </div>
    </Card>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="quest-card">
      <div className="quest-header">
        <div>
          <p>{project.subtitle}</p>
          <h3>{project.title}</h3>
        </div>
        <Trophy className="h-6 w-6" />
      </div>
      <p className="quest-copy">{project.description}</p>
      <div className="skill-grid compact">
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

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#160f10] text-[#fff7e8]">
      <nav className="game-nav">
        <a href="#top" className="brand-mark">
          <span className="brand-icon">
            <Blocks className="h-5 w-5" />
          </span>
          <span>
            <strong>Prompt Party</strong>
            <small>Team portfolio / Puzzle Game Jam</small>
          </span>
        </a>
        <div className="nav-links">
          {["team", "proof", "loadout", "plan"].map((item) => (
            <Button key={item} as="a" variant="ghost" href={`#${item}`}>
              {item}
            </Button>
          ))}
        </div>
        <Button as="a" href="#contact" variant="outline">
          links
        </Button>
      </nav>

      <section id="top" className="hero-stage">
        <div className="puzzle-sky" />
        <div className="hero-inner">
          <div className="hero-copy">
            <Badge tone="orange" className="mb-5">
              Prompt to Play 2026 / Build - Play - Inspire
            </Badge>
            <h1>
              Four builders.
              <br />
              One playable puzzle.
              <br />
              Twenty-four hours.
            </h1>
            <p>
              This is not a generic AI portfolio. It is a compact game-jam dossier for a team
              preparing to build a browser-playable puzzle prototype with one clear AI-powered
              mechanic.
            </p>
            <div className="hero-actions">
              <Button as="a" href="#team">
                <Users className="h-4 w-4" />
                Character select
              </Button>
              <Button as="a" href="#proof" variant="outline">
                <Play className="h-4 w-4" />
                Project proof
              </Button>
            </div>
          </div>

          <Card className="game-cartridge">
            <div className="cartridge-label">
              <p>Registration Portfolio</p>
              <h2>Prompt Party</h2>
              <span>AI-assisted puzzle prototype squad</span>
            </div>
            <div className="mini-board" aria-hidden="true">
              {Array.from({ length: 36 }).map((_, i) => (
                <span key={i} className={i % 7 === 0 ? "hot" : i % 5 === 0 ? "cool" : ""} />
              ))}
            </div>
            <div className="stats-row">
              <Stat value="4" label="players" />
              <Stat value="24h" label="jam run" />
              <Stat value="Web" label="demo" />
            </div>
          </Card>
        </div>
      </section>

      <section id="team" className="page-section">
        <SectionHeader
          eyebrow="Character Select"
          title="A team roster that matches the contest."
          description="Each profile is framed by what they can contribute to a puzzle game prototype, not by generic resume noise."
        />
        <div className="character-grid">
          {members.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>

      <section id="proof" className="page-section band-section">
        <SectionHeader
          eyebrow="Quest Log"
          title="Relevant project evidence."
          description="The selected projects show quiz flows, algorithmic game thinking, full-stack delivery, and backend systems."
        />
        <div className="quest-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="loadout" className="page-section">
        <SectionHeader
          eyebrow="Loadout"
          title="How we would approach the game."
          description="The safest contest strategy is a small, polished, understandable puzzle loop with AI in a visible role."
        />
        <div className="loadout-grid">
          {loadout.map((item) => (
            <Card key={item.title} className="loadout-card">
              <item.icon className="h-7 w-7" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="plan" className="page-section band-section">
        <div className="plan-layout">
          <div>
            <Badge tone="yellow" className="mb-5">
              24h runbook
            </Badge>
            <h2>Small scope, real gameplay, clean demo.</h2>
            <p>
              The target is not to impress with a giant feature list. The target is to make judges
              understand the rule, feel the loop, and see why AI improves that loop.
            </p>
          </div>
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
        </div>
      </section>

      <section id="contact" className="page-section">
        <Card className="final-panel">
          <div>
            <Badge tone="green" className="mb-5">
              Portfolio link ready
            </Badge>
            <h2>Use this page for the team portfolio field.</h2>
            <p>
              Two CVs are still pending, so the page marks them clearly. The design and content can
              absorb new CV details without changing the overall presentation.
            </p>
          </div>
          <div className="final-actions">
            <Button as="a" href="https://github.com/teehihi" variant="outline">
              <Github className="h-4 w-4" />
              Tee GitHub
            </Button>
            <Button as="a" href="https://www.linkedin.com/in/tee21/" variant="outline">
              <Linkedin className="h-4 w-4" />
              Tee LinkedIn
            </Button>
            <Button as="a" href="mailto:teeforwork21@gmail.com">
              <Rocket className="h-4 w-4" />
              Contact captain
            </Button>
          </div>
        </Card>
      </section>

      <footer className="game-footer">
        <p>Prompt Party - team portfolio for Prompt to Play 2026</p>
        <p>Built as a game-jam dossier, not a generic AI landing page.</p>
      </footer>
    </main>
  );
}

export default App;
