// EDIT THIS FILE: personal info, links, resume, education, skills, about, experience.
// Any value equal to "PLACEHOLDER" is hidden or flagged by the UI until you replace it.
export const site = {
  name: "Dachepalli Rama Krishna",
  url: "https://example.com", // PLACEHOLDER: your deployed domain (used for SEO / Open Graph)
  headline: "I'm learning to build backend systems that stay correct when things go wrong.",
  intro:
    "Early-career software engineer (B.Tech CSE, 2025) working in Java and Spring Boot. I build projects and then keep pushing them: authentication, domain modeling, transactions, failure handling.",
  email: "PLACEHOLDER",
  github: "PLACEHOLDER",
  linkedin: "PLACEHOLDER",
  resumeUrl: "/resume/resume.pdf", // replace the file in public/resume/
  // The progression I try to follow in every project. Edit freely.
  path: [
    "Business requirement", "Domain model", "Database", "API", "Authentication",
    "Validation", "Transaction behavior", "Failure scenarios", "Testing", "Production concerns",
  ],
  focus: [
    { title: "Understand the system first", text: "I prefer working out why each layer exists before reaching for a framework feature." },
    { title: "Treat money-like data seriously", text: "Wallets and payments force decisions about consistency, idempotency, authentication and failure. That is why I build in that direction." },
    { title: "Grow a project in stages", text: "Start with a working API, then add stronger modeling, auth, transactional correctness and failure handling, and record each step." },
  ],
  skills: [
    { label: "Core, used in my projects", items: ["Java", "Spring Boot", "REST APIs", "MySQL", "PostgreSQL", "Git / GitHub", "Object-oriented programming", "Data structures & algorithms"] },
    { label: "Applying now", items: ["Password hashing (BCrypt)", "JWT authentication", "Database design & ER diagrams", "API testing with Postman"] },
    { label: "Exploring", items: ["Automated API testing", "JMeter", "Transaction flows", "Idempotency", "Outbox pattern", "Microservice concepts", "Production incident analysis"] },
  ],
  education: [
    { title: "B.Tech, Computer Science & Engineering (AI/ML specialization)", place: "Amrita Sai Institute of Science & Technology (JNTUK R20)", year: "2025", detail: "CGPA 7.42" },
    { title: "Intermediate (MPC)", place: "", year: "", detail: "93.2%" }, // PLACEHOLDER: add college / year
    { title: "SSC", place: "", year: "", detail: "10.0 GPA" }, // PLACEHOLDER: add school / year
  ],
  // Add internships / jobs here. Empty list hides the section.
  experience: [] as { role: string; org: string; period: string; points: string[] }[],
  about: [
    "I'm a 2025 graduate learning backend engineering by building. Right now that means a Spring Boot wallet backend, adding authentication and stronger domain rules, and a Java repository where I study fundamentals through the bugs they cause.",
    "The problems that interest me are the ones where being nearly right isn't enough: money movement, retries, duplicate requests, partial failures. I want to grow from student implementations toward production-minded systems.",
    "I'm looking for Java/backend roles, ideally where correctness and reliability matter, including fintech.",
  ],
};
