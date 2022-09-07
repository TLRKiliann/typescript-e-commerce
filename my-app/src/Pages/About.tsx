import koalaContact from "../assets/images/koala-3d.jpg";
import cloudsEffect from "../assets/images/blue_cloud.jpg";
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

        <img src={cloudsEffect} className="clouds--bg" alt="no clouds(about)" />

        <div className="divtitle--about">
          <h1 className="title--about">About Us</h1>
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
