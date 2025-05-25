// pages/index.tsx - Home Page
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Layout from '@/components/Layout/Layout';
import { useTranslation } from '@/hooks/useTranslation';
import { GetStaticProps } from 'next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t.pages.home.title}>
      <Row className="mb-5">
        <Col lg={8} className="mx-auto text-center">
          <h1 className="display-4 mb-4">{t.pages.home.title}</h1>
          <p className="lead mb-4">{t.pages.home.subtitle}</p>
          <p className="mb-4">{t.pages.home.description}</p>
          <Button variant="primary" size="lg" href="/about">
            {t.navigation.about}
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{t.navigation.about}</Card.Title>
              <Card.Text>
                Learn more about our multilingual application and its features.
              </Card.Text>
              <Button variant="outline-primary" href="/about">
                {t.common.welcome}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{t.navigation.contact}</Card.Title>
              <Card.Text>
                Get in touch with us for any questions or inquiries.
              </Card.Text>
              <Button variant="outline-primary" href="/contact">
                {t.navigation.contact}
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{t.common.language}</Card.Title>
              <Card.Text>
                Switch between Telugu and English languages easily.
              </Card.Text>
              <Button variant="outline-primary">
                {t.common.switchLanguage}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;

// For static generation
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};