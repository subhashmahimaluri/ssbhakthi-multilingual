import Layout from "@/components/Layout/Layout";
import TithiList from "@/components/TithiList";
import { Row, Col } from "react-bootstrap";

export default function Calender() {
  const currentYear = new Date().getFullYear();
  return (
    <Layout>
    <Row className="py-5 mt-25">
      <Col xl="8" lg="8" md="12" className="py-5 my-5">
          <div className="py-3 left-container bg-white shadow-1 panchangam-block text-black px-5 px-md-10">
            <h1 className="text-center">Telugu Calendar 2025</h1>
            <p className="text-center">All Telugu tithi times, all festivals dates, Eclipse dates ... etc.</p>
              <TithiList />
          </div>
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
