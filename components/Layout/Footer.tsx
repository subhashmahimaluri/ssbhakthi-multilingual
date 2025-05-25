// components/Layout/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from '@/hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>{t.common.welcome}</h5>
            <p>© 2024 Multilingual Next.js App</p>
          </Col>
          <Col md={6}>
            <h5>{t.navigation.contact}</h5>
            <p>Email: info@example.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;