import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";
// import homeimg from '../assets/female-software-developer-flat-concept-illustration-vector.jpg'
import homeimg from '../assets/7bb0d27e44d8c2eff47276ae86bfd6a3.png';
function Home() {
    return(<>
     <Header/>
     <div className="home">
     <Container classname="container-fluid">
       <Row>
        <Col className=" col-6  p-5  transition-5s ">
         <span className="intro  ">
           Welcome to my corner of the web! I'm 
           <h1>GAYATRI PANDE</h1>
           , and I'm thrilled to have you here
         </span>
        </Col>
       <Col>
       <div>
        <img className="homeimg align-content-center" src={homeimg} alt="not found" />
       </div>
       </Col>
       </Row>  
     </Container>
    
     </div>
    </>);
}
export default Home;