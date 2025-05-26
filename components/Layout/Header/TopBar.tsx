import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { Locale } from '@/locales';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TopBar() {
    const { t, locale, switchLanguage } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'te' as Locale, name: 'తెలుగు', flag: '🇮🇳' },
        { code: 'en' as Locale, name: 'English', flag: '🇺🇸' }
    ];
    const iconClassName = "text-storm gr-hover-text-white";
    const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="row top-bar">
        {/* Left: Language Links */}
        <div className="col-6 topbar-call text-start">
            <ul className="contact py-1 mt-1 mb-1 gr-text-10 gr-text-color gr-hover-text-orange">
                {languages.map((language, index) => (
                  <li key={index}>
                        <Link
                          href={pathname} // keep the current path
                          locale={language.code}
                          onClick={(e) => switchLanguage(language.code)}
                          className={locale === language.code ? 'lang-active' : ""}
                        >
                          {language.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Right: Social Icons */}
        <div className="col-6 topbar-social text-end">
          <ul className="social-icons py-2 list-unstyled mb-1 mt-1 mb-lg-0">
          <li className="me-0">
            <Link href="https://www.facebook.com/nrsharmatv" className={iconClassName}>
              <i className="icon fab fa-twitter"></i>
            </Link>
          </li>
          <li className="me-0">
            <Link href="https://twitter.com/NRSharmaTV" className={iconClassName}>
              <i className="icon fab fa-facebook"></i>
            </Link>
          </li>
          <li className="me-0">
            <Link href="https://www.instagram.com/ssbhakthi/" className={iconClassName}>
              <i className="icon fab fa-instagram"></i>
            </Link>
          </li>
          <li className="me-0">
            <Link href="https://in.pinterest.com/nrsharmatv/" className={iconClassName}>
              <i className="icon fab fa-pinterest"></i>
            </Link>
          </li>
        </ul>
        </div>
      </div>
  );
}
