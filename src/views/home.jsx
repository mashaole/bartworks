import React, { useState, useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'
//var route = ""

var headings = ['ARTWORKS', 'CLOTHING', 'ARTIST', 'EXHIBITIONS'];

var i = 0;

function Home() {
  const [route, setRoute] = useState("")
  const funRef = useRef(null);

   useEffect(() => {
    setInterval(function () {
      const images = [
        'url("https://res.cloudinary.com/ddjvdcads/image/upload/v1640020429/b%20artworks_2021-12-20_19_11/art/krcvdb7vnclexhdmr0fz.jpg")',
        'url("https://res.cloudinary.com/ddjvdcads/image/upload/v1640020428/b%20artworks_2021-12-20_19_11/art/bjq1ut5qhignr9t0jdk3.jpg")',
        'url("https://res.cloudinary.com/ddjvdcads/image/upload/v1640020431/b%20artworks_2021-12-20_19_11/art/viavexxb8mxuoyvd2yra.jpg")',
        'url("https://res.cloudinary.com/ddjvdcads/image/upload/v1640020441/b%20artworks_2021-12-20_19_11/art/vmpv8yabk910qvzqweeu.jpg")',
      ]
      const section = document.querySelector('.Hero')
      const bg = images[Math.floor(Math.random() * images.length)]
      section.style.backgroundImage = bg
      document.querySelector('.text').innerHTML = headings[i];
      setRoute("/" + headings[i].toLowerCase())
      if (i == (headings.length - 1)) {
        i = 0;
      } else {
        i++;
      }

    }, 7000)
    return () => clearInterval(funRef.current);
  },[])

  return (
    <div className='container'>
      <Helmet>
        <title>Home - B Artworks</title>
        <meta name="description" content="Be Artworks and Aspire to Inspire" />
        <meta property="og:title" content="Home - B Artworks" />
        <meta
          property="og:description"
          content="Be Artworks and Aspire to Inspire"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020420/b%20artworks_2021-12-20_19_11/exhibit/j9qxwbk3cjtnh7ohcyft.jpg"
        />
      </Helmet>
      <div className='Hero'>
        <a href={route}>
          <h1 className='text'>ARTWORKS</h1>
        </a>
      </div>
    </div>
  )
}

export default Home
