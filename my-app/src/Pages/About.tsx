import koalaContact from "../assets/images/koala-3d.jpg";
import '../stylespage/about.scss';

export const About = () => {
  return (
    <div className="div--about">
    
      <img
        src={koalaContact}
        className="koala--bg"
        alt="koala-3d(about)"
      />
      
      <div className="flexible--about">

        <div className="divtitle--about">
          <p className="title--about">About Us</p>
        </div>

        <div className="divanim--about">
          <p className="anim--about">Premium high-tech internet solutions</p>
          <p className="anim--about">High Speed Internet</p>
          <p className="anim--about">Custom Business Solutions </p>
          <p className="anim--about">Since 1993</p>
        </div>

      </div>

    </div>
  );
}
