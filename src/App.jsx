import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
