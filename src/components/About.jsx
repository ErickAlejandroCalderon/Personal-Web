import { Lightbulb, Users, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { t } = useLanguage();
  const [sectionRef, sectionVisible] = useIntersectionObserver({ threshold: 0.15 });

  const values = [
    {
      icon: <Users size={18} />,
      title: t('about.values.teamwork'),
      desc: t('about.values.teamworkDesc'),
    },
    {
      icon: <Brain size={18} />,
      title: t('about.values.analytical'),
      desc: t('about.values.analyticalDesc'),
    },
    {
      icon: <Lightbulb size={18} />,
      title: t('about.values.selfLearning'),
      desc: t('about.values.selfLearningDesc'),
    },
  ];

  return (
    <section className="section about grid-bg" id="about">
      <div className="container" ref={sectionRef}>
        <div className={`reveal${sectionVisible ? ' visible' : ''}`}>
          <div className="section-label">Perfil</div>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>

        <div className="about-content">
          <div className={`about-text reveal${sectionVisible ? ' visible' : ''} stagger-1`}>
            <p>{t('about.description')}</p>
            <p>{t('about.description2')}</p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">{t('about.stats.semester')}</div>
                <div className="about-stat-label">{t('about.stats.semesterLabel')}</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">{t('about.stats.projects')}</div>
                <div className="about-stat-label">{t('about.stats.projectsLabel')}</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">{t('about.stats.tech')}</div>
                <div className="about-stat-label">{t('about.stats.techLabel')}</div>
              </div>
            </div>
          </div>

          <div className={`about-values reveal from-right${sectionVisible ? ' visible' : ''} stagger-2`}>
            {values.map((val, i) => (
              <div className="about-value" key={i}>
                <div className="about-value-icon">{val.icon}</div>
                <div className="about-value-text">
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
