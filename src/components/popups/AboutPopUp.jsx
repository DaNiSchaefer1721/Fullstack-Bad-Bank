import { Button, Box } from "@mui/material";

const AboutPopUp = ({ handleClose }) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              <span className="">About Bad Bank</span>
              <hr />
              <div>
                <Box m={2} className="custom-btn-group">
                  <div>
                    <h2>What is Bad Bank?</h2>
                    <p>
                      Bad Bank is the Capstone Project for the MITxPro Full Stack Web Development{" "}
                      <a href="https://executive-ed.xpro.mit.edu/professional-certificate-coding?utm_source=Google&utm_network=g&utm_medium=c&utm_term=mit%20full%20stack%20developer&utm_location=9011929&utm_campaign_id=17059210457&utm_adset_id=135511781189&utm_ad_id=594862351424">
                        MIT - Fullstack Development with MERN
                      </a>
                      . The reason this project is called Bad Bank, is because there is no cyber security set up for this mock up of a Banking Application.
                      <br /> <br />
                      In this project we use the React application where
                      we apply concepts such as validations, hooks, context, routing, etc...
                      This is my first attempt from
                      to deploy a React application using BOTH Front & Backend Development.
                  
                      <br /> <br />
                      <div className="features">
                        
                        <div>
                          Some of the usable FUNctions (Yes pun intended😁) are:
                          <ul>
                            <li>Create Account</li>
                            <li>Edit Account</li>
                            <li>Login to Account</li>
                            <li>Deposit</li>
                            <li>Withdraw</li>
                            <li>Transactions List</li>
                            <li>Account Charting</li>
                          </ul>
                        </div>
                      </div>
                    </p>
                    <h5>
                    Author/Editor: DaNi Schaefer <h6>MIT Student</h6>
                    </h5>

                    <h6>
                      <a href="https://github.com/DaNiSchaefer1721/Bad-Bank-Fullstack.git">
                      Check out my GitHub! 
                      </a>
                    </h6>
                  </div>
                </Box>

                <Box m={2} className="custom-btn-group">
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPopUp;
