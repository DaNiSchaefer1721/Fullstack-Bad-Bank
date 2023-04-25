import { useState } from "react";
import AboutPopUp from "./popups/AboutPopUp";

const Home = () => {
  const [isAboutPopUp, setIsAboutPopUp] = useState(false);

  const toggleAboutPopUp = () => {
    setIsAboutPopUp(!isAboutPopUp);
  };

  const customStyles = {
    width: "25rem",
    padding: "10px",
    zIndex: "-1",
  };

  return (
    <>
      <div className="card-container">
        <div className="card" style={customStyles}>
          <h5 className="card-title">Welcome to Bad Bank!
          🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖💸🐖
          </h5>
          
          <div className="card-body">
            <p className="card-text">
                
              <span className="bad-policy-practice">Please do not use your real data on this site, this is for educational uses only. Thank you!</span> 
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="card-container">
        <button onClick={toggleAboutPopUp} className="btn btn-primary">
          About Bad Bank
        </button>
      </div>

      {isAboutPopUp && <AboutPopUp handleClose={toggleAboutPopUp} />}
    </>
  );
};

export default Home;