import { Container } from "react-bootstrap";
import { person } from "./data";
import { Datescount } from "./component/datescount";
import { Dateslist } from "./component/DatesList";
import { DatesAction } from "./component/DatesAction";
import React, { useEffect, useState } from "react";
function App() {
  const [Datesperson, setDatesPerson] = useState(person);
  useEffect(() => {
    setDatesPerson([]);
  }, []);
  const onDelete = () => {
    setDatesPerson([]);
  };
  const onshow = () => {
    setDatesPerson(person);
  };
  return (
    <div className="font color-body">
      <Container className="py-2">
        <Datescount person={Datesperson} />
        <Dateslist person={Datesperson} />
        <DatesAction deletdates={onDelete} showdates={onshow} />
      </Container>
    </div>
  );
}

export default App;
