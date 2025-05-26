// pages/index.tsx - Home Page
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Layout from '@/components/Layout/Layout';
import { useTranslation } from '@/hooks/useTranslation';
import { GetStaticProps } from 'next';
import PanchangamTable from '@/components/PanchangamTable';
import Panchangam from '@/components/Panchangam';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Row className="py-5 mt-25">
        <Col lg="5" md="12" className="py-5 my-5">
        <div className="right-container bg-white shadow-1 text-black px-3 py-3 mb-3">
        <h4>Search Bar</h4>
        </div>
        </Col>
        <Col lg="7" md="12" className="py-5 my-5">
        <div className="left-container bg-white shadow-1 panchangam-block">
          <Panchangam />
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