// components/TithiList.tsx
import Link from 'next/link';
import { tithiMap } from '@/utils/tithiMap';
import { Row, Col } from "react-bootstrap";
import { capitalize } from '@/utils/utils';
import { useTranslation } from '@/hooks/useTranslation';

type TithiListProps = {
  title?: string;
  currentTithi?: string; // slug format, e.g., 'padyami'
  year?: number | string;
};

export default function TithiList({ title, currentTithi, year }: TithiListProps) {
  const { t } = useTranslation();

  const resolvedYear = year || new Date().getFullYear();
  const tithiNames = Object.keys(tithiMap);

  return (
    <div className="pricing-card pe-6 pe-xl-4 ps-6 ps-xl-4 bg-white rounded-8 mb-5 pt-4">
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title} - {year}</h2>}
      <div className="price-content light-mode-texts">
        <Row className="mb-8">
        {tithiNames
          .filter((tithi) => tithi !== currentTithi?.toLowerCase())
          .map((tithi, index) => (
            <Col key={index} sm="12" md="6" lg="3" xl="3" className="text-center my-2">
            <Link
              key={tithi}
              href={`/calendar/tithi/${tithi}-${resolvedYear}`}
              className="text-center gr-hover-shadow-1 d-flex flex-column border px-2 py-2"
            >
              {t.panchangam[tithi]}
            </Link>
            </Col>
          ))}
          </Row>
      </div>
    </div>
  );
}
