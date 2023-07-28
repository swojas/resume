import { QRCodeSVG } from 'qrcode.react';

function AboutMe() {
  return (
    <div className="personal-info">
      <div className="profile-info">
        <img className="profile-img" src="https://avatars.githubusercontent.com/u/60619308?v=4" alt="Profile Picture" />
        <div className="profile-details">
          <h2>Swojas Bhalunkar</h2>
          <p>Email: swojas12@gmail.com</p>
          <p>Phone: (+91) 9130313369</p>
        </div>
      </div>
      <div className="qrcode-container">
        <QRCodeSVG className="qrcode" value="https://github.com/swojas" />
      </div>
    </div>
  );
}

export default AboutMe;
