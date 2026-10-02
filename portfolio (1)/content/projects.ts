// EDIT THIS FILE to add / remove / update projects. UI reads only from here.
// To add a project: copy one object, change `slug`, fill the fields.
// Statuses are my best reading of what you told me. Confirm them.
export type Status = "Completed" | "In Progress" | "Exploring" | "Concept";
export type Project = {
  title: string; slug: string; shortDescription: string; longDescription: string;
  status: Status;
  implementationStage: { implemented: string[]; building: string[]; exploring: string[] };
  technologies: string[]; problem: string; approach: string; architecture: string;
  whatILearned: string[]; engineeringChallenges: string[];
  githubUrl: string; liveUrl: string; // "PLACEHOLDER" hides the link
  screenshots: { src: string; alt: string }[]; // files in /public, e.g. /shots/wallet-1.png
  featured: boolean; date?: string;
};
const P = "PLACEHOLDER";
const none = { implemented: [], building: [], exploring: [] };

export const projects: Project[] = [
  {
    title: "Digital Wallet backend", slug: "wallet",
    shortDescription: "Spring Boot wallet API, being grown step by step toward a production-minded financial backend.",
    longDescription: "A wallet system I started as a basic API and am progressively hardening: authentication first, then stronger domain modeling, transactional correctness and failure handling.",
    status: "In Progress",
    implementationStage: {
      implemented: ["User registration", "Login", "BCrypt password hashing", "Username / account identity rules", "Input validation", "Database persistence (PostgreSQL on Neon)"],
      building: ["JWT-based authentication"],
      exploring: ["Wallet / account modeling", "Transaction flows and ledger concepts", "Idempotency", "Payment / order flows", "Failure handling and data consistency"],
    },
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Neon", "REST", "JWT", "BCrypt"],
    problem: "A wallet looks simple until two requests race, a call is retried or a step fails halfway. I want to understand what the system must guarantee, not only make the endpoints respond.",
    approach: "Start with identity and authentication, then model accounts and transactions, then deal with correctness and failure explicitly.",
    architecture: "Spring Boot REST API persisting to PostgreSQL. Add an architecture diagram here once the transaction model settles.",
    whatILearned: ["Why authentication has several layers: credentials, hashing, tokens, and what each protects.", "Identity rules (usernames, accounts) need deciding early because they spread everywhere."],
    engineeringChallenges: ["Designing money movement so it stays consistent under retries and failures (not yet implemented)."],
    githubUrl: P, liveUrl: P, screenshots: [], featured: true,
  },
  {
    title: "javaarch: Java through real bugs", slug: "javaarch",
    shortDescription: "A repository for learning Java fundamentals through production-style bugs and exercises.",
    longDescription: "Instead of theory-only examples, each topic is built around a bug that really happens, so the fundamentals stick because I've seen them break things. This is a learning record, not a product.",
    status: "In Progress",
    implementationStage: {
      implemented: [],
      building: ["References and aliasing", "Defensive copying", "equals / hashCode", "String pool", "Mutable HashSet keys", "Boxing / unboxing", "NullPointerException", "Object initialization", "Immutability", "Constructors and object design"],
      exploring: [],
    },
    technologies: ["Java"],
    problem: "Many Java bugs come from not knowing what the language does under the surface.",
    approach: "Reproduce the bug, explain the mechanism, then fix it and write down the rule.",
    architecture: "A set of focused exercises, not an application.",
    whatILearned: ["Mutating an object used as a HashSet key can make it unfindable."],
    engineeringChallenges: [],
    githubUrl: P, liveUrl: P, screenshots: [], featured: true,
  },
  {
    title: "Production Incident Training Platform", slug: "incident-platform",
    shortDescription: "Concept: practice diagnosing realistic production failures, not just writing code that works.",
    longDescription: "An idea for a platform where developers work through incidents of increasing difficulty (L1, L2, L3). The point is the gap between 'the code works' and 'the system survives real-world failure'. Gamification is secondary.",
    status: "Concept",
    implementationStage: { implemented: [], building: [], exploring: ["Incident scenarios at L1 / L2 / L3", "User attempts and debugging", "Publishing and tagging incidents", "Progression", "Sandboxed environments"] },
    technologies: [],
    problem: "Tutorials rarely teach how to debug a system that is failing.",
    approach: "Scenario-based practice built around realistic failures.",
    architecture: "Not designed yet.",
    whatILearned: [], engineeringChallenges: ["Safely sandboxing failing environments (open question)."],
    githubUrl: P, liveUrl: P, screenshots: [], featured: true,
  },
  {
    title: "Front Office Management System", slug: "foms",
    shortDescription: "Spring Boot + MySQL business application with a basic frontend.",
    longDescription: "A practical CRUD / business-application project for working through a full request path in a realistic domain.",
    status: "Completed", implementationStage: none,
    technologies: ["Java", "Spring Boot", "MySQL"], problem: "Practice building a business application end to end.",
    approach: "Spring Boot backend on MySQL with a basic frontend.", architecture: "Add details here.",
    whatILearned: [], engineeringChallenges: [], githubUrl: P, liveUrl: P, screenshots: [], featured: false,
  },
  {
    title: "E-commerce application", slug: "ecommerce",
    shortDescription: "Partially developed Spring Boot + MySQL e-commerce app.",
    longDescription: "An unfinished e-commerce application. Listed because it's part of how I learned order-style flows, not as a finished shop.",
    status: "In Progress", implementationStage: none,
    technologies: ["Java", "Spring Boot", "MySQL"], problem: "Understand how catalog, cart and order flows fit together.",
    approach: "Built incrementally; incomplete.", architecture: "Add details here.",
    whatILearned: [], engineeringChallenges: [], githubUrl: P, liveUrl: P, screenshots: [], featured: false,
  },
  {
    title: "Student CRUD", slug: "student-crud",
    shortDescription: "A simple CRUD application for backend fundamentals.",
    longDescription: "A small application used to learn the basics: entities, repositories, controllers, persistence.",
    status: "Completed", implementationStage: none,
    technologies: ["Java", "Spring Boot"], problem: "Learn the basic backend request path.",
    approach: "Standard CRUD.", architecture: "Add details here.",
    whatILearned: [], engineeringChallenges: [], githubUrl: P, liveUrl: P, screenshots: [], featured: false,
  },
  {
    title: "Explorations", slug: "explorations",
    shortDescription: "Smaller experiments: virtual mouse, order and payment flows, idempotency, outbox pattern, OOP parking lot.",
    longDescription: "Experiments and concept studies that aren't finished products.",
    status: "Exploring",
    implementationStage: { implemented: [], building: [], exploring: ["Virtual mouse / AI-assisted interaction", "Order and payment flows", "Idempotency", "Outbox pattern", "OOP parking lot design"] },
    technologies: [], problem: "", approach: "", architecture: "", whatILearned: [], engineeringChallenges: [],
    githubUrl: P, liveUrl: P, screenshots: [], featured: false,
  },
];
