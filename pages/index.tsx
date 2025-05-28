// pages/index.tsx - Home Page
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Layout from '@/components/Layout/Layout';
import { useTranslation } from '@/hooks/useTranslation';
import { GetStaticProps } from 'next';
import PanchangamTable from '@/components/PanchangamTable';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Row className="mt-25 py-5">
        <Col lg="5" md="12" className="my-5 py-5">
          <div className="right-container shadow-1 mb-3 bg-white px-3 py-3 text-black">
            <h4>Search Bar</h4>
          </div>
        </Col>
        <Col lg="7" md="12" className="my-5 py-5">
          <div className="left-container shadow-1 panchangam-block bg-white">
            <PanchangamTable />
          </div>
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
