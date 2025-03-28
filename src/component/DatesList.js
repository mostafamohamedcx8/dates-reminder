import React from "react";
import { Col, Row } from "react-bootstrap";

export const Dateslist = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom my-2 ">
                  <img className="img-avt" src="12.png" alt="mostafa" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};
