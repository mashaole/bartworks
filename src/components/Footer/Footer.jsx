

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const logo = "https://res.cloudinary.com/ddjvdcads/image/upload/v1647468328/cbcm7skswzq8feuypbaf.png"

function Footer() {
    return (
        <div className='footer' onClick={() => window.open("https://www.iampresenting.com", "_blank")} >
            <a href="https://www.iampresenting.com">
                <img src={logo} loading="lazy" style={{ width: "80px", height: "30px" }} alt="IAmPresenting" />
            </a><hr />
            Copyright © 2022 B Artworks.  All rights reserved.No part of this site may be reproduced without our written permission.
        </div>
    )
}

export default Footer;