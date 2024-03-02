import { Button, Container } from "react-bootstrap";

function About(){
    return(<>
    <Container className="about-me">
        <Button variant="outline-light" className="justify-content-center  who-button" >About Me</Button>
        <br/>
        <br/>

        <span>
        Hey there! I'm Gayatri Pande, a Computer Engineering student passionate about web development. I'm diving deep into HTML, CSS, and JavaScript, while mastering React.js to build dynamic web applications. With each line of code, I'm one step closer to my goal of becoming a full-stack developer, bringing ideas to life in the digital realm.


        </span>
        
    </Container>
    </>);
}
export default About;