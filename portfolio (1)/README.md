# Portfolio

Run: `npm install && npm run dev`. Build: `npm run build`.

Where to edit (UI components never need touching):
- Name, links, email, hero text, skills, education, about, experience: `content/site.ts`
- Projects (add / remove / change status / GitHub URL / screenshots): `content/projects.ts`
- Engineering notes: `content/notes.ts`
- Resume: replace `public/resume/resume.pdf` (path set in `content/site.ts`)
- Screenshots: put images in `public/shots/` and list them in the project's `screenshots`
- Anything set to "PLACEHOLDER" is hidden or flagged until replaced
