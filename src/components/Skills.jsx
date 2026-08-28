import { useEffect, useRef } from 'react';
import { Code, Layout, Database, Server, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const categoryIcons = {
  backend: <Code size={18} />,
  frontend: <Layout size={18} />,
  database: <Database size={18} />,
  infrastructure: <Server size={18} />,
  tools: <Wrench size={18} />,
};

export default function Skills() {
  const { t } = useLanguage();
  const [sectionRef, sectionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const animatedRef = useRef(false);

  const categories = t('skills.categories');

  // Animate skill bars when section becomes visible
  useEffect(() => {
    if (sectionVisible && !animatedRef.current) {
      animatedRef.current = true;
      const fills = document.querySelectorAll('.skill-bar-fill');
      fills.forEach((fill) => {
        const level = fill.dataset.level;
        setTimeout(() => {
          fill.style.width = `${level}%`;
        }, 200);
      });
    }
  }, [sectionVisible]);

  return (
    <section className="section skills grid-bg" id="skills">
      <div className="container" ref={sectionRef}>
        <div className={`reveal${sectionVisible ? ' visible' : ''}`}>
          <div className="section-label">Stack</div>
          <h2 className="section-title">
            {t('skills.title').split(' ')[0]}{' '}
            <span className="gradient-text">
              {t('skills.title').split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </div>

        <div className="skills-grid">
          {Object.entries(categories).map(([key, cat], catIdx) => (
            <div
              key={key}
              className={`skill-category reveal${sectionVisible ? ' visible' : ''} stagger-${catIdx + 1}`}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {categoryIcons[key] || <Code size={18} />}
                </div>
                <h3 className="skill-category-title">{cat.name}</h3>
              </div>

              {cat.items.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      data-level={skill.level}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
