// components/Layout/Header.tsx
import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { Locale } from '@/locales';

export const Header: React.FC = () => {
  const { t, locale, switchLanguage } = useTranslation();

  const languages = [
    { code: 'te' as Locale, name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'en' as Locale, name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} href="/">
          {t.common.welcome}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              {t.navigation.home}
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              {t.navigation.about}
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              {t.navigation.contact}
            </Nav.Link>
          </Nav>
          
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="language-dropdown">
                {currentLanguage?.flag} {currentLanguage?.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languages.map((language) => (
                  <Dropdown.Item
                    key={language.code}
                    onClick={() => switchLanguage(language.code)}
                    active={locale === language.code}
                  >
                    {language.flag} {language.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;