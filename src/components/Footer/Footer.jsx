

import React from 'react';
import { Link } from 'react-router-dom';

const logo ="https://res.cloudinary.com/ddjvdcads/image/upload/v1641463445/oembsy727jbrkpo7rfde.png"
var style = {
    backgroundColor: "#fffff",
    textAlign: "center",
    left: "0",
    bottom: "0",
    height: "50%",
    fontSize: "90%",
    color: "black",
    padding: "3px",
    marginRight: "10px",
    position: "relatives",
    width: "100vw",
    overflow:"none"
}

var phantom = {
    display: 'grid',
    marginRight: '30px',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                Copyright © 2021 'Company'.  All rights reserved.No part of this site may be reproduced without our written permission.
            
                <a href="https://www.iampresenting.com">
                <img src={logo} loading="lazy" alt="IAmPresenting" />
                </a>
            </div>
        </div >
    )
}

export default Footer;