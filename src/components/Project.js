import { Container , Card , Button } from "react-bootstrap";
import  {Row ,Col} from "react-bootstrap"
// import react from "react";
import pro1 from '../assets/web_ilY3NoA.webp';
import  pro2 from '../assets/web_ilY3NoA.webp';
import pro3 from '../assets/web_ilY3NoA.webp';

function Project (){
    return(<>

<Container className="mt-5  projects justify-content-center ">
            <h2 className="mb-4  text-align-center">Projects</h2>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="" src={pro1} />
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                                Description of Project 1 goes here.
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={pro2} className="p2-img" />
                        <Card.Body>
                            <Card.Title>Project 2</Card.Title>
                            <Card.Text>
                                Description of Project 2 goes here.
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={pro3} />
                        <Card.Body>
                            <Card.Title>Project 3</Card.Title>
                            <Card.Text>
                                Description of Project 3 goes here.
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Project;