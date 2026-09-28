import { ExternalLink, ImageOff } from "lucide-react";
import type { Project } from "../config";
import { GithubIcon } from "./BrandIcons";

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden p-0">
      {/* Imagen / placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-white/5">
        {project.image ? (
          <img
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-grid-light bg-[size:24px_24px] text-ink-400 dark:bg-grid-dark dark:text-slate-500">
            <ImageOff className="h-8 w-8" />
            <span className="text-xs">Agrega una imagen en /public</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-ink-600 dark:text-slate-400">{project.description}</p>

        {(project.problem || project.result) && (
          <dl className="mt-4 space-y-2 text-sm">
            {project.problem && (
              <div>
                <dt className="inline font-semibold text-ink-700 dark:text-slate-300">Problema: </dt>
                <dd className="inline text-ink-600 dark:text-slate-400">{project.problem}</dd>
              </div>
            )}
            {project.result && (
              <div>
                <dt className="inline font-semibold text-ink-700 dark:text-slate-300">Resultado: </dt>
                <dd className="inline text-ink-600 dark:text-slate-400">{project.result}</dd>
              </div>
            )}
          </dl>
        )}

        {project.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex gap-3 pt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
            >
              <ExternalLink className="h-4 w-4" /> Ver proyecto
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-slate-400 dark:hover:text-white"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
