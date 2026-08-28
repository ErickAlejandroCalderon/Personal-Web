import { useState, useEffect } from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { animate, createTimeline } from 'animejs';

export default function Hero() {
  const { t } = useLanguage();
  const [codeLines, setCodeLines] = useState([]);

  const codeContent = [
    { type: 'comment', text: '// portfolio.config' },
    { type: 'code', text: '<span class="code-keyword">const</span> developer = {' },
    { type: 'code', text: '  name: <span class="code-string">"Erick Calderón"</span>,' },
    { type: 'code', text: '  role: <span class="code-string">"Systems Engineer"</span>,' },
    { type: 'code', text: '  stack: [<span class="code-string">"React"</span>, <span class="code-string">"Java"</span>, <span class="code-string">"Docker"</span>],' },
    { type: 'code', text: '  available: <span class="code-keyword">true</span>' },
    { type: 'code', text: '};' },
  ];

  useEffect(() => {
    // Langbase-style code reveal animation
    const timer = setTimeout(() => {
      codeContent.forEach((_, i) => {
        setTimeout(() => {
          setCodeLines(prev => [...prev, i]);
        }, i * 250);
      });
    }, 1800);

    // Vivid+Co style hero text entrance — scale + fade, not bounce
    const tl = createTimeline({ defaults: { ease: 'cubicBezier(0.25, 0.1, 0.25, 1)' } });

    tl.add('.hero-badge', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    }, 200)
    .add('.hero-name', {
      opacity: [0, 1],
      translateY: [60, 0],
      duration: 1200,
    }, 400)
    .add('.hero-title', {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
    }, 800)
    .add('.hero-cta-group', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    }, 1000)
    .add('.hero-code-block', {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 1000,
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero grid-bg" id="hero">
      <div className="hero-bg">
        <div className="hero-bg-gradient" />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge" style={{ opacity: 0 }}>
            <div className="hero-badge-dot" />
            {t('hero.badge')}
          </div>

          <h1 className="hero-name" style={{ opacity: 0 }}>
            {t('hero.name')}{' '}
            <span className="gradient-text">{t('hero.lastName')}</span>
          </h1>

          <p className="hero-title" style={{ opacity: 0 }}>
            {t('hero.title')}
          </p>

          <div className="hero-cta-group" style={{ opacity: 0 }}>
            <a href="/cv-erick-calderon.pdf" download className="btn-primary" id="download-cv">
              <Download size={16} />
              {t('hero.downloadCV')}
            </a>
            <a href="#contact" className="btn-secondary" onClick={scrollToContact} id="hero-contact">
              {t('hero.contact')}
              <ArrowDown size={16} />
            </a>
          </div>

          {/* Langbase-inspired code block */}
          <div className="hero-code-block" style={{ opacity: 0 }}>
            {codeContent.map((line, i) => (
              <div
                key={i}
                className="code-line"
                style={{
                  animation: codeLines.includes(i)
                    ? `code-line-appear 0.5s ${i * 0.05}s forwards`
                    : 'none',
                  opacity: codeLines.includes(i) ? undefined : 0,
                }}
                dangerouslySetInnerHTML={{
                  __html: line.type === 'comment'
                    ? `<span class="code-comment">${line.text}</span>`
                    : line.text,
                }}
              />
            ))}
            {codeLines.length === codeContent.length && (
              <span className="code-cursor" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
