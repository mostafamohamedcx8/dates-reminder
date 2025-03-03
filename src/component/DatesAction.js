import React from "react";
import { Col, Row } from "react-bootstrap";

export const DatesAction = ({ deletdates, showdates }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button className="p-2" onClick={deletdates}>
          مسح الكل
        </button>
        <button className="p-2" onClick={showdates}>
          عرض الكل
        </button>
      </Col>
    </Row>
  );
};
