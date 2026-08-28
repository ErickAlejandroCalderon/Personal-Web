import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Education() {
  const { t } = useLanguage();
  const [sectionRef, sectionVisible] = useIntersectionObserver({ threshold: 0.1 });

  const educationItems = [
    {
      period: t('education.university.period'),
      degree: t('education.university.degree'),
      school: t('education.university.school'),
      details: t('education.university.details'),
      icon: <GraduationCap size={18} />,
    },
    {
      period: t('education.technical.period'),
      degree: t('education.technical.degree'),
      school: t('education.technical.school'),
      details: t('education.technical.details'),
      icon: <Award size={18} />,
    },
  ];

  const languages = t('education.languages');

  return (
    <section className="section education grid-bg" id="education">
      <div className="container" ref={sectionRef}>
        <div className={`reveal${sectionVisible ? ' visible' : ''}`}>
          <div className="section-label">Background</div>
          <h2 className="section-title">
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
          <p className="section-subtitle">{t('education.subtitle')}</p>
        </div>

        <div className="education-timeline">
          {educationItems.map((item, i) => (
            <div
              key={i}
              className={`education-item reveal from-left${sectionVisible ? ' visible' : ''} stagger-${i + 1}`}
            >
              <div className="education-dot" />
              <div className="education-card">
                <div className="education-period">{item.period}</div>
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-school">{item.school}</p>
                <ul className="education-details">
                  {item.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal${sectionVisible ? ' visible' : ''} stagger-3`}>
          <div className="section-label" style={{ marginTop: 56 }}>
            {t('education.languagesTitle')}
          </div>
          <div className="languages-grid">
            {languages.map((lang, i) => (
              <div className="language-card" key={i}>
                <div className="language-name">{lang.name}</div>
                <div className="language-level">{lang.level}</div>
                {lang.badge && (
                  <span className="language-badge">{lang.badge}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
