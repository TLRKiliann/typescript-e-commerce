import { Container } from 'react-bootstrap';
import koalaContact from "../assets/images/koala-3d.jpg";
import '../styles/about.scss';


export const About = () => {
  return (
    <div className="text-hide">
      <Container className="sm-4">
        <img 
          src={koalaContact}
          className="koala--bg"
          alt="koala-3d(about)" />
        
        <h6 style={{fontSize: "3rem"}}>About Us</h6>

        <div className="divanim--about">
          <p className="anim--about">We improved our work with you</p>
          <p className="anim--about">Severals services</p>
          <p className="anim--about">Since 1997</p>
        </div>
      </Container>
    </div>
  );
}
