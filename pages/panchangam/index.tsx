'use client';
import { Row, Col } from "react-bootstrap";
import Layout from '@/components/Layout/Layout';
import PanchangamTable from '@/components/PanchangamTable';

export default function PanchangamPage() {

  return (
    <Layout>
    <Row className="py-5 mt-25">
      <Col xl="8" lg="8" md="12" className="py-5 my-5">
          <PanchangamTable />
      </Col>
      <Col xl="4" lg="4" md="12" className="py-5 my-5">
          <div className="right-container bg-white shadow-1 text-black px-3 py-3 mb-3">
              <h2>Sidebar</h2>
          </div>
      </Col>
  </Row>
  </Layout>
  );
}
