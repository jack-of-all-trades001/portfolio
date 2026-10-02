import type { Project } from "@/content/projects";
import StatusBadge from "./StatusBadge";
const ok = (v: string) => v && v !== "PLACEHOLDER";
const List = ({ t, items }: { t: string; items: string[] }) =>
  items.length ? <section><h2>{t}</h2><ul>{items.map(i => <li key={i}>{i}</li>)}</ul></section> : null;
const Text = ({ t, v }: { t: string; v: string }) => (v ? <section><h2>{t}</h2><p>{v}</p></section> : null);
export default function ProjectDetail({ p }: { p: Project }) {
  const s = p.implementationStage;
  return (
    <article className="detail">
      <StatusBadge status={p.status} />
      <h1>{p.title}</h1>
      <p className="lead">{p.longDescription}</p>
      {p.date && <p className="tech">{p.date}</p>}
      <p className="links">
        {ok(p.githubUrl) && <a href={p.githubUrl}>GitHub</a>}
        {ok(p.liveUrl) && <a href={p.liveUrl}>Live demo</a>}
      </p>
      <Text t="Problem" v={p.problem} /><Text t="Approach" v={p.approach} /><Text t="Architecture" v={p.architecture} />
      <section className="stages">
        <List t="Implemented" items={s.implemented} /><List t="Currently building" items={s.building} /><List t="Exploring" items={s.exploring} />
      </section>
      <List t="Engineering challenges" items={p.engineeringChallenges} />
      <List t="What I learned" items={p.whatILearned} />
      {p.technologies.length > 0 && <Text t="Technologies" v={p.technologies.join(", ")} />}
      {p.screenshots.map(x => <img key={x.src} src={x.src} alt={x.alt} className="shot" />)}
    </article>
  );
}
