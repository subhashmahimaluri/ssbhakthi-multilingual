import { capitalize } from '@/utils/utils';
import Link from 'next/link';
import { Row, Col } from "react-bootstrap";

export default function TithiYearNavigation({ tithiName, currentYear }: { tithiName: string; currentYear: number }) {
  const prevYear = currentYear - 1;
  const nextYear = currentYear + 1;

  return (
    <Row className="my-2">
        <Col xl="6" lg="6" md="6" className="py-2 my-2 text-start">
            <Link
        href={`/calendar/tithi/${tithiName.toLowerCase()}-${prevYear}`}
        className="fw-bold"
      >
        <span className="text-xl fw-bold">← </span>
        <span>{capitalize(tithiName)} {prevYear}</span>
      </Link>
        </Col>
        <Col xl="6" lg="6" md="6" className="py-2 my-2 text-end">
            <Link
        href={`/calendar/tithi/${tithiName.toLowerCase()}-${nextYear}`}
        className="fw-bold"
      >
        <span>{capitalize(tithiName)} {nextYear}</span>
        <span className="text-xl fw-bold"> →</span>
      </Link>
        </Col>
    </Row>
  );
}
