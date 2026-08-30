import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          {t('footer.made')} {t('footer.by')} · © {year} · {t('footer.rights')}
        </p>
        <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>
          OP<span style={{ color: 'var(--color-primary)' }}>81</span>
        </p>
      </div>
    </footer>
  );
}
