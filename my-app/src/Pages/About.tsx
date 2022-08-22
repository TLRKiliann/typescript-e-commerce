import koalaContact from "../assets/images/koala-3d.jpg";
import '../styles/about.scss';


export const About = () => {
  return (
    <div className="text-hide" >
      <img 
        src={koalaContact} style={{width: "84%", position: "fixed"}}
        className="koala--bg"
        alt="koala-3d(about)" />
      
      <h6 style={{fontSize: "3rem"}}>About Us</h6>

      <div className="divanim--about">
        <p className="anim--about">We improved our work with you</p>
        <p className="anim--about">Severals services</p>
        <p className="anim--about">Since 1997</p>
      </div>

    </div>
  );
}
