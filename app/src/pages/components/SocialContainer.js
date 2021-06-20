import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SocialContainer = () => {
    return ( 
        <div>
            <div className="social-container">
                <a href="#" className="social">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="social">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

            <style jsx >{`
        
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
        * {
          box-sizing: border-box;
        }
        
        .social-container {
          margin: 20px 0;
        }
        .social-container a {
          border: 1px solid #DDDDDD;
          border-radius: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 0 5px;
          height: 40px;
          width: 40px;
        }
      `}
      </style>
        </div>
        
    );
}
 
export default SocialContainer;