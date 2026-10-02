import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { notes } from "@/content/notes";
import ProjectCard from "@/components/ProjectCard";
const ok = (v: string) => v !== "PLACEHOLDER";
export default function Home() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="w nav">
        <strong>{site.name}</strong>
        <nav aria-label="Primary"><a href="#projects">Projects</a><a href="#notes">Notes</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      </header>
      <main id="main" className="w">
        <section className="hero">
          <h1>{site.headline}</h1>
          <p className="lead">{site.intro}</p>
          <p className="cta">
            <a className="btn" href="#projects">View projects</a>
            <a className="btn ghost" href={site.resumeUrl}>View resume</a>
            {ok(site.github) && <a href={site.github}>GitHub</a>}
            {ok(site.linkedin) && <a href={site.linkedin}>LinkedIn</a>}
            <a href="#contact">Contact</a>
          </p>
          <ol className="path" aria-label="How I approach a backend project">
            {site.path.map(s => <li key={s}>{s}</li>)}
          </ol>
        </section>

        <section>
          <h2>How I work</h2>
          <div className="cols">{site.focus.map(f => <div key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>)}</div>
        </section>

        <section id="projects">
          <h2>Selected projects</h2>
          <p className="muted">Each one is labeled with where it actually stands.</p>
          {featured.map(p => <ProjectCard key={p.slug} p={p} />)}
          <h3 className="sub">Other work</h3>
          {rest.map(p => <ProjectCard key={p.slug} p={p} />)}
        </section>

        <section id="notes">
          <h2>Engineering notes</h2>
          {notes.map(n => (
            <details key={n.slug}><summary>{n.title}<span className="muted"> {n.summary}</span></summary>
              {n.body.map((b, i) => <p key={i}>{b}</p>)}</details>
          ))}
        </section>

        <section id="skills">
          <h2>Skills</h2>
          {site.skills.map(g => <div className="skill" key={g.label}><h3>{g.label}</h3><p>{g.items.join(", ")}</p></div>)}
        </section>

        {site.experience.length > 0 && (
          <section><h2>Experience</h2>
            {site.experience.map(e => <div key={e.role + e.org}><h3>{e.role}, {e.org}</h3><p className="muted">{e.period}</p><ul>{e.points.map(x => <li key={x}>{x}</li>)}</ul></div>)}
          </section>
        )}

        <section>
          <h2>Education</h2>
          {site.education.map(e => <div className="skill" key={e.title}><h3>{e.title}</h3><p>{[e.place, e.year, e.detail].filter(Boolean).join(", ")}</p></div>)}
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <p className="cta"><a className="btn" href={site.resumeUrl} target="_blank" rel="noopener">View resume</a><a className="btn ghost" href={site.resumeUrl} download>Download resume</a></p>
        </section>

        <section id="about"><h2>About</h2>{site.about.map((t, i) => <p key={i}>{t}</p>)}</section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="cta">
            {ok(site.email) ? <a href={`mailto:${site.email}`}>{site.email}</a> : <span className="muted">Email: add in content/site.ts</span>}
            {ok(site.github) && <a href={site.github}>GitHub</a>}
            {ok(site.linkedin) && <a href={site.linkedin}>LinkedIn</a>}
          </p>
        </section>
      </main>
      <footer className="w muted">{site.name}, {new Date().getFullYear()}</footer>
    </>
  );
}
