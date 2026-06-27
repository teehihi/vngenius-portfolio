import {
  ArrowUpRight,
  Bot,
  Briefcase,
  Code2,
  Cpu,
  FileDown,
  FolderGit2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Puzzle,
  Rocket,
  ShieldCheck,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import {
  ClickEffects,
  ElectricBorder,
  FluidGradientText,
  InteractiveGrid,
  MouseGlow,
  ScrollProgress,
  ShimmerText,
  ThemeToggle,
} from "./components/effects";
import { Button, Card, SectionHeader, Stat } from "./components/ui";

const members = [
  {
    name: "Nguyen Nhat Thien",
    alias: "Tee",
    role: "Full-stack Developer / AI Evaluator",
    tagline: "Engineering products people love to use.",
    school: "HCMUTE - Information Technology",
    github: "https://github.com/teehihi",
    linkedin: "https://www.linkedin.com/in/tee21/",
    email: "teeforwork21@gmail.com",
    focusAreas: ["Full-stack Development", "Web Gameplay", "REST APIs", "AI Evaluation"],
    skills: ["React", "Vite", "NodeJS", "REST API", "MySQL", "MongoDB", "React Native", "AI evaluation"],
    featuredProjects: [
      ["APEX CHAOS", "Implemented React/Vite gameplay systems."],
      ["XeNow", "Built a full-stack booking platform."],
      ["UniQuizz", "Shipped reusable quiz UI architecture."],
    ],
  },
  {
    name: "Le Quoc Khanh",
    alias: "Khanh",
    role: "Game Designer / Gameplay Developer",
    tagline: "Crafting gameplay worth mastering.",
    school: "UEH - Event and Entertainment Services Management",
    github: "https://github.com/Khanh-glitch",
    linkedin: "https://www.linkedin.com/in/quockhanh-le/",
    email: "mencan308@gmail.com",
    focusAreas: ["Gameplay Systems", "Champion Kits", "Combat Balance", "Playtesting"],
    skills: ["Game design", "Autobattler mechanics", "Champion kits", "Game balance", "GDD writing", "Playtesting", "Canvas", "OpenAI Codex"],
    featuredProjects: [
      ["APEX CHAOS", "Designed combat rules and champion kits."],
      ["Game Balance", "Optimized targeting, states, and counterplay."],
      ["QA Systems", "Reviewed edge cases for consistent gameplay."],
    ],
  },
  {
    name: "Pham Van Hau",
    alias: "Hau",
    role: "Backend / Game Systems Developer",
    tagline: "Strong systems make great experiences.",
    school: "HCMUTE - Information Technology",
    github: "https://github.com/vanhau123w-collab",
    linkedin: "https://www.linkedin.com/in/v%C4%83n-h%E1%BA%ADu-ph%E1%BA%A1m-83224b1bb",
    focusAreas: ["Backend Services", "Gameplay Logic", "Database Design", "Algorithm Visualization"],
    skills: ["Java", "Spring Boot", "NodeJS", "ReactJS", "MySQL", "WebSocket", "MongoDB", "Pygame"],
    featuredProjects: [
      ["UniQuizz", "Integrated AI learning platform services."],
      ["Maze Runner", "Built pathfinding visualization gameplay."],
      ["E-commerce System", "Engineered Spring Boot commerce flows."],
    ],
  },
  {
    name: "Truong Cong Anh",
    alias: "Cong Anh",
    role: "Prototype Developer",
    tagline: "Prototype first. Perfect later.",
    school: "HCMUTE",
    github: "https://github.com/coqanklazy",
    focusAreas: ["Rapid Prototyping", "Build Testing", "Game Jam Execution", "Delivery Support"],
    skills: ["Development", "Prototype support", "Testing", "Git", "Game jam execution"],
    featuredProjects: [
      ["Prompt-to-Play", "Supports sprint execution and demo packaging."],
      ["Prototype Builds", "Tests playable loops and delivery paths."],
      ["Team Tooling", "Maintains practical Git-based workflows."],
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
    tags: ["React", "Vite", "Canvas", "Co-developed", "Combat balance"],
    description:
      "A co-developed browser autobattler by Tee and QK/Khanh, with combat rules, eight distinct champions, fighter selection UI, animated asset sets, and a production loop shaped through GDDs, Codex specs, playtesting, and balance tuning.",
    links: [
      { label: "Live demo", href: "https://apexchaos.netlify.app/" },
      { label: "GitHub", href: "https://github.com/Khanh-glitch/APEX-CHAOS" },
    ],
  },
  {
    title: "UniQuizz",
    subtitle: "Supporting project / battle quiz + Qbit wardrobe",
    variant: "uniquizz",
    tags: ["React", "NodeJS", "MongoDB", "Socket room", "Avatar system"],
    description:
      "A quiz platform with multiplayer rooms, answer flow, generated learning content, and a polished Qbit dressing system for the battle room.",
    links: [
      { label: "Live demo", href: "https://uniquizzdom.vercel.app/" },
      { label: "Frontend", href: "https://github.com/teehihi/UniQuizzFE" },
    ],
  },
  {
    title: "XeNow",
    subtitle: "Supporting project / full-stack delivery",
    variant: "xenow",
    tags: ["React", "NodeJS", "REST API", "MySQL", "Booking flow"],
    description:
      "A full-stack vehicle rental product showing auth, search, booking, upload, API integration, loading/error states, data models, and deployment discipline.",
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
    body: "Vite/React-friendly delivery for a fast playable review link.",
  },
  {
    icon: ShieldCheck,
    title: "Testing mindset",
    body: "Check edge cases, generated outputs, and player confusion before the pitch.",
  },
];

const navItems = [
  ["about", "About"],
  ["team", "Team"],
  ["showcase", "Showcase"],
  ["loadout", "Loadout"],
  ["challenge", "Challenge"],
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

function TeamLogo() {
  return (
    <div className="team-logo">
      <img src="/team-logo-vngenius-v3.png" alt="VNGenius team logo" />
    </div>
  );
}

function MemberCard({ member }) {
  return (
    <Card className="profile-card">
      <div className="profile-card-head">
        <ProfileAvatar member={member} />
        <div className="min-w-0">
          <h3>{member.name}</h3>
          <p className="profile-role">
            <Briefcase className="h-3.5 w-3.5" />
            {member.role}
          </p>
        </div>
      </div>

      <p className="profile-tagline">{member.tagline}</p>

      <div className="profile-line">
        <GraduationCap className="h-4 w-4" />
        <span>{member.school}</span>
      </div>

      <div className="profile-group">
        <h4>
          <Target className="h-4 w-4" />
          Focus Areas
        </h4>
        <ul className="focus-list">
          {member.focusAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="profile-group">
        <h4>
          <Cpu className="h-4 w-4" />
          Expertise
        </h4>
        <div className="chip-list">
          {member.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="profile-group">
        <h4>
          <FolderGit2 className="h-4 w-4" />
          Featured Projects
        </h4>
        <div className="note-list project-note-list">
          {member.featuredProjects.map(([title, body]) => (
            <p key={title}>
              <strong>{title}</strong>
              <span>{body}</span>
            </p>
          ))}
        </div>
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
  const hasVisual = Boolean(project.variant);

  return (
    <Card className={`project-card ${hasVisual ? "visual-project" : ""} ${project.featured ? "featured-project" : ""}`}>
      {hasVisual ? (
        <ElectricBorder
          color={project.variant === "apex" ? "#ec4899" : project.variant === "xenow" ? "#38bdf8" : "#22c55e"}
          borderRadius={12}
          className="project-visual-border"
        >
          <ProjectVisual variant={project.variant} />
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

function ProjectVisual({ variant }) {
  if (variant === "apex") return <ApexVisual />;
  if (variant === "uniquizz") return <UniQuizzVisual />;
  if (variant === "xenow") return <XeNowVisual />;
  return <MazeVisual />;
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

function Qbit({ className = "", shirt = "shirt-aiute.svg", pants = "pants-cargo.svg", hat = "hat-frog.svg" }) {
  return (
    <div className={`qbit ${className}`} aria-hidden="true">
      <img src="/showcase/uniquizz/body.svg" alt="" className="qbit-layer qbit-body" />
      <img src={`/showcase/uniquizz/${pants}`} alt="" className="qbit-layer qbit-pants" />
      <img src="/showcase/uniquizz/shoes-jordans.svg" alt="" className="qbit-layer qbit-shoes" />
      <img src={`/showcase/uniquizz/${shirt}`} alt="" className="qbit-layer qbit-shirt" />
      <img src="/showcase/uniquizz/head.svg" alt="" className="qbit-layer qbit-head" />
      <img src={`/showcase/uniquizz/${hat}`} alt="" className="qbit-layer qbit-hat" />
    </div>
  );
}

function UniQuizzVisual() {
  const closetItems = [
    "shirt-mu.svg",
    "shirt-ueh.svg",
    "shirt-aiute.svg",
    "shirt-asn.svg",
    "shirt-brazil.svg",
    "shirt-aohub.svg",
    "pants-dino.svg",
    "pants-cargo.svg",
    "hat-frog.svg",
    "shoes-jordans.svg",
  ];

  return (
    <div className="uniquizz-visual">
      <div className="uni-stage">
        <img src="/showcase/uniquizz/bgBuc.png" alt="" className="uni-podium" />
        <Qbit className="main-qbit" />
        <Qbit className="side-qbit left" shirt="shirt-mu.svg" />
        <Qbit className="side-qbit right" shirt="shirt-ueh.svg" />
        <div className="uni-room-code">ROOM VNG-26</div>
      </div>
      <div className="uni-closet">
        <div className="uni-tabs">
          <span>Set</span>
          <span className="active">Áo</span>
          <span>Quần</span>
          <span>Mũ</span>
        </div>
        <div className="uni-items">
          {closetItems.map((item) => (
            <span key={item}>
              <img src={`/showcase/uniquizz/${item}`} alt="" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ApexVisual() {
  const demos = [
    [
      "Combat in Action",
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXUzeHpvcmRwbHFrampuaDdhMWlocjRtc3kxcG1hMWp5MWNud21leCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xGJhfJEIVrRScFvCUF/giphy.gif",
    ],
    ["Entering the Arena", "https://files.catbox.moe/m1bf90.gif"],
    [
      "Champion Select",
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGdnMHkxNjZ0MHE0bHZ3Z3Vobnhvdzc1MTl3YTJpNW1yYzhiNzNociZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OgLWze8SxRF6xgKJFV/giphy.gif",
    ],
  ];

  return (
    <div className="apex-visual">
      <div className="apex-select-main">
        <img src={demos[0][1]} alt="Apex Chaos gameplay demo" loading="lazy" />
        <span>{demos[0][0]}</span>
      </div>
      <div className="apex-demo-strip">
        {demos.slice(1).map(([label, src]) => (
          <div key={label} className="apex-demo-tile">
            <img src={src} alt={`Apex Chaos ${label} demo`} loading="lazy" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function XeNowVisual() {
  const screenshots = [
    ["Booking flow", "https://files.catbox.moe/oe3tyt.png"],
    ["Vehicle details", "https://files.catbox.moe/u8enb0.png"],
  ];

  return (
    <div className="xenow-visual">
      <div className="xenow-demo-main">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGM5M2Z1YmM0eHVpMXdmaW9zMzJwYXN5YW5uNWFkOGQwZWZ3dHY3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iU8AikdvPGYcfZ5ic2/giphy.gif"
          alt="XeNow booking flow demo"
          loading="lazy"
        />
        <span>Booking flow</span>
      </div>
      <div className="xenow-shot-strip">
        {screenshots.map(([label, src]) => (
          <div key={label} className="xenow-shot">
            <img src={src} alt={`XeNow ${label}`} loading="lazy" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <main className="page-grid-shell">
      <ScrollProgress />
      <InteractiveGrid
        clickInteraction
        cursorTrail
        trailMode="hover"
        trailColor="#0073ff"
        hoverColor="#0073ff"
        gridSize={58}
        radius={310}
        repulsionStrength={-0.66}
        motionSpeed={0.68}
      />
      <MouseGlow />
      <ClickEffects />
      <nav className="section-nav" aria-label="Portfolio navigation">
        <a href="#about" className="nav-signature" aria-label="Back to top">
          VN
        </a>
        <div className="nav-links">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#team" aria-label="Team profiles">
            <FileDown className="h-5 w-5" />
          </a>
          <a href="https://github.com/teehihi/vngenius-portfolio" target="_blank" rel="noreferrer" aria-label="Reference GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </nav>

      <div className="page-reveal mx-auto flex min-h-screen w-full max-w-5xl flex-col px-3 py-4 text-sm leading-loose sm:px-6 lg:px-8">
        <section id="about" className="scroll-mt-24">
          <div className="hero-title">
            <FluidGradientText text="VNGenius" />
          </div>

          <div className="intro-grid">
            <ElectricBorder color="#f97316" speed={0.75} chaos={0.08} borderRadius={999} className="hero-orbit-card">
              <TeamLogo />
            </ElectricBorder>
            <div className="intro-copy">
              <p className="eyebrow">Software x Game Development Team</p>
              <h1>
                We build software, games, and <ShimmerText>AI-powered</ShimmerText> experiences.
              </h1>
              <p>
                VNGenius is a multidisciplinary student team specializing in software development,
                game development, AI integration, rapid prototyping and interactive product
                development.
              </p>
              <div className="stat-strip">
                <Stat value="4" label="Core Members" />
                <Stat value="6+" label="Projects" />
                <Stat value="SW" label="Software Team" />
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
            title="Core Team"
            description="A cross-functional group combining engineering, game design, backend systems, QA, and rapid prototyping across shared projects."
          />
          <div className="profile-grid">
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
          <div className="team-summary-strip">
            <Stat value="4" label="Core Members" />
            <Stat value="6+" label="Projects Built" />
            <Stat value="Game x AI" label="Focus" />
            <Stat value="Rapid" label="Prototyping" />
          </div>
        </section>

        <section id="showcase" className="content-section">
          <SectionHeader
            eyebrow="Game showcase"
            title="Featured Projects"
            description="Selected work across playable systems, product-level interfaces, AI-assisted learning, and interactive browser experiences."
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

        <section id="challenge" className="content-section">
          <SectionHeader
            eyebrow="Current Challenge"
            title="Prompt-to-Play 2026"
            description="VNGGames x OpenAI"
          />
          <Card className="strength-card">
            <Trophy className="h-5 w-5" />
            <h3>24-hour AI puzzle game challenge</h3>
            <p>
              We're currently participating in Prompt-to-Play 2026, building an AI-powered puzzle
              game within a 24-hour challenge.
            </p>
          </Card>
        </section>

        <section className="footer-note">
          <p>Built with care by VNGenius.</p>
          <p>Public links are included; project context is marked transparently.</p>
        </section>
      </div>
    </main>
  );
}

export default App;
