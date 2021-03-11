import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebookF, faGoogle, faTwitter} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    return (
        <div className="container text-centre" >
             <div className="font">
             <FontAwesomeIcon icon={faFacebookF}/>
                <FontAwesomeIcon icon={faTwitter}/>
               <FontAwesomeIcon icon={faGoogle}/>
             </div>
                
        </div>
    );
};

export default Footer;