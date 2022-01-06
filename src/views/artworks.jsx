import React from 'react'

import { Helmet } from 'react-helmet'
import './artworks.css'

const Artworks = () => {
    return (
      <div className='container'>
        <Helmet>
          <title>Artworks - B Artworks</title>
          <meta
            name="description"
            content="View some of the B Artworks and Aspire to Inspire"
          />
          <meta property="og:title" content="Artworks - B Artworks" />
          <meta
            property="og:description"
            content="View some of the B Artworks and Aspire to Inspire."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7842c45c-d554-4849-91d6-abd1a0c1e9f1/97dc4012-ad95-41fb-8445-20e3c8ad8529?org_if_sml=1"
          />
        </Helmet>
        <h1 className='textt'>Artworks</h1>
      </div>
    )
  }
  
  export default Artworks