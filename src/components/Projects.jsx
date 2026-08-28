import { FolderOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Projects() {
  const { t } = useLanguage();
  const [sectionRef, sectionVisible] = useIntersectionObserver({ threshold: 0.1 });

  const projects = t('projects.items');

  return (
    <section className="section projects" id="projects">
      <div className="container" ref={sectionRef}>
        <div className={`reveal${sectionVisible ? ' visible' : ''}`}>
          <div className="section-label">Work</div>
          <h2 className="section-title">
            {t('projects.title').split(' ')[0]}{' '}
            <span className="gradient-text">
              {t('projects.title').split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card reveal scale-up${sectionVisible ? ' visible' : ''} stagger-${i + 1}`}
            >
              <div className="project-card-header">
                <div className="project-card-icon">
                  <FolderOpen size={20} />
                </div>
                <span className="project-card-number">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag, j) => (
                    <span className="project-tag" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
