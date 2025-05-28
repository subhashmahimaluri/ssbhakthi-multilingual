import { useTranslation } from '@/hooks/useTranslation';
import { Locale } from '@/locales';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import SocialIcons from '../SocialIcons';

export default function TopBar() {
  const { t, locale, switchLanguage } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'te' as Locale, name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'en' as Locale, name: 'English', flag: '🇺🇸' },
  ];
  const iconClassName = 'text-storm gr-hover-text-white';
  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="row top-bar">
      {/* Left: Language Links */}
      <div className="col-6 topbar-call text-start">
        <ul className="contact gr-text-10 gr-text-color gr-hover-text-orange mb-1 mt-1 py-1">
          {languages.map((language, index) => (
            <li key={index}>
              <Link
                href={pathname} // keep the current path
                locale={language.code}
                onClick={e => switchLanguage(language.code)}
                className={locale === language.code ? 'lang-active' : ''}
              >
                {language.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Social Icons */}
      <div className="col-6 topbar-social text-end">
        <SocialIcons />
      </div>
    </div>
  );
}
