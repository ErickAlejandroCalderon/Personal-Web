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
      </div>
    </footer>
  );
}
