import React from "react";
import { Row, Col } from "react-bootstrap";
export const Datescount = ({ person }) => {
  return (
    <div>
      <Row className="justify-content-center my-2">
        <Col sm="8" className="">
          لديك {person.length} مواعيد اليوم
        </Col>
      </Row>
    </div>
  );
};
