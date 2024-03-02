// import { Form } from "react-bootstrap";
import {Container , Row , Col} from "react-bootstrap";
import {Form , Button} from "react-bootstrap";



function Contact(){
    return(<>

<Container className="contact-container m-4 p-5">
   
    <Row className="contact-row">
        <Col className="con-col">
            <h1>CONTACT</h1>
            <h3>Let's connect and embark on this exciting journey together!</h3>
        </Col>
        <Col className="con-col">
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        

      <Form.Group className="mb-3" controlId="formGridAddress1" type="textarea">
        <Form.Label>Message</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>
      </Row>
      


        
      

      <Button variant="primary" type="submit">
        Let's Connect
      </Button>
    </Form>
        </Col>
    </Row>
</Container>

    </>);
}

export default Contact;