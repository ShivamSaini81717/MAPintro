
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/120.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Introduction</h2>
                <form>
                <h5>Father Name <span>&nbsp; -&nbsp; &nbsp;Mr Mohan Lal Saini</span></h5><br/>
                <h5>Mother Name <span>&nbsp; -&nbsp; &nbsp; Mrs Sangeeta Saini</span></h5><br/>
                <h5>DOB<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp; 27/05/2000</span></h5><br/>
                {/* <h5>DOB<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp; 27/05/2000</span></h5> */}
                <h5>Address <span>&nbsp; -&nbsp; &nbsp; Hardev Nagar Mazra Road Shamli</span></h5>
                
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
