import Link from "next/link";
import type { Project } from "@/content/projects";
import StatusBadge from "./StatusBadge";
export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="row">
      <StatusBadge status={p.status} />
      <div>
        <h3><Link href={`/projects/${p.slug}`}>{p.title}</Link></h3>
        <p>{p.shortDescription}</p>
        {p.technologies.length > 0 && <p className="tech">{p.technologies.join(", ")}</p>}
      </div>
    </article>
  );
}
