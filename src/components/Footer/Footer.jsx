

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const logo ="https://res.cloudinary.com/ddjvdcads/image/upload/v1641463445/oembsy727jbrkpo7rfde.png"

function Footer() {
    return (
            <div className='footer'>
            <a href="https://www.iampresenting.com">
                <img src={logo}  loading="lazy" style={{width:"70%",height:"70%"}} alt="IAmPresenting" />
                </a><hr/>
                Copyright © 2022 B Artworks.  All rights reserved.No part of this site may be reproduced without our written permission.
            </div>
    )
}

export default Footer;