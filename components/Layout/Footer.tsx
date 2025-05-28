// components/Layout/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from '@/hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>welcome</h5>
            <p>© 2025 Yexaa Technologies Pvt Ltd</p>
          </Col>
          <Col md={6}>
            <h5>{t.panchangam.panchang}</h5>
            <p>Email: info@example.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
