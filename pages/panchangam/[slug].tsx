'use client';
import { useParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Row, Col } from "react-bootstrap";
import { YexaaPanchang } from '@/lib/panchangam';
import { getTithiNumbersByName } from '@/utils/tithiMap';
import TithiList from '@/components/TithiList';
import LocationAccordion from '@/components/LocationAccordion';
import { capitalize, groupTithiByMonth, interpolate } from '@/utils/utils';
import TithiYearNavigation from '@/components/TithiYearNavigation';
import Layout from '@/components/Layout/Layout';
import { useLocation } from '@/context/LocationContext';
import { useTranslation } from '@/hooks/useTranslation';
import PanchangamTable from '@/components/PanchangamTable';

export default function PanchangamPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const { t } = useTranslation();

  if (!slug) return <div>Loading...</div>;

  return (
    <Layout>
    <Row className="py-5 mt-25">
      <Col xl="8" lg="8" md="12" className="py-5 my-5">
          <PanchangamTable date={slug} />
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
