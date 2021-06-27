import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "firebase/auth";
import { loginWithGitHub } from "../firebase"
import { loginWithFacebook } from "../firebase"
import { loginWithGoogle } from "../firebase"
import initFirebase from "../firebase";

initFirebase();

const SocialContainer = () => {

  const handleClickGoogle = () => {
    loginWithGoogle().then(user =>{
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  const handleClickGithub = () => {
    loginWithGitHub().then(user =>{
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }
  
  const handleClickFacebook = () => {
    loginWithFacebook().then(user =>{
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

    return ( 
        <div>
            <div className="social-container">
                <a href="#" onClick={handleClickFacebook} className="social" id="facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" onClick={handleClickGoogle} className="social" id="google">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" onClick={handleClickGithub} className="social" id="github">
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