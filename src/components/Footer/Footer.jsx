

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const logo = "https://res.cloudinary.com/ddjvdcads/image/upload/c_scale,h_28/v1647174190/jcxnebzjxzyqmouq2clj.png"

function Footer() {
    return (
        <div className='footer'>
            <a href="https://www.iampresenting.com">
                <img src={logo} loading="lazy" style={{ width: "70%", height: "70%" }} alt="IAmPresenting" />
            </a><hr />
            Copyright © 2022 B Artworks.  All rights reserved.No part of this site may be reproduced without our written permission.
        </div>
    )
}

export default Footer;