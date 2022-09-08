import koalaImg from "../assets/images/koala-3d.jpg";
import { Container } from "react-bootstrap";
import '../stylespage/contact.scss';


export const Contact = () => {
  return (
    <Container className="mb-4">
      <h6 className="mt-3" style={{fontSize: "2.4rem"}}>Contact Us</h6>
      <div className="main--contact">
        <div>    
          <aside className="aside--contact">
            <h3 className="contact--title" style={{fontSize: '1.8rem'}}>Horaires d'ouverture</h3>
            <div className="div--contact">
              <nav>
                <ul>
                  <span className="span--moments">Matin</span>
                  <li>
                    <div className="div--hours">08h00-12h00</div>
                  </li>
                  <span className="span--moments">Après-midi</span>
                  <li>
                    <div className="div--hours">13h00-15h00</div>
                  </li>
                  <li>
                    <div className="div--hours">15h30-18h00</div>
                  </li>
                </ul>    
              </nav>
            </div>
          </aside>
        </div>
        
        <div className="div--koala">
          <img className="koala" width="500" height="300" src={koalaImg} alt="koala-3d" />
        </div>
      </div>

      <div>
        <div className="title--div">
          <h3 className="h3--title" style={{fontSize: '3rem'}}>Contact</h3>
        </div>

        <div className="contact--div">
          <h5>Entreprise SA</h5>
          <p>Rue des Maronniers 18</p>
          <p>1004 Lausanne</p>
          <p>021 314 77 67</p>
          <p>entreprise@mail.ch</p>
        </div>
      </div>
    </Container>
  );
}