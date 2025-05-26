import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SearchBarHeader from './SearchBarHeader';
import { useState } from 'react';
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import { device } from '@/utils/breakpoints';
import TopBar from './TopBar';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useTranslation } from '@/hooks/useTranslation';

const navItems = [
  { name: 'Home', href: '/' },
  {name: 'Calendar', href: "/calendar"},
  { name: 'Panchangam', href: '/panchangam' }
];

type NavItem = {
  name: string;
  href: string;
};

const SiteHeader = styled.header`
  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  background: #fe7102;
  box-shadow: 0 12px 34px -11px rgb(65 62 101 / 10%);
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.6s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.6s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: rgb(252, 253, 254);;
    }
  }
`;

export default function Header() {
  const pathname = usePathname();
  const [display, setDisplay] = useState(false);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  const hideSearch = !display ? 'hide-div' : '';
  const hideNav = display ? 'hide-div' : '';

   useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <SiteHeader
  className={`site-header site-header--absolute py-0 sticky-header site-header--menu-center
    ${showScrolling ? 'scrolling' : ''}
    ${showReveal ? 'reveal-header' : ''}
  `}
>
            {!showReveal ? (
    <Container>
      <TopBar />
      </Container>
       ) : ('')}
      <div className="navbar site-navbar offcanvas-active navbar-expand-lg px-0 py-sm-6 py-lg-2">
        {/* Logo */}
        <Container>
          <div className="brand-logo">
              <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width="170" height="61" alt="SS Bhakthi"  />
        </Link>
            </div>
        

        {/* Menu */}
        <div className="collapse navbar-collapse">
        <div className="navbar-nav-wrapper">
            <ul className={`navbar-nav main-menu d-none d-lg-flex fa-pull-left ${hideNav}`}>
              {/* navItems.map goes here */}
              {navItems.map((item: NavItem) => (
                <li className="nav-item dropdown" key={item.name}>
                  <Link
                    href={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul> {/* Close main-menu ul */}

            {/* Search Bar */}
            <div className={`header-search fa-pull-left my-2 mx-2 me-md-6 ${hideSearch}`}>
              <SearchBarHeader mobile={false} />
            </div>

            {/* Search Button */}
            <div className="my-4 mr-20 pb-1 pt-1 ps-6 text-white search-btn fa-pull-right fa-border-left-primary">
              <i className="gr-text-8 text-primary fa fa-search show-curser" onClick={() => setDisplay(!display)}></i>
            </div>
        </div> </div>
        </Container>
      </div> 
    
    </SiteHeader>
  );
}
